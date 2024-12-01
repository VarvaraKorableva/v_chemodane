import '../Hanukkah2024Banner/Hanukkah2024Banner.css'

function Hanuka2024NavContainer() {
    return(
        <nav className="hanukaTelAviv2024Banner__nav-container">
            <ul className="hanukaTelAviv2024Banner__ul-container">
                <li className="hanukaTelAviv2024Banner__li">
                    <a className="hanukaTelAviv2024Banner__link" href="#announcement">Анонс</a>
                </li>
                <li className="hanukaTelAviv2024Banner__li">
                    <a href="#schedulehanukkah" className="hanukaTelAviv2024Banner__link" href="#schedulehanukkah">Расписание</a>
                </li>
                <li className="hanukaTelAviv2024Banner__li">
                    <a href="#Partners" className="hanukaTelAviv2024Banner__link" href="#rules">Важные примечания</a>
                </li>
                <li className="hanukaTelAviv2024Banner__li">
                    <a href="#Organizers" className="hanukaTelAviv2024Banner__link" href="#lottery">Лотерея</a>
                </li>
                <li className="hanukaTelAviv2024Banner__li">
                    <a href="#Organizers" className="hanukaTelAviv2024Banner__link" href="#market">Участники маркета</a>
                </li>
                <li className="hanukaTelAviv2024Banner__li">
                    <a href="#Organizers" className="hanukaTelAviv2024Banner__link" href="#partners">Партнеры</a>
                </li>
            </ul>
            <a 
                href='https://www.anumuseum.org.il/ru/events/hanukah-festival-russian/'
                className="hanukaTelAviv2024Banner__link-btn" 
                target='_blank'
                rel="noopener noreferrer"
            >Билеты</a>
        </nav>
    )
}

export default Hanuka2024NavContainer
