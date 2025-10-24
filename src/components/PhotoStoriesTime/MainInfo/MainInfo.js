import Container from '../../../UI-Kit/Container/Container'
import './MainInfo.css'

export default function MainInfo() {
    return(
        <Container as="section">
            <div className='center__text_container'>
                <p className='PhotoStoriesTime__MainInfo__subtitle'>Семейный книжный фестиваль <span class="no-wrap">«В Чемодане»</span> представляет:</p>
                <p className='PhotoStoriesTime__MainInfo__subtitle uppercase'>Семейная онлайн-лаборатория</p>
                <p className='PhotoStoriesTime__MainInfo__title'>Время <span class="no-wrap">фото-историй</span></p>
                <p className='PhotoStoriesTime__MainInfo__subtitle'>Старт программы 23 ноября</p>
            </div>
        </Container>
    )
}