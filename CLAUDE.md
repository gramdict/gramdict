# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The website for http://gramdict.ru, a web edition of A. A. Zaliznyak's "Grammatical Dictionary of the Russian
Language" (Грамматический словарь русского языка). The site is an ASP.NET Core Razor Pages app whose search page
is a React/TypeScript SPA. The dictionary data itself is not in this repo — the search page is purely a client for
a separate hosted API at `https://api.gramdict.ru`.

## Solution structure

`gramdictru.sln` has three projects:

- **`gramdictru/`** — the ASP.NET Core Razor Pages web app (net461). This is the actual website: static pages
  (About, Contact, howtouse, preface, names, contents, etc.) plus the `search` page, which hosts the React app.
- **`HtmlProcessor/`** (netstandard2.0) — small, dependency-free text/HTML processing library used to post-process
  every HTML response. No ASP.NET or web dependencies; it's pure string/regex logic and is unit tested in isolation.
- **`UnitTests/`** (net7.0, NUnit) — tests for `HtmlProcessor` only.

Note the differing target frameworks (net461 vs netstandard2.0 vs net7.0) — this is intentional, not a mistake to
"fix"; don't try to unify them.

## Build & test commands

Backend (.NET):
```
dotnet restore
dotnet build gramdictru.sln
dotnet test UnitTests/UnitTests.csproj
dotnet test UnitTests/UnitTests.csproj --filter "Name=Test1"   # single test
```

Frontend (inside `gramdictru/`):
```
npm install
npm run dev      # webpack-dev-server with hot module replacement, for local development
npm run build    # production webpack build, emits gramdictru/wwwroot/js/bundle.js
```
`npm install`/`npm run build` also needs `NODE_OPTIONS=--openssl-legacy-provider` on modern Node (see
`appveyor.yml`) because of the old webpack 4 toolchain.

Running the site locally requires .NET 4.6.1 and Node.js. `dotnet build -c Release` triggers the webpack production
build automatically via the `BuildWebpackFiles` MSBuild target in `gramdictru.csproj` (only for the Release
configuration); for Debug/dev work, run `npm run dev` yourself alongside `dotnet run`.

There is no linter configured in this repo (no ESLint/Prettier/StyleCop config) — don't invent lint commands.

CI is AppVeyor (`appveyor.yml`): `nuget restore`, `npm install` in `gramdictru/`, then a Release build that
publishes the ASP.NET Core app.

## Architecture: how a search works

1. `Pages/search.cshtml` (`searchModel` in `search.cshtml.cs`) renders the `term` route parameter and query-string
   filters (`symbol`, `list`, `additional`, `index`, `stress`, `circle`, `para`) into `window["term"]`,
   `window["symbol"]`, etc.
2. `Scripts/App.tsx` is the SPA entry point (bundled by webpack into `wwwroot/js/bundle.js`, referenced by
   `_Layout.cshtml`). It reads those `window[...]` globals to seed an `ApplicationState` (mobx store,
   `Scripts/ApplicationState/index.tsx`), and listens to `popstate` to restore state on back/forward navigation.
3. `ApplicationState` is the single source of truth for search term, active filters, pagination, and results. Its
   `search()`/`continue()` flow builds a query string and calls `https://api.gramdict.ru/v1/search/{term}` directly
   from the browser via axios — the ASP.NET backend is not involved in serving search results, it only serves the
   initial HTML shell.
   - Filter values are normalized differently for the API (`apiEncode`, e.g. circled digits ①-⑨ decoded to `1`-`9`,
     `§` stripped) vs. for the browser URL (`pageEncode`, used with `history.pushState` to keep the URL shareable).
   - `ApplicationState` also mutates browser history/URL as filters change, so the page URL always reflects current
     search state (this is one of the documented regression-test behaviors in README.md).
4. React components under `Scripts/` (`SearchBox`, `ResultsBox`, `FilterControl`, `Filters`, `ListFilter`, `Loader`)
   are mobx `observer` components that read/write `ApplicationState`.
5. `Program.cs`/`Startup.cs`: on every non-dev startup, Startup pings `https://api.gramdict.ru/v1/search/wakie-wakie`
   (fire-and-forget) on the first request per app lifetime warm-up path, to reduce latency of the visitor's first
   real search against the external API.

## Architecture: HTML post-processing pipeline

Every HTML response (checked via the `Accept` header) is intercepted by `Startup.NowrapMiddleware` and rewritten
before it reaches the client:

1. `Tokenizer.Tokenize` (in `gramdictru`, not `HtmlProcessor`) splits the buffered response body into
   word/whitespace/script-boundary tokens.
2. Each token is run through `Morpher.Russian.BasicHyphenator.Hyphenate` (external NuGet package) to insert soft
   hyphens (`­`) for correct line-breaking of Russian text.
3. The hyphenated body is passed to `HtmlProcessor.PageHtmlPostProcessor.AddNoWrap`, which uses `NoWrapper` (regex +
   `TagTracker`) to wrap short Russian prepositions/particles (в, к, ко, не, ни, со, с, о), abbreviation patterns
   like "т. д.", and morpheme markers like "(-ст-)" in `<span class="nowrap">` — but only outside HTML tags
   (`TagTracker.IsInTag` walks the string tracking `<`/`>` to avoid mangling tag attributes).

`HtmlProcessor` is intentionally decoupled from ASP.NET so it can be unit tested standalone — see `UnitTests/`,
which exercises `NoWrapper` with bracket-delimited (`{...}`) test cases showing expected wrap boundaries.

## Conventions worth knowing

- Namespace mismatch: `Pages/search.cshtml.cs`'s `searchModel` lives in `namespace WebApplication1.Pages`, not
  `gramdictru` — an artifact of the project's history, not something to "fix" incidentally.
- Static/informational pages (About, Contact, contents, howtouse, preface, names, english, declension/*,
  conjugation/*) are plain Razor Pages with no React involved — only `search.cshtml` boots the SPA.
- Runtime/CDN dependencies: `_Layout.cshtml` loads React, ReactDOM, mobx, mobx-react, axios, react-debounce-input,
  react-infinite-scroll-component, and papaparse from `unpkg.com` CDN `<script>` tags — the webpack bundle marks
  these as `externals` (see `webpack.config.js`) rather than bundling them, so the CDN `<script>` versions and the
  `externals` global names must stay in sync with what `Scripts/*.tsx` expects.
- Before submitting a PR, run through the manual regression checklist in `README.md` under "Regression Testing" —
  it covers React/CSS interaction bugs (scroll/filter animation, URL state, hyphenation/line-wrap edge cases) that
  aren't covered by the (backend-only) automated test suite.
