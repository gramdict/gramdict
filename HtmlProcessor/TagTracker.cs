namespace HtmlProcessor;

class TagTracker
{
    private readonly string _html;
    private int i;
    private bool _inTag;

    public TagTracker(string html)
    {
        _html = html;
    }

    /// <summary>
    /// Tells if the given <paramref name="pos"/> is within a &lt;tag;&gt; or outside any tags.
    /// </summary>
    /// <exception cref="Exception"></exception>
    public bool IsInTag(int pos)
    {
        if (i > pos)
        {
            throw new Exception("Can't go back.");
        }
        
        while (i < pos)
        {
            switch (_html[i++])
            {
                case '<':
                    _inTag = true;
                    break;
                case '>':
                    _inTag = false;
                    break;
            }
        }

        return _inTag;
    }
}