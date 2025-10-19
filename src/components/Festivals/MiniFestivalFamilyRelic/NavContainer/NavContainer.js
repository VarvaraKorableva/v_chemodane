import './NavContainer.css'

function NavContainer() {
    return(
        <nav className="hanukaTelAviv2024Banner__nav-container">
            <ul className="hanukaTelAviv2024Banner__ul-container">
                <li className="hanukaTelAviv2024Banner__li">
                    <a className="hanukaTelAviv2024Banner__link" href="#aboutEvent_MiniFestivalFamilyRelic">О событии</a>
                </li>
                <li className="hanukaTelAviv2024Banner__li">
                    <a className="hanukaTelAviv2024Banner__link" href="#schedule_MiniFestivalFamilyRelic">Расписание</a>
                </li>
            </ul>
            <a 
                href='https://www.anumuseum.org.il/ru/events/the-suitcase/'
                className="hanukaTelAviv2024Banner__link-btn" 
                target='_blank'
                rel="noopener noreferrer"
            >Билеты</a>
        </nav>
    )
}

export default NavContainer