import './Info.css'
import Container from '../../../../UI-Kit/Container/Container'
import Heading from '../../../../UI-Kit/Heading/Heading'

function Info() {
    return(
        
        <Container as="section" id="info_MiniFestivalFamilyRelic">
            <Heading>Общая Информация</Heading>
            <div className='text text-center'>
            <p>15 октября 2025 г.</p>
            <p>Мини-фестиваль В чемодане</p> 
            <p>с 17:00 до 22:00,</p>  
            <p>АНУ - Музей еврейского народа, Клаузнер 15 Тель-Авив</p>
            </div>
        </Container>
    )
}

export default Info