# Веб-версия «Грамматического словаря» А. А. Зализняка

Этот репозиторий содержит код сайта http://gramdict.ru – 
веб-издания знаменитого «Грамматического словаря» А. А. Зализняка.

Цели сайта:

1. популяризация Словаря, предоставление доступа к нему как можно большему количеству людей посредством сети Интернет.
2. предоставление удобных инструментов поиска по Словарю как для обычных пользователей,
   желающих навести справки о склонении или спряжении какого-либо слова, так и для исследователей.
3. полная оцифровка Словаря, включая ранее недоступные в цифровом виде «Грамматические сведения».

Материалы Словаря воспроизводятся на сайте в виде, близком к изданию 2010 года. 


## Словарь и закон

Приказом Минобрнауки РФ от 08.06.2009 N 195 Словарь включен в список грамматик, словарей и справочников,
содержащих нормы современного русского литературного языка.

Соблюдение норм русского литературного языка обязательно в деятельности госорганов, судов и любых организаций,
а также в рекламе (статья 3 федерального закона от 01.06.2005 N 53-ФЗ).

Последующие законы расширили сферу обязательности норм:

05.05.2014 N 101-ФЗ: в продукции СМИ, при показах фильмов в кинозалах, при публичных исполнениях произведений
28.02.2023 N 52-ФЗ: в образовании, в государственных и муниципальных информационных системах, в информации, предназначенной для потребителей товаров (работ, услуг).

## См. также

* [Данные 6-го издания «Грамматического словаря русского языка» А. А. Зализняка (2010) в виде текстовых файлов](https://github.com/gramdict/zalizniak-2010)

# Development

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


## Runtime Dependencies

* .NET 4.6.1
* [Node.js](https://nodejs.org/en/download/)


