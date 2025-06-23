import React from 'react'
import Heading from '../../UI-Kit/Heading/HeadingClean'
import Container from '../../UI-Kit/Container/Container'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <Container as='section' baseClassName='wrapper' className='privacyPolicy__section'>
      <Container as='div' baseClassName='container'>
        <Heading baseClassName='heading'>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Heading>
        <p className='privacyPolicy__title privacyPolicy__mainTitle'><strong>Обновлено:</strong>июнь 2025</p>

        <Heading as='h2' baseClassName='subTitle'>1. ОБЩИЕ ПОЛОЖЕНИЯ</Heading>
        <p className='privacyPolicy__container'>1.1. Настоящая Политика описывает, какие персональные данные мы собираем, как обрабатываем и защищаем их.<br/>1.2. Мы соблюдаем положения Закона о защите персональных данных Израиля (Privacy Protection Law, 1981) и Общего регламента по защите данных Европейского Союза (GDPR).</p>

        <Heading as='h2' baseClassName='subTitle'>2. КАКИЕ ДАННЫЕ МЫ СОБИРАЕМ</Heading>
        <ul className='privacyPolicy__container'>
          <li>- имя, фамилия, адрес электронной почты, номер телефона;</li>
          <li>- информация, введённая при регистрации, подписке или анкетировании;</li>
          <li>- IP-адрес, cookies, информация об устройстве и браузере;</li>
          <li>- действия пользователя на Сайте (через Google Analytics и иные платформы).</li>
        </ul>

        <Heading as='h2' baseClassName='subTitle'>3. ЦЕЛИ ОБРАБОТКИ ДАННЫХ</Heading>
        <ul className='privacyPolicy__container'>
          <li>- информирование пользователей о мероприятиях, фестивалях, партнёрских проектах;</li>
          <li>- предоставление доступа к регистрации, анкетам, рассылкам;</li>
          <li>- статистический анализ и улучшение пользовательского опыта;</li>
          <li>- исполнение обязательств перед пользователями;</li>
          <li>- соблюдение законов и нормативных требований.</li>
        </ul>

        <Heading as='h2' baseClassName='subTitle'>4. РАССЫЛКИ И ОТКАЗ ОТ ПОДПИСКИ</Heading>
        <p className='privacyPolicy__container'>
          4.1. Мы отправляем новости, обновления и предложения по e-mail.<br/>
          4.2. Вы вправе отказаться от получения рассылки в любой момент, перейдя по ссылке «Отписаться» внизу письма.
        </p>

        <Heading as='h2' baseClassName='subTitle'>5. ПЕРЕДАЧА ДАННЫХ ТРЕТЬИМ СТОРОНАМ</Heading>
        <p className='privacyPolicy__container'>
          5.1. Мы используем сторонние сервисы: Google Analytics, SendGrid, CRM-системы и т.п. Передача данных возможна за пределы Израиля, в том числе в ЕС и РФ, в рамках действующего законодательства.<br/>
          5.2. Мы не продаём ваши данные и не передаём их третьим лицам вне целей, описанных в настоящей Политике.
        </p>

        <Heading as='h2' baseClassName='subTitle'>6. БЕЗОПАСНОСТЬ</Heading>
        <p className='privacyPolicy__container'>
          6.1. Мы принимаем разумные меры для защиты данных от несанкционированного доступа, потери или изменения.<br/>
          6.2. В случае утечки данных мы уведомим пользователей в разумный срок.
        </p>

        <Heading as='h2' baseClassName='subTitle'>7. ПРАВА ПОЛЬЗОВАТЕЛЕЙ</Heading>
        <ul className='privacyPolicy__container'>
          <li>- запросить копию ваших данных;</li>
          <li>- потребовать исправления или удаления данных;</li>
          <li>- ограничить обработку;</li>
          <li>- подать жалобу в надзорный орган.</li>
        </ul>

        <Heading as='h2' baseClassName='subTitle'>8. СРОКИ ХРАНЕНИЯ</Heading>
        <p className='privacyPolicy__container'>8.1. Мы храним персональные данные столько, сколько необходимо для достижения целей их обработки, или до получения от вас запроса на удаление.</p>

        <Heading as='h2' baseClassName='subTitle'>9. КОНТАКТЫ</Heading>
        <p className='privacyPolicy__title'>Для запросов и вопросов по обработке данных: <a href="mailto:info@vchemodane.com">info@vchemodane.com</a></p>
      </Container>
    </Container>
  )
}
