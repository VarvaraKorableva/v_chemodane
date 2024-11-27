import './HanukaTelAviv2024Banner.css'
import hanukaBanner from '../../../images/banners/hanuka2024.png'

function HanukaTelAviv2024Banner() {
    return (
        <section className="hanukaTelAviv2024Banner__section">
            <div className="hanukaTelAviv2024Banner__pic-container">
                <img src={hanukaBanner} alt="Аннонс Хунука 2024" className="hanukaTelAviv2024Banner__img"></img>
            </div>
            <nav className="hanukaTelAviv2024Banner__nav-container">
                <ul className="hanukaTelAviv2024Banner__ul-container">
                    <li className="hanukaTelAviv2024Banner__li">
                        <a className="hanukaTelAviv2024Banner__link" href="#aboutProject">Анонс</a>
                    </li>
                    <li className="hanukaTelAviv2024Banner__li">
                        <a href="#Presenters" className="hanukaTelAviv2024Banner__link">Расписание</a>
                    </li>
                    <li className="hanukaTelAviv2024Banner__li">
                        <a href="#Partners" className="hanukaTelAviv2024Banner__link">Правила посещения</a>
                    </li>
                    <li className="hanukaTelAviv2024Banner__li">
                        <a href="#Organizers" className="hanukaTelAviv2024Banner__link">Лотерея</a>
                    </li>
                    <li className="hanukaTelAviv2024Banner__li">
                        <a href="#Organizers" className="hanukaTelAviv2024Banner__link">Участники маркета</a>
                    </li>
                    <li className="hanukaTelAviv2024Banner__li">
                        <a href="#Organizers" className="hanukaTelAviv2024Banner__link">Партнеры</a>
                    </li>
                </ul>
                <a 
                    href={'https://forms.gle/yRaz25gniLuf1ZtZ6'} 
                    className="hanukaTelAviv2024Banner__link-btn" 
                    target='_blank'
                    rel="noopener noreferrer"
                >Билеты</a>
            </nav>
        </section>
    )
}

export default HanukaTelAviv2024Banner