# Веб-версия "Грамматического словаря" А. А. Зализняка

## Regression Testing 

Please execute these regression tests before submitting a PR:

* Superscripts must not affect line spacing [#59](https://github.com/morpher-ru/gramdict/issues/59) http://dev.gramdict.ru/search/носк
* "да" layout weirdness [#47](https://github.com/morpher-ru/gramdict/issues/47) http://dev.gramdict.ru/search/да
* Typing into the search box or selecting filters must update the URL
* When opening a link with filters, the filters bar must be open: http://dev.gramdict.ru/search/*?symbol=м
* When opening a link with an anchor, the linked to paragraph must be at the top and its first line fully visible (provided there is enough text below): http://dev.gramdict.ru/preface#computer-applications
* Hovering the mouse cursor over a filter must reveal a tooltip.
* The page http://dev.gramdict.ru/search should display the same data as http://dev.gramdict.ru/search/* [#51](https://github.com/morpher-ru/gramdict/issues/51)
* Links displayed in superscript mode [#118](https://github.com/morpher-ru/gramdict/issues/118) http://dev.gramdict.ru/howtouse#additional-symbols
* Extra line break [#109](https://github.com/morpher-ru/gramdict/issues/109) http://dev.gramdict.ru/howtouse#latin
* Extra scroll bar [#115](https://github.com/morpher-ru/gramdict/issues/115) http://dev.gramdict.ru/howtouse#double-slash
* Lists of [abbreviations](http://dev.gramdict.ru/howtouse#abbreviations) and [symbols](http://gramdict.ru/howtouse#conventional-symbols) (same in the [appendix](http://dev.gramdict.ru/names#abbreviations)) should respond to view width (1/2 columns) [#4](https://github.com/morpher-ru/gramdict/issues/4).
* [This link](http://dev.gramdict.ru/search/*?symbol=%D1%81%D0%B2,%D0%BD%D1%81%D0%B2,%D1%81%D0%B2-%D0%BD%D1%81%D0%B2,%D0%BF%D1%80%D0%B5%D0%B4%D0%B8%D0%BA%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5%20%D0%BC%D1%81,%3Ci%3E(%D0%BD%D0%B5%D1%82)%3C%2Fi%3E,%D0%BC%D0%B5%D0%B6%D0%B4.,%D0%B2%D0%B2%D0%BE%D0%B4%D0%BD.,%D1%81%D1%80%D0%B0%D0%B2%D0%BD.,%D0%BF%D1%80%D0%B5%D0%B4%D0%BB.,%D1%84.,%D1%81%D0%BE%D1%8E%D0%B7,%3Ci%3E%D1%81%D0%BC.%3C%2Fi%3E,%3Ci%3E%D0%A0.%20%D0%BC%D0%BD.%3C%2Fi%3E,%D1%87%D0%B0%D1%81%D1%82.,%D0%BF%D1%80%D0%B5%D0%B4%D0%B8%D0%BA.,%D0%BC%D0%BD.%20%D0%BD%D0%B5%D0%BE%D0%B4.,%D0%BC%D0%BD.%20%D0%BE%D0%B4%D1%83%D1%88.,%D0%BC%D0%BD.%20%3Ci%3E%D0%BE%D1%82%3C%2Fi%3E,%D0%BC%D0%BD.,%D0%BC%D0%BE-%D0%B6%D0%BE,%D0%B6%D0%BE%E2%81%BA,%D0%BC%D0%BE%E2%81%BA,%C2%A71,%C2%A72,%D1%87%D0%B8%D1%81%D0%BB.,%D1%87%D0%B8%D1%81%D0%BB.-%D0%BF,%D0%BC%D1%81-%D0%BF,%D0%BC%D1%81,%D1%81%D0%BE,%D0%B6%D0%BE,%D0%BC%D0%BE,%D0%BC,%D0%B6,%D1%81,%D0%BD,%D0%BF) displays all entries (Статей: 109866) [#99](https://github.com/morpher-ru/gramdict/issues/99)
* [This link](http://gramdict.ru/search/%D0%BC%D1%91%D0%B4) displays П<sub>2</sub> and Р<sub>2</sub> (with twos as subscripts) [#138](https://github.com/morpher-ru/gramdict/issues/138)
* The progress bar is visible when searching [#145](https://github.com/morpher-ru/gramdict/issues/145)
