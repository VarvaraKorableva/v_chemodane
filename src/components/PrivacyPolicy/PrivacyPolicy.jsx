import React from 'react'
import Heading from '../../UI-Kit/Heading/HeadingClean'
import Container from '../../UI-Kit/Container/Container'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <Container as='section' baseClassName='wrapper' className='privacyPolicy__section'>
      <Container as='div' baseClassName='container'>
      <Heading baseClassName='heading'>Политика конфиденциальности</Heading>
      <p className='privacyPolicy__title privacyPolicy__mainTitle'><strong>Дата последнего обновления:</strong> 22.06.2025 г.</p>

      <p className='privacyPolicy__title'>
        Мы, организаторы фестиваля «В чемодане», уважаем вашу конфиденциальность и обязуемся защищать персональные данные, которые вы предоставляете при использовании нашего сайта.
      </p>

      <Heading as="h2" baseClassName='subTitle'>Какие данные мы собираем</Heading>
      <ul className='privacyPolicy__container'>
        <li>Имя, email, номер телефона — при регистрации, подписке на новости или покупке билетов.</li>
        <li>Данные о действиях на сайте (через файлы cookie и аналитику).</li>
      </ul>

      <Heading as="h2" baseClassName='subTitle'>Как мы используем данные</Heading>
      <ul className='privacyPolicy__container'>
        <li>Для обратной связи с вами.</li>
        <li>Для отправки новостей и обновлений о фестивале (при вашем согласии).</li>
        <li>Для обработки регистрации и покупки билетов.</li>
      </ul>

      <Heading as="h2" baseClassName='subTitle'>Как мы храним данные</Heading>
      <p className='privacyPolicy__container'>
        Ваши данные хранятся в надёжно защищённых системах. Доступ к ним имеют только уполномоченные лица.
      </p>

      <Heading as="h2" baseClassName='subTitle'>Передача данных третьим лицам</Heading>
      <p className='privacyPolicy__container'>
        Мы не передаём ваши данные третьим лицам, за исключением случаев, предусмотренных законодательством.
      </p>

      <Heading as="h2" baseClassName='subTitle'>Ваши права</Heading>
      <ul className='privacyPolicy__container'>
        <li>Запросить доступ к своим данным.</li>
        <li>Потребовать удаления или изменения данных.</li>
        <li>Отозвать согласие на получение рассылки.</li>
      </ul>

      <Heading as="h2" baseClassName='subTitle'>Контакты</Heading>
      <p className='privacyPolicy__title'>
        Если у вас есть вопросы, напишите нам: <a href="mailto:info@vchemodane.com">info@vchemodane.com</a>
      </p>

      <p className='privacyPolicy__title'>
        Продолжая использовать сайт, вы соглашаетесь с нашей Политикой конфиденциальности.
      </p>
    </Container>
    </Container>
  )
}
