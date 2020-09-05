using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;

namespace gramdictru
{
    static class LetsEncryptExtensions
    {
        public static void UseWellKnownDir(this IApplicationBuilder app)
        {
            string wellKnownDir = Path.Combine(Directory.GetCurrentDirectory(), @".well-known");
            Directory.CreateDirectory(wellKnownDir); // noop if dir exists
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(wellKnownDir),
                RequestPath = new PathString("/.well-known"),
                ServeUnknownFileTypes = true // serve extensionless file
            });
        }
    }
}