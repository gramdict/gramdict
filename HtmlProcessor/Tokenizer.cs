using System.Collections.Generic;
using System.Globalization;

namespace gramdictru
{
    public static class Tokenizer
    {
        /// <summary>
        /// Разбивает текст на части - токены.
        /// </summary>
        /// <returns>
        /// Последовательность токенов.
        /// </returns>
        /// <remarks>
        /// Токены бывают двух видов – слова и разделители.
        /// Первым всегда идет разделитель, даже если он пустой.
        /// Затем чередуются слова и разделители.
        /// Таким образом, разделителей всегда на один больше, чем слов.
        /// Если два рядом стоящих слова принадлежат разным системам письменности
        /// (например, русское и сразу за ним китайское), то
        /// между ними вставляется пустой разделитель.
        /// См. тесты.
        /// </remarks>
        public static IEnumerable<string> Tokenize(string text, string stressMark = "\x301")
        {
            int tokenStart = 0;

            const BroadType whitespaceType = BroadType.Whitespace;

            BroadType type = whitespaceType;

            for (int i = 0; i < text.Length; i++)
            {
                char c = text[i];

                if (c == stressMark[0])
                    continue;

                BroadType newType = CharUnicodeInfo.GetUnicodeCategory(c) switch
                {
                    UnicodeCategory.LowercaseLetter => BroadType.Letter,
                    UnicodeCategory.UppercaseLetter => BroadType.Letter,
                    UnicodeCategory.SpaceSeparator => BroadType.Whitespace,
                    UnicodeCategory.DecimalDigitNumber => BroadType.Number,
                    UnicodeCategory.OtherLetter => BroadType.OtherLetter,
                    _ => BroadType.Whitespace
                };

                if (newType == type) continue;

                string token = text[tokenStart..i];
                yield return token;

                if (type != whitespaceType && newType != whitespaceType)
                    yield return ""; // вставляем пустой разделитель между русскими и китайскими буквами 

                tokenStart = i;

                type = newType;
            }

            string endToken = text[tokenStart..];
            yield return endToken;

            if (type != whitespaceType)
                yield return "";
        }

        enum BroadType
        {
            Whitespace,
            Letter,
            OtherLetter, // Chinese characters and stuff
            Number
        }
    }
}
