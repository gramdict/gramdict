using System.Text.RegularExpressions;

namespace HtmlProcessor;

public record NoWrapper(string StartTag, string EndTag)
{
    public string StartTag { get; } = StartTag;
    public string EndTag { get; } = EndTag;

    /// <summary>
    /// Wraps Russian prepositions and particles into given <see cref="StartTag"/> and <see cref="EndTag"/>
    /// to stop the browser from adding line breaks after these short words.
    /// </summary>
    /// <param name="html"></param>
    /// <returns></returns>
    public string AddNoWrap(string html)
    {
        var tt = new TagTracker(html);
        return RegexPattern.Replace(html, 
            m => tt.IsInTag(m.Index)
                ? m.Captures[0].Value // do not replace within tags
                : $"{StartTag}{m.Captures[0].Value}{EndTag}");
    }
    
    private static readonly Regex RegexPattern = new(@"((\b(в|ко|к|не|ни|со|с|о)\b\s+)+((\w|\d)+)\b)|(\w\.\s*\w\.)", 
        RegexOptions.IgnoreCase | RegexOptions.Compiled);
}