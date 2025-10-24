import Container from '../../../UI-Kit/Container/Container'
import Heading from '../../../UI-Kit/Heading/Heading'

export default function ForWhom() {
    return(
        <Container as="section">
            <Heading className="PhotoStoriesTimeHeading PhotoStoriesTimeHeading__green">Для тех, кто</Heading>
            <ul className='text'>
                <li>Интересуется историей семьи и фотографиями, но не знает, с чего и как начать;</li>
                <li>Всё время откладывает разбор семейного фотоархива и не может найти на это время и вдохновение;</li>
                <li>Мечтает узнать что-то интересное, изучая семейные фотографии или другие изображения;</li>
            </ul>
        </Container>
    )
}