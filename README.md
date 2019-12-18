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
* Extra line break [#109](https://github.com/morpher-ru/gramdict/issues/109)
