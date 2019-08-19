# Веб-версия "Грамматического словаря" А. А. Зализняка

## Regression Testing

Issues to include in regression tests:
* Superscripts must not affect line spacing [#59](https://github.com/morpher-ru/gramdict/issues/59) http://dev.gramdict.ru/search/носки
* "да" layout weirdness [#47](https://github.com/morpher-ru/gramdict/issues/47) http://gramdict.ru/search/да
* Typing into the search box or selecting filters must update the URL
* When opening a link with filters, the filters bar must be open: http://gramdict.ru/search/*?symbol=м
* When opening a link with an anchor, the linked to paragraph must be at the top and its first line fully visible (provided there is enough text below): http://gramdict.ru/preface#computer-applications
* Hovering the mouse cursor over a filter must reveal a tooltip.
