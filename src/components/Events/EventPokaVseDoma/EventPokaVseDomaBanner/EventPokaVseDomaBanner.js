import './EventPokaVseDomaBanner.css'
import NavContainer from './NavContainer'

function EventPokaVseDomaBanner() {
    return (
        <section className="EventPokaVseDomaBanner__section">
            <div className="EventPokaVseDomaBanner__pic-container">
                <div className="EventPokaVseDomaBanner__title-container">
                    <p className="EventPokaVseDomaBanner__title EventPokaVseDomaBanner__poka">Пока</p>
                    <p className=" EventPokaVseDomaBanner__title EventPokaVseDomaBanner__vse">Все</p>
                    <p className=" EventPokaVseDomaBanner__title EventPokaVseDomaBanner__doma">Дома</p>
                    <p className="EventPokaVseDomaBanner__title EventPokaVseDomaBanner__onlain">он-лайн встречи</p>
                </div>
            </div>
            <NavContainer/>
        </section>
    )
}

export default EventPokaVseDomaBanner