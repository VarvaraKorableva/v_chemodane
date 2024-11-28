import '../Hanukkah2024Banner/Hanukkah2024Banner.css'

function Hanuka2024NavContainer() {
    return(
        <nav className="hanukaTelAviv2024Banner__nav-container">
            <ul className="hanukaTelAviv2024Banner__ul-container">
                <li className="hanukaTelAviv2024Banner__li">
                    <a className="hanukaTelAviv2024Banner__link" href="#announcement">Анонс</a>
                </li>
                <li className="hanukaTelAviv2024Banner__li">
                    <a href="#schedulehanukkah" className="hanukaTelAviv2024Banner__link">Расписание</a>
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
    )
}

export default Hanuka2024NavContainer