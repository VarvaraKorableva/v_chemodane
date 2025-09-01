import Heading from '../../../UI-Kit/Heading/Heading'
import Container from '../../../UI-Kit/Container/Container'

function PriceInfo () {
    return (
        <Container as="section">
            <Heading>Сколько стоит участие?</Heading>
            <p className='text'>750 ₪ за пару (родитель + ребёнок)</p>
        </Container>
    )
}

export default PriceInfo