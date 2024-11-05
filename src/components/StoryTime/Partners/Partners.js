import './Partners.css'
import anu from '../../../images/logo/Anu.png'
import album from '../../../images/logo/albumlogo.png'
import yadvashem from '../../../images/logo/yadvashem.png'
import myfamilystory from '../../../images/logo/myfamilystory.png'
import OnePartner from './OnePartne'

function Partners() {

    const ourPartnersData = [
        {
            name: 'Album',
            logo: album,
            alt: 'logo Album',
            link: 'https://www.myalbum.art',
            description: '',
            id: 2222,
        },
        {
            name: 'МУЗЕЙ АНУ',
            logo: anu,
            alt: 'logo МУЗЕЙ АНУ',
            link: 'https://www.anumuseum.org.il/ru/',
            description: '',
            id: 2223,
        },
        {
            name: 'Яд Вашем',
            logo: yadvashem,
            alt: 'logo Яд Вашем',
            link: 'https://www.yadvashem.org/ru/',
            description: '',
            id: 2228,
        },
        {
            name: 'My family story',
            logo: myfamilystory,
            alt: 'logo My family story',
            link: 'https://mfs.anumuseum.org.il/ru/',
            description: '',
            id: 2230,
        },
    ]
    return(
        <section className='partners__section' id="Partners">
            <div className='partners__page-pic'></div>
            <h2 className='partners__title'>ПАРТНЕРЫ</h2>
            <ul className="partners__wrapper">
                {
                    ourPartnersData.map((item) => (
                        <OnePartner key={item.id} item={item}></OnePartner>
                    ))
                }
            </ul>
        </section>
    )
}

export default Partners