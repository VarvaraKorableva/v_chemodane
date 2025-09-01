import Heading from '../../../UI-Kit/Heading/Heading'
import Container from '../../../UI-Kit/Container/Container'

function PurposeAndAudience() {
     return(
         <Container as="section" id="audience_FamilyRelicOnStage">
             <Heading>Зачем и для кого?</Heading>
             <p className='text'>
                Лаборатория — это опыт <strong>объединения семьи с помощью театра</strong>. 
                Она помогает по-новому взглянуть друг на друга, услышать и почувствовать то, что обычно ускользает в повседневной жизни. 
                А ещё это редкая возможность побывать в творческой мастерской Марфы Горвиц. 
             </p>
             <p className='text'>
                Особое значение проект приобретает благодаря месту проведения. Лаборатория проходит  
                <strong> в музее еврейского народа АНУ</strong> — крупнейшем музее еврейской культуры в мире. 
                Это подчёркивает связь семейных историй с общим разговором о <strong>еврейской памяти, преемственности и наследии.</strong>
            </p>
         </Container>
     )
}

export default PurposeAndAudience