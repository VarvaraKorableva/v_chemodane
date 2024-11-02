import './StoryTimeBannerSection.css'

function StoryTimeBannerSection() {
    return(
        <section className="storyTimeBannerSection__section">
            <div className="storyTimeBannerSection__pic-container">

                <div className="storyTimeBannerSection__guitar-pic"></div>
                <div className="storyTimeBannerSection__envelope-pic"></div>
                <div className="storyTimeBannerSection__key-pic"></div>
                <div className="storyTimeBannerSection__feather-pic"></div>
                <div className="storyTimeBannerSection__book-pic"></div>
                <div className="storyTimeBannerSection__arm-pic"></div>
                <div className="storyTimeBannerSection__disk-pic"></div>
                <div className="storyTimeBannerSection__savawon-pic"></div>
                <div className="storyTimeBannerSection__compilation-pic"></div>
                <div className="storyTimeBannerSection__glasses-pic"></div>
                <div className="storyTimeBannerSection__picture-pic"></div>

                <div className="storyTimeBannerSection__left-memory-pic"></div>
                
                <div className="storyTimeBannerSection__title-container">
                    <h3 className="storyTimeBannerSection__subtitle">СЕМЕЙНАЯ ОНЛАЙН ЛАБОРАТОРИЯ</h3>
                    <h1 className="storyTimeBannerSection__title">ВРЕМЯ ИСТОРИЙ</h1>
                    <p className="storyTimeBannerSection__subtitle">OPEN CALL до 11.11.24</p>
                </div>
                <div className="storyTimeBannerSection__rigth-memory-pic"></div>
            </div>
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
        </section>

    )
}

export default StoryTimeBannerSection