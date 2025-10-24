import Container from '../../../UI-Kit/Container/Container'
import './TextSection.css'
import Heading from '../../../UI-Kit/Heading/Heading'

export default function TextSection() {
    return(
        <Container as="section" id='PhotoStoriesTime__TextSection'>
            <Heading className="PhotoStoriesTimeHeading PhotoStoriesTimeHeading__red">О Проекте</Heading>
          <div className='TextSection__container text'>
            <p className='TextSection__text'>
                У каждой семьи есть альбомы и коробки со старыми снимками. На них — люди, чьи лица кажутся знакомыми, места, о которых мы мало знаем, и события, о которых хочется спросить. Эта программа — про то, как научиться «слушать» фотографии и находить в них больше, чем просто изображение.
            </p>
            <p className='TextSection__text'>
                Мы вместе будем разглядывать снимки, задавать вопросы и искать ответы, пробовать исследовательские приёмы, знакомиться с полезными ресурсами. Поговорим о том, как хранить фотографии и как превращать их в арт-объекты.
            </p>
            <p className='TextSection__text'>
                Программа проходит онлайн, но включает в себя две очные встречи в Мемориальном комплексе Яд Вашем и АНУ — Музей Еврейского народа.
            </p>
            <p className='TextSection__text'>
                Участие в первых зум-встречах — бесплатное. Чтобы присоединиться, достаточно заполнить форму заявки. Те, кто будут несколько месяцев работать над проектами с творческими кураторами и посещать музейные мероприятия, оплачивают участие 
                <a href="https://tickets.anumuseum.org.il/ru/event/33819" class="link"> здесь</a>.
            </p>
          </div>
        </Container>
    )
}