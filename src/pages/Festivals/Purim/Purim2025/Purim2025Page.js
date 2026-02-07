import Purim2026Banner from '../../../../components/Festivals/Purim/Purim2026/Purim2026Banner/Purim2026Banner'
import MainInfo from '../../../../components/Festivals/Purim/Purim2026/MainInfo/MainInfo'
import MainTicket from '../../../../components/Festivals/Purim/Purim2026/MainTicket/MainTicket'
import MainAlso from '../../../../components/Festivals/Purim/Purim2026/MainAlso/MainAlso'

import ScienceProgram from '../../../../components/Festivals/Hanukkah2025/Program/ScienceProgram'
import LiteratureProgram from '../../../../components/Festivals/Hanukkah2025/Program/LiteratureProgram'
import LiveMusic from '../../../../components/Festivals/Hanukkah2025/LiveMusic/LiveMusic'
import SpecialEvent from '../../../../components/Festivals/Hanukkah2025/SpecialEvent/SpecialEvent'
import TicketsStickyButton from '../../../../components/TicketsStickyButton/TicketsStickyButton'
import Schedule from '../../../../components/Festivals/MiniFestivalFamilyRelic/Schedule/Schedule'
import SeparatorPage from '../../../../components/SeparatorPage/SeparatorPage'
import OurPartners from '../../../../components/OurPartners/OurPartners'

import schedulePdf from '../../../../images/hanukkah2025/Schedule/sc.pdf'
import schedulePng from '../../../../images/hanukkah2025/Schedule/sc17.jpg'
import schedulePngSecond from '../../../../images/hanukkah2025/Schedule/sc18.jpg'

import any from '../../../../images/logo/anublack.png'
import nadav from '../../../../images/logo/Nadav.png'
import ujFederation from '../../../../images/logo/ujFederation.png'
import latte from '../../../../images/logo/latte.png'
import nontech from '../../../../images/logo/nontech.png'

function Purim2026Page({addCard, limit}) {
    const link = 'https://eventbuzz.co.il/producer/v2/Vchemodane'

    const colors = {
        blueorangedarkblueyellow: 'blueorangedarkblueyellow',
        birusacoral: 'birusacoral',
        coralyellow: 'coralyellow',
        yellowblue: 'yellowblue'
    }

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
            name: 'UJAFederation',
            logo: ujFederation,
            alt: 'logo UJAFederation',
            link: 'https://www.ujafedny.org/',
            description: '',
            id: 6,
        },
        {
            name: 'nontech',
            logo: nontech,
            alt: 'logo nontech',
            link: 'https://nontech.co.il/',
            description: '',
            id: 5,
        },
        {
            name: 'latte',
            logo: latte,
            alt: 'logo latte',
            link: 'https://www.facebook.com/groups/pumpkinlatte/',
            description: '',
            id: 8,
        },
        {
            name: 'ФОНД НАДАВ',
            logo: nadav,
            alt: 'logo ФОНД НАДАВ',
            link: 'https://nadavfoundation.org',
            description: '',
            id: 2,
        },
    ]

    const idName = 'schedule_Purim2026'

    return (
        <>
            <Purim2026Banner/>
            <MainInfo></MainInfo>
            <MainTicket></MainTicket>
            <MainAlso></MainAlso>
            <OurPartners dataArr={partnersData}/>
        </>
    )
} 

export default Purim2026Page