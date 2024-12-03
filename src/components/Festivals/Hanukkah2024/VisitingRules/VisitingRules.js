import React, { useState } from 'react';
import './VisitingRules.css'
import Heading from '../../../../UI-Kit/Heading/Heading'

function VisitingRules() {
    const [isMoreBtnClicked, setIsMoreBtnClicked] = useState(false)
    const [limit, setLimit] = useState(3)

    const events = [
        {
          date: "26 декабря",
          events: [
            {
              time: "16.00–17.00",
              text: "Авторская экскурсия по Музею АНУ c Зеевом Волком для взрослых и подростков (регистрация 25 участников)"
            },
            {
              time: "16.00–17.30",
              text: "Елена Макарова  Креативная Лаборатория для детей и родителей “Движение Образует форму” (регистрация 25 участников)"
            },
            {
              time: "16.30–17.30",
              text: "Театрализованная ханукальная экскурсия по Музею АНУ с Сашей Андреевой для детей 6-12 лет в сопровождении взрослых (регистрация 15 детей)"
            },
            {
              time: "17.30–18.30",
              text: "Авторская экскурсия по Музею АНУ c Зеевом Волком для взрослых и подростков (регистрация 25 участников)"
            },
            {
              time: "18.00–19.00",
              text: "Театрализованная ханукальная экскурсия по Музею АНУ с Сашей Андреевой для детей 6-12 лет в сопровождении взрослых (регистрация 15 детей)"
            },
            {
              time: "18.00–19.00",
              text: "Мафия с Женей Заслоцким (Wonderman) Игра 8+ (регистрация до 15 человек)"
            },
            {
              time: "18.00–19.00",
              text: "Саша Скворцова Волшебство из ничего: сочини свою историю Литературная мастерская 9+"
            },
            {
              time: "19.00–20.00",
              text: "Мафия с Женей Заслоцким (Wonderman) Игра 8+ (регистрация до 15 человек)"
            }
          ]
        },
        {
          date: "27 декабря",
          events: [
            {
              time: "11.00–12.00",
              text: "Театрализованная ханукальная экскурсия по музею АНУ с Сашей Андреевой для детей 6-12 лет в сопровождении взрослых (регистрация 15 детей)"
            },
            {
              time: "11.00–12.00",
              text: "Авторская экскурсия по Музею АНУ 'Вокруг Меноры' с Зоей Брук для взрослых и подростков (регистрация 25 участников)"
            },
            {
              time: "11.30–12.30",
              text: "Анна Никуличева Лаборатория изобретений практикум по креативному мышлению для детей и родителей 6+"
            }
          ]
        }
      ];

    function addLimit() {
        setLimit(15)
        setIsMoreBtnClicked(!isMoreBtnClicked)
    }

    function resetLimit() {
        setLimit(3)
        setIsMoreBtnClicked(!isMoreBtnClicked)
    }
      

    return(
        <section className="visitingRules_section" id='rules'>
            <Heading>Важные примечания</Heading>
            <div className="visitingRules_zig_zag"></div>
            <div className="visitingRules_small_rounds"></div>
            <div className="visitingRules_one_cake"></div>
            <ul className="visitingRules_ul_dates_container">
                <li className="visitingRules_li_dates">В четверг 26 декабря фестиваль начинает работу в 16:00</li>
                <li className="visitingRules_li_dates">В пятницу 27 декабря фестиваль начинает работу в 11:00</li>
                <li className="visitingRules_li_dates">На некоторые мастер-классы и экскурсии ведущие не могут принять более определенного числа посетителей. Это будет некомфортно ни для гостей, ни для ведущих. Поэтому для того, чтобы попасть на нужные активности, нужна <span className='visitingRules_text_bold'>регистрация</span>.</li>
            </ul>

            <ul className="visitingRules_ul_round_info">
                <li className="visitingRules_li_round_info visitingRules_text_bold">
                    Регистрация будет проходить в дни фестиваля прямо на стойке Ресепшн Главный вход Музея АНУ.
                </li>
                <li className="visitingRules_li_round_info visitingRules_text_bold">Когда вы придете на фестиваль, необходимо подойти на стойку регистрации, чтобы записаться.</li>
                <li className="visitingRules_li_round_info visitingRules_text_bold">Многие активности повторяются, как раз для того, чтобы смогло попасть, как можно большее количество участников.</li>
            </ul>

            <h3 className="visitingRules_events_title">Cобытия, на которые нужна регистрация:</h3>
            <div className="visitingRules_events_main_wrapper">
                <div className="visitingRules_yellowcake"></div>
                <div className="visitingRules_browncake"></div>
                <div className="visitingRules_events_date_container">
                    <h3 className="visitingRules_events_data_title">{events[0].date}</h3>
                    <ul className="visitingRules_events_container">
                        {events[0].events.slice(0, limit).map((i, index) => (
                        <li key={index} className="visitingRules_events_text_and_time"><span className="visitingRules_events_time">{i.time}</span> {i.text}</li>
                        ))}
                    </ul>
                    {isMoreBtnClicked?
                          <button className="visitingRules_more_btn" onClick={resetLimit}>Свернуть</button>
                        :
                          <button className="visitingRules_more_btn" onClick={addLimit}>Посмотреть больше</button>
                    }
                    <div className="visitingRules_star"></div>
                </div>
                <div className="visitingRules_events_date_container">
                    <h3 className="visitingRules_events_data_title">{events[1].date}</h3>
                    <ul className="visitingRules_events_container">
                        {events[1].events.map((i, index) => (
                        <li key={index} className="visitingRules_events_text_and_time"><span className="visitingRules_events_time">{i.time}</span> {i.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default VisitingRules