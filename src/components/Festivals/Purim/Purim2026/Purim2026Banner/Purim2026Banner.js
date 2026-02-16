import NavContainer from './NavContainer/NavContainer'
import './Purim2026Banner.css'

export default function Purim2026Banner() {
    return(
        <section className='Purim2026Banner__banner__section'>
            <div className='Purim2026Banner__banner__pic-container'>

                <div className='Purim2026Banner__content__container'>
                    <div className='uppercase Purim2026Banner__time__container'>
                        <p className='Purim2026Banner__text'>3 марта <span className='Purim2026Banner__time'>12:00–20:00</span></p>
                        <p className='Purim2026Banner__text'>4 марта <span className='Purim2026Banner__time'>12:00–20:00</span></p>
                    </div>


                    <div className='uppercase Purim2026Banner__text__wrapper'>
                        <p className='Purim2026Banner__text'>семейный</p> 
                        <p className='Purim2026Banner__text'>фестиваль</p>
                        <p className='Purim2026Banner__text__white'>в дни пурима</p>
                    </div>

                    <div className='Purim2026Banner__title'></div>

                    <div className='uppercase Purim2026Banner__stars__container'>
                        <p>книги</p>
                        <div className='Purim2026Banner__star'></div>
                        <p>маски</p>
                        <div className='Purim2026Banner__star'></div>
                        <p>чудеса</p>
                    </div>

                    <p className='Purim2026Banner__main__text'>Театры и мастер-классы для всей семьи</p>
                    <p className='Purim2026Banner__main__text margin__bottom20'>Вход в костюмах приветствуется</p>
                </div>

                <div className='Purim2026Banner__dots__bg'></div>
                <div className='Purim2026Banner__flags'></div>
                <div className='Purim2026Banner__wavy__line'></div>
                <div className='Purim2026Banner__wavyline__and__round'></div>
                <div className='Purim2026Banner__star__big'></div>

                <div className='Purim2026Banner__second__left__round'></div>
                <div className='Purim2026Banner__round'></div>
                <div className='Purim2026Banner__dots'></div>
                <div className='Purim2026Banner__left__round'></div>
                <div className='Purim2026Banner__down__star'></div>
                <div className='Purim2026Banner__right__star'></div>
                <div className='Purim2026Banner__pink__round'></div>
                <div className='Purim2026Banner__pink__round__left'></div>
                <div className='Purim2026Banner__blue__round__left'></div>

                <div className='Purim2026Banner__right__star__big__screen'></div>
                <div className='Purim2026Banner__round__big__screen'></div>
                <div className='Purim2026Banner__pink__round__big__screen'></div>
                <div className='Purim2026Banner__right__star__big__screen'></div>


            </div> 

            <NavContainer/>
        </section>
    )
}