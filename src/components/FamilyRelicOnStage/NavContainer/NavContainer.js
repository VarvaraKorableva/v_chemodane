import './NavContainer.css'

function NavContainer() {
    return(
        <nav className="hanukaTelAviv2024Banner__nav-container">
            <ul className="hanukaTelAviv2024Banner__ul-container">
                <li className="hanukaTelAviv2024Banner__li">
                    <a className="hanukaTelAviv2024Banner__link" href="#schedule_FamilyRelicOnStage">Расписание</a>
                </li>
                <li className="hanukaTelAviv2024Banner__li">
                    <a className="hanukaTelAviv2024Banner__link" href="#about_FamilyRelicOnStage">О событии</a>
                </li>
                <li className="hanukaTelAviv2024Banner__li">
                    <a className="hanukaTelAviv2024Banner__link" href="#audience_FamilyRelicOnStage">Для кого</a> {/*href="#market"*/}
                </li>
                <li className="hanukaTelAviv2024Banner__li">
                    <a className="hanukaTelAviv2024Banner__link" href="#benefits_FamilyRelicOnStage">Преимущества</a>
                </li>
            </ul>
            <a 
                href='https://www.anumuseum.org.il/ru/events/purim-russian/'
                className="hanukaTelAviv2024Banner__link-btn" 
                target='_blank'
                rel="noopener noreferrer"
            >Билеты</a>
        </nav>
    )
}

export default NavContainer