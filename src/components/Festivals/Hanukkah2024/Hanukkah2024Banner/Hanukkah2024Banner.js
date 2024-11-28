import './Hanukkah2024Banner.css'
import HanukkahBanner from '../../../../images/banners/hanukkah2024.png'
import Hanuka2024NavContainer from '../Hanuka2024NavContainer/Hanuka2024NavContainer'

function Hanuka2024Banner() {
    return (
        <section className="hanukaTelAviv2024Banner__section">
            <div className="hanukaTelAviv2024Banner__pic-container">
                <img src={HanukkahBanner} alt="Аннонс Хунука 2024" className="hanukaTelAviv2024Banner__img"></img>
            </div>
            <Hanuka2024NavContainer/>
        </section>
    )
}

export default Hanuka2024Banner