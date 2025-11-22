import Container from '../../../../UI-Kit/Container/Container'
import Heading from '../../../../UI-Kit/Heading/Heading'
import '../hanukkah2025.css'
import './LiveMusic.css'

export default function LiveMusic() {
    return(
        <Container as="section">
            <div className='center_container_hanukkha2025 liveMusic__container'>
                <Heading className="heading heading__1563FF liveMusic__heading">живая музыка</Heading>
                <p className='uppercase bold'>На сцене — виртуоз гитары, певец Ваня Жук</p>
                <p className='uppercase bold'>А также Джазовый концерт Сюрприз</p>
                <div className='liveMusic__left__pic'></div>
                <div className='liveMusic__lastPic'></div>
            </div>
            
        </Container>
    )
}