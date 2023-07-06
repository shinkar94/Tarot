import React, {useState} from 'react';
import styled, {css} from "styled-components";

export const AllInfos = () => {
    const [listOpen, setListOpen] = useState(0)
    const openListHandler = (numberList: number) => {
        setListOpen(listOpen === numberList ? 0 : numberList)
    }
    return (
        <StFaqWrapper>
        <div className="faq" id="link-faq">
            <div className="faq-items">
                <ul className="faq-group">
                    <li className={'group-li'}>
                        <span className="trigger" onClick={()=>{openListHandler(1)}}>Как будет организовано прохождение программы?</span>
                        <StFaqContent status={listOpen === 1}>
                            <p>
                                Перед началом программы, все участники будут собраны в закрытом
                                чате Telegram, все материалы будут публиковаться там же. В
                                начале и по итогу программы предусмотрены групповые созвоны в
                                ZOOM. Три раза в неделю будут публиковаться уроки и задания на
                                самостоятельную проработку. Вы можете проходить задания в любом
                                удобном для вас темпе, но Автор программы рекомендует следовать
                                по плану совместно с группой. В этом есть ряд преимуществ:
                            </p>
                            <ul>
                                <li>Вы будете в теме всех обсуждений, а значит, получать больше инсайтов</li>
                                <li>Сможете задавать вопросы и делиться мнением с единомышленниками</li>
                                <li>Бонусы тарифов Пробуждение и Пробуждение-PRO (личные расклады, трансформационная
                                    игра,
                                    индивидуальные сессии) проводятся только в рамках недели, в которую они обозначены в
                                    плане программы.
                                </li>
                            </ul>
                            <p>
                                День и время для совместной Трансформационной игры определяется голосованием среди
                                участников.
                                Раз в неделю вам предстоит проходить экспресс-тесты на проверку усвоенной информации,
                                это сделано
                                для того, чтобы вы сами оценили свой результат и при необходимости вернулись к
                                пересмотру урока.
                                Для подготовки Карты желаний участнику необходимо подготовиться одним из следующих
                                методов:
                            </p>
                            <ul>
                                <li>Приобрести пару журналов с интересными для вас картинками, небольшой ватман,
                                    клей-карандаш, ножницы (при желании можно дополнить набор инструментов цветными
                                    ручками, блёстками и т.п.) - если вы планируете разработать физическую Карту желаний
                                    и разместить в своем пространстве.
                                </li>
                                <li>Скачать на телефон (а лучше воспользоваться версией для компьютера) инструмент
                                    Canva. Протестировать работу с редактированием фотографий, при необходимости
                                    приобрести расширенную версию на 1 месяц.
                                </li>
                            </ul>
                        </StFaqContent>
                    </li>

                    <li className={'group-li'}>
                        <span className="trigger" onClick={()=>{openListHandler(2)}}>Сколько времени будут доступны материалы?</span>
                        <StFaqContent status={listOpen === 2}>
                            <p>
                                Материалы останутся с вами, вы сможете сохранить их и при необходимости возвращаться к
                                урокам.
                            </p>
                        </StFaqContent>
                    </li>

                    <li className={'group-li'}>
                        <span className="trigger" onClick={()=>{openListHandler(3)}}>Способы оплаты?</span>
                        <StFaqContent status={listOpen === 3}>
                            <p>
                                Оплата производится по номеру карты Сбербанк до старта программы. Доступны следующие
                                варианты оплаты:
                            </p>
                            <ul>
                                <li>Полная оплата программы</li>
                                <li>Понедельная оплата ( доступна для тарифов Пробуждение и Пробуждение-PRO)</li>
                            </ul>
                        </StFaqContent>
                    </li>
                </ul>
            </div>
        </div>
        </StFaqWrapper>
    );
};

const StFaqWrapper = styled.div`
    background: #FFFFFF;
    .faq{
      .faq-items{
        .faq-group{
          .group-li{
            list-style-type: none;
            border-left: 2px solid #B34D36;
            margin-top: 10px;
            .trigger{
              color: #B34D36;
              font-size: 24px;
              cursor: pointer;
              margin-left: 20px;
            }
          }
        }
      }
    }
`
const StFaqContent = styled.div<{status: boolean}>`
  display: none;
  ${props => props.status && css`
    display: inline;
  `}
`