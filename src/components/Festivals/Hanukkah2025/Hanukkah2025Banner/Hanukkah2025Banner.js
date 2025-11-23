import NavContainer from './NavContainer/NavContainer'
import './Hanukkah2025Banner.css'

export default function Hanukkah2025Banner() {
    return(
        <section className='Hanukkah2025Banner__banner__section'>
            <div className='Hanukkah2025Banner__banner__pic-container'>
            
                <div className='Hanukkah2025Banner__banner__pics__container'>
                    <div className='Hanukkah2025Banner__banner__pic_left'></div>
                    <div className='Hanukkah2025Banner__banner__pic_right'></div>
                </div>

                <div className='Hanukkah2025Banner__banner__pic_first__left'></div>
                <div className='Hanukkah2025Banner__banner__pic_second__left'></div>


                <div className='Hanukkah2025Banner__banner__pic_first__right'></div>
                <div className='Hanukkah2025Banner__banner__pic_second__right'></div>
                

                <div className='Hanukkah2025Banner__banner__Title'></div>
                
            </div>

            <NavContainer/>
        </section>
    )
}