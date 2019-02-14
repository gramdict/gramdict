using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class searchModel : PageModel
    {
        public string Term { get; set; }

        public void OnGet(string term)
        {
            Term = term;
        }
    }
}