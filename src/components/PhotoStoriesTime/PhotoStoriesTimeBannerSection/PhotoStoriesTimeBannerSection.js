import Container from '../../../UI-Kit/Container/Container'
import NavContainer from './NavContainer/NavContainer'
import './PhotoStoriesTimeBannerSection.css'

export default function PhotoStoriesTimeBannerSection() {
    return(
        <section className='banner__section'>
            <div className='banner__pic-container'>
                <div className='PhotoStoriesTimeBannerSection__stright-container'>
                    <div className='PhotoStoriesTimeBannerSection__stright-orange'></div>
                    <div className='PhotoStoriesTimeBannerSection__stright-blue'></div>
                    <div className='PhotoStoriesTimeBannerSection__stright-yellow'></div>
                    <div className='PhotoStoriesTimeBannerSection__stright-red'></div>
                    <div className='PhotoStoriesTimeBannerSection__stright-green'></div>
                </div>

                <div className='PhotoStoriesTimeBannerSection-main-text-container'>
                    <div className='PhotoStoriesTimeBannerSection-pic-three'></div>
                    <div className='PhotoStoriesTimeBannerSection-pic-two'></div>
                    <div className='PhotoStoriesTimeBannerSection-pic-one'></div>
                    <div className='PhotoStoriesTimeBannerSection-pic-logo'></div>
                    
                    <div className='PhotoStoriesTimeBannerSection-title-container'>
                        <h2 className='PhotoStoriesTimeBannerSection-subtitle PhotoStoriesTimeBannerSection-subtitle-start'>
                            Семейная<br/>
                            онлайн лаборатория
                        </h2>
                        <h1 className='PhotoStoriesTimeBannerSection-title'>
                            Время фото-<span className='PhotoStoriesTimeBannerSection-title-white'>историй</span>
                        </h1>
                    </div>
                    <h2 className='PhotoStoriesTimeBannerSection-subtitle PhotoStoriesTimeBannerSection-subtitle-end'><span className='PhotoStoriesTimeBannerSection-title-white'>старт</span> программы 23 ноября</h2>
                </div>

                <div className='PhotoStoriesTimeBannerSection__right-stright-container'>
                    <div className='PhotoStoriesTimeBannerSection__stright-green-right'></div>
                    <div className='PhotoStoriesTimeBannerSection__stright-blue-right'></div>
                </div>
            </div>
            <NavContainer/>
        </section>
    )
}