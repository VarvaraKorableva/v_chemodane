import '../Purim2025Banner/Purim2025Banner.css'

function Purim2025NavContainer() {
    return(
        <nav className="hanukaTelAviv2024Banner__nav-container">
            <ul className="hanukaTelAviv2024Banner__ul-container">
                <li className="hanukaTelAviv2024Banner__li">
                    <a className="hanukaTelAviv2024Banner__link" href="#schedulehanukkah">Расписание</a>
                </li>
                <li className="hanukaTelAviv2024Banner__li">
                    <a className="hanukaTelAviv2024Banner__link" href="#importantNotes">Важные примечания</a>
                </li>
                <li className="hanukaTelAviv2024Banner__li">
                    <a className="hanukaTelAviv2024Banner__link" >Участники маркета</a> {/*href="#market"*/}
                </li>
                <li className="hanukaTelAviv2024Banner__li">
                    <a className="hanukaTelAviv2024Banner__link" href="#partners">Партнеры</a>
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

export default Purim2025NavContainer