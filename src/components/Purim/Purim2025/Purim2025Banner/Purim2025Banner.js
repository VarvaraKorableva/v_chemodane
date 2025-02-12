import './Purim2025Banner.css'
import banner from '../../../../images/banners/purim2025/background.png'
import Purim2025NavContainer from '../Purim2025NavContainer/Purim2025NavContainer'

function Purim2025Banner() {
    return (
        <section className="purim2025__section">

            <div className="purim2025__pic-container">
                <div className="purim2025__leftsq"></div>
                <div className="purim2025__text"></div>
                <div className="purim2025__rightsq"></div>
            </div>
            
            <Purim2025NavContainer/>
        </section>
    )
}

export default Purim2025Banner