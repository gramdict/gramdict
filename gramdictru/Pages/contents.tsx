
import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function Preface() {
    return <AccordionItem data-has-children={false} aria-level={1}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface">Предисловие</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1InverseOrder() {
    return <AccordionItem data-has-children={false} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#inverse-order">Инверсионный порядок слов</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1Classes() {
    return <AccordionItem data-has-children={false} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#classes">Грамматические разряды</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1Immutable() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#immutable">Неизменяемые существительные</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1SingulariaTantum() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#singularia-tantum">Singularia tantum</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1PluraliaTantum() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#pluralia-tantum">Pluralia tantum</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1Nouns() {
    return <AccordionItem data-has-children={true} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#nouns">Существительные</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <Preface1Immutable />
                <Preface1SingulariaTantum />
                <Preface1PluraliaTantum />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function Preface1ShortForms() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#short-forms">Краткие формы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1Comparative() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#comparative">Сравнительная степень</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1Adjectives() {
    return <AccordionItem data-has-children={true} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#adjectives">Прилагательные</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <Preface1ShortForms />
                <Preface1Comparative />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function Preface1Pronouns() {
    return <AccordionItem data-has-children={false} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#pronouns">Местоимения</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1Numerals() {
    return <AccordionItem data-has-children={false} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#numerals">Числительные</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1Verbs() {
    return <AccordionItem data-has-children={false} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#verbs">Глаголы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1Potential() {
    return <AccordionItem data-has-children={false} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#potential">Потенциальные формы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1Difficulty() {
    return <AccordionItem data-has-children={false} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#difficulty">Затрудненность</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1UnstableAnimacy() {
    return <AccordionItem data-has-children={false} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#unstable-animacy">Неустойчивая одушевленность</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1UnstableAspect() {
    return <AccordionItem data-has-children={false} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#unstable-aspect">Неустойчивый глагольный вид</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1Sources() {
    return <AccordionItem data-has-children={false} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#sources">Источники и словник словаря</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1Norm() {
    return <AccordionItem data-has-children={false} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1#norm">Нормативность словаря и отражение вариантов</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Preface1() {
    return <AccordionItem data-has-children={true} aria-level={1}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="preface1">Предисловие к первому изданию</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <Preface1InverseOrder />
                <Preface1Classes />
                <Preface1Nouns />
                <Preface1Adjectives />
                <Preface1Pronouns />
                <Preface1Numerals />
                <Preface1Verbs />
                <Preface1Potential />
                <Preface1Difficulty />
                <Preface1UnstableAnimacy />
                <Preface1UnstableAspect />
                <Preface1Sources />
                <Preface1Norm />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function HowtouseOrder() {
    return <AccordionItem data-has-children={false} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#order">Способ записи слов и порядок их расположения</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseMainSymbol() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#main-symbol">Основной буквенный символ</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseDigits() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#digits">Цифры</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseZvezdochka() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#zvezdochka">Надстрочная звездочка (*) или кружочек (°) при цифре</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseLatin() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#latin">Латинская буква</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseRussianchars() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#russianchars">Русская буква или буквенная последовательность</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseChare() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#chare">Знак «ё»</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseAngleBrackets() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#angle-brackets">Угловые скобки</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseIndex() {
    return <AccordionItem data-has-children={true} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#index">Индекс</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <HowtouseDigits />
                <HowtouseZvezdochka />
                <HowtouseLatin />
                <HowtouseRussianchars />
                <HowtouseChare />
                <HowtouseAngleBrackets />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function HowtouseZnak1() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#znak1">Знаки —, ☓, ☒, ∼.</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseZnak2() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#znak2">Знак + внутри индекса</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseZnak3() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#znak3">Пометы П<sub>2</sub> и Р<sub>2</sub></a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseZnak4() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#znak4">Помета «§...»</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseZnak5() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#znak5">Отсылка к другому слову</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseZnak6() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#znak6">Различные словесные указания о формах</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseZnak7() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#znak7">Указание значения</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseZnak8() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#znak8">Указания за знаком △</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseZnak9() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#znak9">Указания за знаком ✧</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseZnak10() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#znak10">Указания за знаком ◑</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseAdditionalSymbols() {
    return <AccordionItem data-has-children={true} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#additional-symbols">Дополнительные пометы и указания</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <HowtouseZnak1 />
                <HowtouseZnak2 />
                <HowtouseZnak3 />
                <HowtouseZnak4 />
                <HowtouseZnak5 />
                <HowtouseZnak6 />
                <HowtouseZnak7 />
                <HowtouseZnak8 />
                <HowtouseZnak9 />
                <HowtouseZnak10 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function HowtouseFormat() {
    return <AccordionItem data-has-children={true} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#format">Строение словарной статьи</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <HowtouseMainSymbol />
                <HowtouseIndex />
                <HowtouseAdditionalSymbols />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function HowtouseSpecial1() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#special1">Сокращенная запись форм</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseSpecial2() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#special2">Омонимы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseSpecial3() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#special3">Слова с ограниченной сочетаемостью</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseSpecial4() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#special4">Оформление вариантов</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseSpecial5() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#special5">Квадратные скобки</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseSpecialCases() {
    return <AccordionItem data-has-children={true} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#special-cases">Особые случаи оформления словарной статьи</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <HowtouseSpecial1 />
                <HowtouseSpecial2 />
                <HowtouseSpecial3 />
                <HowtouseSpecial4 />
                <HowtouseSpecial5 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function HowtouseBuild1() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#build1">Построение с помощью образцов</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseBuild2() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#build2">Построение непосредственно по индексу</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseBuildingForms() {
    return <AccordionItem data-has-children={true} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#building-forms">Как построить нужные формы слова</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <HowtouseBuild1 />
                <HowtouseBuild2 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function HowtouseAbbreviations() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#abbreviations">Условные сокращения</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseCondisional2() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#condisional2">Условные знаки</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function HowtouseCondisional() {
    return <AccordionItem data-has-children={true} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse#condisional">Условные знаки и сокращения</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <HowtouseAbbreviations />
                <HowtouseCondisional2 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function Howtouse() {
    return <AccordionItem data-has-children={true} aria-level={1}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="howtouse">Как пользоваться словарем</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <HowtouseOrder />
                <HowtouseFormat />
                <HowtouseSpecialCases />
                <HowtouseBuildingForms />
                <HowtouseCondisional />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsMainCharacters() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#main-characters">Основная синтаксическая характеристика имени</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsStandart1() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#standart1">Стандартные окончания субстантивного склонения</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsS1() {
    return <AccordionItem data-has-children={false} aria-level={7}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#s1">Полные формы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsS2() {
    return <AccordionItem data-has-children={false} aria-level={7}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#s2">Краткие формы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsStandart2() {
    return <AccordionItem data-has-children={true} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#standart2">Стандартные окончания адъективного склонения</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsS1 />
                <DeclensionSymbolsS2 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsStandart3() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#standart3">Стандартные окончания местоименного склонения</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsMainMorph() {
    return <AccordionItem data-has-children={true} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#main-morph">
                    Основная морфологическая характеристика имени
                                        </a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsStandart1 />
                <DeclensionSymbolsStandart2 />
                <DeclensionSymbolsStandart3 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsMainSymbol() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#main-symbol">Буквенные символы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsMainCharacters />
                <DeclensionSymbolsMainMorph />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsChoose1() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#choose1">Прилагательные</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsChoose2() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#choose2">Существительные</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsChoose3() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#choose3">Местоимения и числительные</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsChoose() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#choose">Выбор нужной группы окончаний в приведенных выше таблицах</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsChoose1 />
                <DeclensionSymbolsChoose2 />
                <DeclensionSymbolsChoose3 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsC1() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#c1">Отличия типов склонения 3—7 от 1, 2</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsMeaning1() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#meaning1">Цифра индекса</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsC1 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsMeaning2() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#meaning2">Звездочка при цифре</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsMeaning3() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#meaning3">Кружочек при цифре</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsScheme1() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#scheme1">Основные схемы ударения (без штрихов)</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsScheme2() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#scheme2">Образцы основных схем ударения</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsScheme3() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#scheme3">Второстепенные схемы ударения (со штрихами)</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsLatin1() {
    return <AccordionItem data-has-children={true} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#latin1">Схемы ударения в субстантивном склонении</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsScheme1 />
                <DeclensionSymbolsScheme2 />
                <DeclensionSymbolsScheme3 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsScheme4() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#scheme4">Схемы ударения полных форм</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsScheme5() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#scheme5">Образцы схем ударения кратких форм</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsScheme6() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#scheme6">Второстепенные схемы ударения (со штрихами)</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsLatin2() {
    return <AccordionItem data-has-children={true} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#latin2">Схемы ударения в адъективном склонении</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsScheme4 />
                <DeclensionSymbolsScheme5 />
                <DeclensionSymbolsScheme6 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsLatin3() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#latin3">Схемы ударения в местоименном склонении</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsAdditional1() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#additional1">Правило о положении ударения внутри основы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsAdditional2() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#additional2">Правило о положении ударения внутри окончания</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsAdditional3() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#additional3">Правило о положении ударения при неслоговом окончании</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsLatin4() {
    return <AccordionItem data-has-children={true} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#latin4">Дополнительные правила об ударении</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsAdditional1 />
                <DeclensionSymbolsAdditional2 />
                <DeclensionSymbolsAdditional3 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsMeaning4() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#meaning4">
                    Латинская буква
                                </a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsLatin1 />
                <DeclensionSymbolsLatin2 />
                <DeclensionSymbolsLatin3 />
                <DeclensionSymbolsLatin4 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsCircledNumber() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#circled-number">Цифра в кружке</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsYo() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#yo">Помета «ё»</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsBuildUsingIndex() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#build-using-index">Построение форм склонения по индексу</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsBuildComparative() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#build-comparative">Построение сравнительной степени прилагательных</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsMeaning() {
    return <AccordionItem data-has-children={true} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#meaning">Значение буквенных символов и элементов индекса у имен</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsMainSymbol />
                <DeclensionSymbolsChoose />
                <DeclensionSymbolsMeaning1 />
                <DeclensionSymbolsMeaning2 />
                <DeclensionSymbolsMeaning3 />
                <DeclensionSymbolsMeaning4 />
                <DeclensionSymbolsCircledNumber />
                <DeclensionSymbolsYo />
                <DeclensionSymbolsBuildUsingIndex />
                <DeclensionSymbolsBuildComparative />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsPatterns1() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#patterns1">Полные и сокращенные парадигмы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsPatterns2() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#patterns2">Особенности, связанные с одушевленностью — неодушевленностью существительных</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsRestoreParadigm() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#restore-paradigm">Правила восстановления невыписанных форм парадигмы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsPatterns4() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#patterns4">Как найти нужный образец</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsFound1() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#found1">Особое правило о винительном падеже существительных</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsFound2() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#found2">Общие правила построения форм по заданному образцу</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsFound3() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#found3">Буквенный состав формы А'</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsFound4() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#found4">Ударение формы А'</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsPatterns5() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#patterns5">Как просклонять слово по найденному образцу</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsFound1 />
                <DeclensionSymbolsFound2 />
                <DeclensionSymbolsFound3 />
                <DeclensionSymbolsFound4 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsPatterns6() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#patterns6">Субстантивное склонение</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsA1() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#a1">Типы 1—7</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsA2() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#a2">Схема ударения а</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsM1() {
    return <AccordionItem data-has-children={true} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#m1">А. Индексы простые</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsA1 />
                <DeclensionSymbolsA2 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsPatterns7() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#patterns7">Мужской род</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsM1 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function Адъективноесклонение() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <span>Адъективное склонение</span>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsD1() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#d1">Склонение числительных 50, 60, 70, 80</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsD2() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#d2">Склонение названий сотен</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function Склонениечислительных() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <span>Склонение числительных</span>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsD1 />
                <DeclensionSymbolsD2 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsPatterns() {
    return <AccordionItem data-has-children={true} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#patterns">Образцы склонения</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsPatterns1 />
                <DeclensionSymbolsPatterns2 />
                <DeclensionSymbolsRestoreParadigm />
                <DeclensionSymbolsPatterns4 />
                <DeclensionSymbolsPatterns5 />
                <DeclensionSymbolsPatterns6 />
                <DeclensionSymbolsPatterns7 />
                <Адъективноесклонение />
                <Склонениечислительных />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbolsMinusNouns() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#minus-nouns">Знак — (минус) (у существительных)</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsMinusAdjectives() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#minus-adjectives">Знак — (минус) (у прилагательных)</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsCrossAdjectives() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#cross-adjectives">Знак <span className="cross"></span> (у прилагательных)</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsBoxedCrossAdjectives() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#boxed-cross-adjectives">Знак <span className="boxed-cross"></span> (у прилагательных)</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsTildeAdjectives() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#tilde-adjectives">Знак ~ (у прилагательных)</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsP2Nouns() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#p2-nouns">Помета П<sub>2</sub> (у существительных)</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsR2Nouns() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#r2-nouns">Помета Р<sub>2</sub> (у существительных)</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsMeaningAdditional() {
    return <AccordionItem data-has-children={true} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#meaning-additional">Значение дополнительных помет и указаний при именах</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsMinusNouns />
                <DeclensionSymbolsMinusAdjectives />
                <DeclensionSymbolsCrossAdjectives />
                <DeclensionSymbolsBoxedCrossAdjectives />
                <DeclensionSymbolsTildeAdjectives />
                <DeclensionSymbolsP2Nouns />
                <DeclensionSymbolsR2Nouns />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionStressed_prepositionStr1() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/stressed_preposition#str1">Существительные</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionStressed_prepositionStr2() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/stressed_preposition#str2">Числительные</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionStressed_preposition() {
    return <AccordionItem data-has-children={true} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/stressed_preposition">Сведения о переносе ударения на предлог (у существительных и числительных)</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionStressed_prepositionStr1 />
                <DeclensionStressed_prepositionStr2 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionParagraphs() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/paragraphs">Дополнительные особенности в склонении</a>&nbsp;<br />&nbsp;<a href="declension/paragraphs#para1">§1</a>&nbsp;<a href="declension/paragraphs#para2">§2</a>&nbsp;<a href="declension/paragraphs#para3">§3</a>&nbsp;<a href="declension/paragraphs#para4">§4</a>&nbsp;<a href="declension/paragraphs#para5">§5</a>&nbsp;<a href="declension/paragraphs#para6">§6</a>&nbsp;<a href="declension/paragraphs#para7">§7</a>&nbsp;<a href="declension/paragraphs#para8">§8</a>&nbsp;<a href="declension/paragraphs#para9">§9</a>&nbsp;<a href="declension/paragraphs#para10">§10</a>&nbsp;<a href="declension/paragraphs#para11">§11</a>&nbsp;<a href="declension/paragraphs#para12">§12</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function DeclensionSymbolsDeclension() {
    return <AccordionItem data-has-children={true} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols#declension">Склонение</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsMeaning />
                <DeclensionSymbolsPatterns />
                <DeclensionSymbolsMeaningAdditional />
                <DeclensionStressed_preposition />
                <DeclensionParagraphs />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationVerbSymbol() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#verb-symbol">Буквенные символы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationHead51() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head51">Стандартные чередования согласных</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationHead52() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head52">Таблица типов спряжения</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationHead42() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head42">Цифра индекса</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationHead51 />
                <ConjugationHead52 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationHead43() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head43">Звездочка при цифре</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationHead44() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head44">Кружочек при цифре</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationHead61() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head61">Образцы основных схем ударения настоящего времени</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationHead53() {
    return <AccordionItem data-has-children={true} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head53">Схемы ударения настоящего времени</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationHead61 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationHead62() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head62">Образцы схем ударения прошедшего времени</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationHead54() {
    return <AccordionItem data-has-children={true} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head54">Схемы ударения прошедшего времени</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationHead62 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationHead63() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head63">Правило о положении ударения внутри основы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationHead64() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head64">Правило о положении ударения внутри окончания</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationHead65() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head65">Правило о положении ударения при неслоговом окончании</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationHead55() {
    return <AccordionItem data-has-children={true} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head55">Дополнительные правила об ударении</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationHead63 />
                <ConjugationHead64 />
                <ConjugationHead65 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationHead45() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head45">Латинская буква</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationHead53 />
                <ConjugationHead54 />
                <ConjugationHead55 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationAlternation() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#alternation">Русская буква или буквенная последовательность в скобках</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationDigitsinround() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#digitsinround">
                    Цифра в кружке
                                </a>&nbsp;<br />&nbsp;<a href="conjugation#verb-circle-1">①</a>&nbsp;<a href="conjugation#verb-circle-2">②</a>&nbsp;<a href="conjugation#verb-circle-2">③</a>&nbsp;<a href="conjugation#verb-circle-4">④</a>&nbsp;<a href="conjugation#verb-circle-5">⑤</a>&nbsp;<a href="conjugation#verb-circle-5">⑥</a>&nbsp;<a href="conjugation#verb-circle-7">⑦</a>&nbsp;<a href="conjugation#verb-circle-8">⑧</a>&nbsp;<a href="conjugation#verb-circle-9">⑨</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationVerbYo() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#verb-yo">Помета «ё» (или «о»)</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationHead31() {
    return <AccordionItem data-has-children={true} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation#head31">Значение буквенных символов и элементов индекса у глаголов</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationVerbSymbol />
                <ConjugationHead42 />
                <ConjugationHead43 />
                <ConjugationHead44 />
                <ConjugationHead45 />
                <ConjugationAlternation />
                <ConjugationDigitsinround />
                <ConjugationVerbYo />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationSymbolsPresentFuture() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#present-future">Настоящее-будущее время</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbolsPast() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#past">Прошедшее время</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbolsFuture() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#future">Будущее время несовершенного вида</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbolsImperative() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#imperative">Повелительное наклонение</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbolsSubjunctive() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#subjunctive">Сослагательное наклонение</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbolsHead511() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#head511">Личные формы на <span className="word-end">-ся</span> (<span className="word-end">-сь</span>) со страдательным значением</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbolsHead46() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#head46">Личные формы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationSymbolsPresentFuture />
                <ConjugationSymbolsPast />
                <ConjugationSymbolsFuture />
                <ConjugationSymbolsImperative />
                <ConjugationSymbolsSubjunctive />
                <ConjugationSymbolsHead511 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationSymbolsHead512() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#head512">Действительное причастие настоящего времени</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbolsHead513() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#head513">Деепричастие настоящего времени</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbolsHead514() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#head514">Действительное причастие прошедшего времени</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbolsHead515() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#head515">Деепричастие прошедшего времени</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbolsHead516() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#head516">Страдательное причастие настоящего времени</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbolsHead517() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#head517">Страдательное причастие прошедшего времени</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbolsHead518() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#head518">Неличные формы на <span className="word-end">-ся</span> (<span className="word-end">-сь</span>) со страдательным значением</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbolsHead47() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#head47">Неличные формы</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationSymbolsHead512 />
                <ConjugationSymbolsHead513 />
                <ConjugationSymbolsHead514 />
                <ConjugationSymbolsHead515 />
                <ConjugationSymbolsHead516 />
                <ConjugationSymbolsHead517 />
                <ConjugationSymbolsHead518 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationSymbolsBuildUsingIndex() {
    return <AccordionItem data-has-children={true} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols#build-using-index">Построение глагольных форм по индексу</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationSymbolsHead46 />
                <ConjugationSymbolsHead47 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationModelsHead66() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/models#head66">Правило распределения <strong>-ся</strong> и <strong>-сь</strong></a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationModelsHead519() {
    return <AccordionItem data-has-children={true} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/models#head519">Особенность возвратных глаголов</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationModelsHead66 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationModelsHead67() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/models#head67">Наст. (буд.) и повел.</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationModelsHead68() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/models#head68">Прош.</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationModelsHead69() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/models#head69">Прич. страд.</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationModelsHead520() {
    return <AccordionItem data-has-children={true} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/models#head520">Сокращенная запись глагольной парадигмы и восстановление остальных форм по этой записи</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationModelsHead67 />
                <ConjugationModelsHead68 />
                <ConjugationModelsHead69 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationModelsHead521() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/models#head521">Как найти нужный образец (или образцы)</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationModelsHead522() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/models#head522">Как проспрягать глагол по найденному образцу</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationModelsShape() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/models#shape">Состав форм у глаголов разных грамматических групп</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationModelsHead519 />
                <ConjugationModelsHead520 />
                <ConjugationModelsHead521 />
                <ConjugationModelsHead522 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationModels() {
    return <AccordionItem data-has-children={true} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/models">Образцы спряжения</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationModelsShape />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationSymbols2VerbCross() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols2#verb-cross">Знак <span className="cross"></span></a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbols2VerbBoxedCross() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols2#verb-boxed-cross">Знак <span className="boxed-cross"></span></a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbols2Zhd() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols2#zhd">Запись «прич. страд. -жд-»</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbols2Forms() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols2#forms">Формы, приведенные полностью, но не за знаком Δ</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbols2Stressed_particle() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols2#stressed_particle">Сведения о переносе ударения на частицу</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbols2AspectImperfect() {
    return <AccordionItem data-has-children={false} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols2#aspect-imperfect">Построение глагола несовершенного вида</a>&nbsp;<a href="conjugation/symbols2#aspect-I">◑I</a>&nbsp;<a href="conjugation/symbols2#aspect-II">◑II</a>&nbsp;<a href="conjugation/symbols2#aspect-III">◑III</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbols2Table1() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols2#table1">Таблица построения глаголов совершенного вида</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbols2AspectPerfect() {
    return <AccordionItem data-has-children={true} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols2#aspect-perfect">Построение глагола совершенного вида</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationSymbols2Table1 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ConjugationSymbols2Aspect() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols2#aspect">Указания за знаком ◑ – сведения о глаголе противоположного вида</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationSymbols2AspectImperfect />
                <ConjugationSymbols2AspectPerfect />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function Дополнительныеособенностивспряжении() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <span>Дополнительные особенности в спряжении</span>&nbsp;<br />&nbsp;<a href="conjugation/symbols2#para13">§13</a>&nbsp;<a href="conjugation/symbols2#para14">§14</a>&nbsp;<a href="conjugation/symbols2#para15">§15</a>&nbsp;<a href="conjugation/symbols2#para16">§16</a>&nbsp;<a href="conjugation/symbols2#para17">§17</a>&nbsp;<a href="conjugation/symbols2#para18">§18</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function ConjugationSymbols2() {
    return <AccordionItem data-has-children={true} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation/symbols2">Значение дополнительных помет и указаний при глаголе</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationSymbols2VerbCross />
                <ConjugationSymbols2VerbBoxedCross />
                <ConjugationSymbols2Zhd />
                <ConjugationSymbols2Forms />
                <ConjugationSymbols2Stressed_particle />
                <ConjugationSymbols2Aspect />
                <Дополнительныеособенностивспряжении />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function Conjugation() {
    return <AccordionItem data-has-children={true} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="conjugation">Спряжение</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <ConjugationHead31 />
                <ConjugationSymbolsBuildUsingIndex />
                <ConjugationModels />
                <ConjugationSymbols2 />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function DeclensionSymbols() {
    return <AccordionItem data-has-children={true} aria-level={1}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="declension/symbols">
                    Грамматические сведения
        </a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <DeclensionSymbolsDeclension />
                <Conjugation />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function NamesPrincip() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="names#princip">Принципы отбора имен собственных</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function NamesProblem() {
    return <AccordionItem data-has-children={false} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="names#problem">Проблема вариативности ударения и фонетического состава у имен собственных</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function NamesOsoben() {
    return <AccordionItem data-has-children={false} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="names#osoben">Особенности оформления статей</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function NamesConsokra() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="names#consokra">Условные сокращения</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function NamesConznaki() {
    return <AccordionItem data-has-children={false} aria-level={6}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="names#conznaki">Условные знаки</a>
            </AccordionItemButton>
        </AccordionItemHeading>
    </AccordionItem>
}

function NamesPom() {
    return <AccordionItem data-has-children={true} aria-level={5}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="names#pom">Пометы, условные знаки</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <NamesConsokra />
                <NamesConznaki />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function NamesDopol() {
    return <AccordionItem data-has-children={true} aria-level={4}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="names#dopol">Дополнительные особенности</a>&nbsp;<br />&nbsp;<a href="conjugation/symbols2#para19">§19</a>&nbsp;<a href="conjugation/symbols2#para20">§20</a>&nbsp;<a href="conjugation/symbols2#para21">§21</a>&nbsp;<a href="conjugation/symbols2#para22">§22</a>&nbsp;<a href="conjugation/symbols2#para23">§23</a>&nbsp;<a href="conjugation/symbols2#para24">§24</a>&nbsp;<a href="conjugation/symbols2#para25">§25</a>&nbsp;<a href="conjugation/symbols2#para26">§26</a>&nbsp;<a href="conjugation/symbols2#para27">§27</a>&nbsp;<a href="conjugation/symbols2#para28">§28</a>&nbsp;<a href="conjugation/symbols2#para29">§29</a>&nbsp;<a href="conjugation/symbols2#para30">§30</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <NamesPom />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function NamesProdacha() {
    return <AccordionItem data-has-children={true} aria-level={3}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="names#prodacha">Подача материала</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <NamesOsoben />
                <NamesDopol />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function NamesNames() {
    return <AccordionItem data-has-children={true} aria-level={2}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="names#names">Имена собственные</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <NamesPrincip />
                <NamesProblem />
                <NamesProdacha />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function Names() {
    return <AccordionItem data-has-children={true} aria-level={1}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <a href="names">Приложение. Имена собственные</a>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <NamesNames />
            </Accordion>
        </AccordionItemPanel>
    </AccordionItem>
}

function ContentsPage() {
    return <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <Preface />
        <Preface1 />
        <Howtouse />
        <DeclensionSymbols />
        <Names />
    </Accordion>
}
ReactDOM.render(<ContentsPage />, document.getElementById("contents-page"));