namespace HtmlProcessor;

public static class PageHtmlPostProcessor
{
    public static string AddNoWrap(string body)
    {
        return NoWrapper.AddNoWrap(body);
    }
    
    private static readonly NoWrapper NoWrapper = new(
        StartTag: "<span class=\"nowrap\">", 
        EndTag: "</span>");
}