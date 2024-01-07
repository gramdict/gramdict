using HtmlProcessor;

namespace UnitTests;

public class Tests
{
    [Test]
    [TestCase("{В 1977} г.")]
    [TestCase("это нам {ни к чему} совсем")]
    [TestCase("\t {в начале} работы")]
    [TestCase("Примеры словарных статей {со знаком} []:")]
    [TestCase("<p desc='в теге'>{не в теге}</p>")]
    [TestCase("{А. С.} Пушкин")]
    [TestCase("и {т. д.} и {т. п.}")]
    [TestCase("и {т.д.} и {т.п.}")]
    public void Test1(string sample)
    {
        string input = sample.Replace("{", "").Replace("}", "");
        string expected = sample;
        string output = new NoWrapper("{", "}").AddNoWrap(input);
        Assert.That(output, Is.EqualTo(expected));
    }
}