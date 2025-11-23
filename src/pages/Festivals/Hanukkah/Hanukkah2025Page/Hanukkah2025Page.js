import Hanukkah2025Banner from '../../../../components/Festivals/Hanukkah2025/Hanukkah2025Banner/Hanukkah2025Banner'
import MainInfo from '../../../../components/Festivals/Hanukkah2025/MainInfo/MainInfo'
import TheatreProgram from '../../../../components/Festivals/Hanukkah2025/Program/TheatreProgram'
import ScienceProgram from '../../../../components/Festivals/Hanukkah2025/Program/ScienceProgram'
import LiteratureProgram from '../../../../components/Festivals/Hanukkah2025/Program/LiteratureProgram'
import LiveMusic from '../../../../components/Festivals/Hanukkah2025/LiveMusic/LiveMusic'
import SpecialEvent from '../../../../components/Festivals/Hanukkah2025/SpecialEvent/SpecialEvent'
import TicketsStickyButton from '../../../../components/TicketsStickyButton/TicketsStickyButton'


import any from '../../../../images/logo/anublack.png'
import nadav from '../../../../images/logo/Nadav.png'
import ujFederation from '../../../../images/logo/ujFederation.png'
import yadvashem from '../../../../images/logo/yadvashem.png'


function Hanukkah2025Page() {
    const link = 'https://eventbuzz.co.il/producer/v2/Vchemodane'

    const partnersData = 
    [
        {
            name: 'МУЗЕЙ АНУ',
            logo: any,
            alt: 'logo МУЗЕЙ АНУ',
            link: 'https://www.anumuseum.org.il/ru/',
            description: '',
            id: 1,
        },
        {
            name: 'ФОНД НАДАВ',
            logo: nadav,
            alt: 'logo ФОНД НАДАВ',
            link: 'https://nadavfoundation.org',
            description: '',
            id: 2,
        },
        {
            name: 'Яд Вашем',
            logo: yadvashem,
            alt: 'logo Яд Вашем',
            link: 'https://www.yadvashem.org/ru/',
            description: '',
            id: 3,
        },

        {
            name: 'UJAFederation',
            logo: ujFederation,
            alt: 'logo UJAFederation',
            link: '',
            description: '',
            id: 4,
        },


    ]

    return (
        <>
            <Hanukkah2025Banner/>
            <MainInfo></MainInfo>
            <TheatreProgram></TheatreProgram>
            <ScienceProgram></ScienceProgram>
            <LiteratureProgram></LiteratureProgram>
            <LiveMusic></LiveMusic>
            <SpecialEvent></SpecialEvent>
            <TicketsStickyButton link={link}/>
        </>
    )
} 

export default Hanukkah2025Page