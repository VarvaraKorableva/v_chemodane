import '../StoryTimeBannerSection/StoryTimeBannerSection.css'

function StoryTimeBannerNavigation () {
    return(
        <nav className="storyTimeBannerSection__nav-container">
        <ul className="storyTimeBannerSection__ul-container">
            <li className="storyTimeBannerSection__li">
                <a className="storyTimeBannerSection__link" href="#aboutProject">О Проекте</a>
            </li>
            <li className="storyTimeBannerSection__li">
                <a href="#Presenters" className="storyTimeBannerSection__link">Ведущие</a>
            </li>
            <li className="storyTimeBannerSection__li">
                <a href="#Partners" className="storyTimeBannerSection__link">Партнеры</a>
            </li>
            <li className="storyTimeBannerSection__li">
                <a href="#Organizers" className="storyTimeBannerSection__link">Организаторы</a>
            </li>
        </ul>
        <a href={'https://forms.gle/yRaz25gniLuf1ZtZ6'} className="storyTimeBannerSection__link-btn" target='_blank'>Регистрация</a>
    </nav>
    )
}

export default StoryTimeBannerNavigation