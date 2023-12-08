using System;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using HtmlProcessor;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.DependencyInjection;

namespace gramdictru
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.Use(NowrapMiddleware);
            
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.Use(async delegate (HttpContext c, Func<Task> next)
            {
                // Give the API a kick to make subsequent searches faster.
#pragma warning disable 4014
                ApiClient.GetAsync("v1/search/wakie-wakie"); // do not await
#pragma warning restore 4014
                await next.Invoke();
            });

            app.UseStaticFiles();

            app.UseWellKnownDir(); // required for Let's Encrypt certificate renewal

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });
        }

        private static async Task NowrapMiddleware(HttpContext context, Func<Task> next)
        {
            if (context.Request.Headers["Accept"].Any(h => h.StartsWith("text/html")))
            {
                await PostProcessHtml(context, next);
            }
            else
            {
                await next.Invoke();
            }
        }

        private static async Task PostProcessHtml(HttpContext context, Func<Task> next)
        {
            HttpResponse response = context.Response;
            Stream oldStream = response.Body;
            var memoryStream = new MemoryStream();
            response.Body = memoryStream;
                
            await next.Invoke();

            memoryStream.Seek(0, SeekOrigin.Begin);
            string body = await new StreamReader(memoryStream).ReadToEndAsync();
            string newBody = PageHtmlPostProcessor.AddNoWrap(body);
            byte[] bytes = Encoding.UTF8.GetBytes(newBody);
            response.ContentLength = bytes.Length;
            await oldStream.WriteAsync(bytes, 0, bytes.Length);
            response.Body = oldStream;
        }

        static readonly HttpClient ApiClient = new HttpClient()
        {
            BaseAddress = new Uri("https://api.gramdict.ru")
        };
    }
}
