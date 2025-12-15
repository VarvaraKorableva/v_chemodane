import Hanukkah2025Banner from '../../../../components/Festivals/Hanukkah2025/Hanukkah2025Banner/Hanukkah2025Banner'
import MainInfo from '../../../../components/Festivals/Hanukkah2025/MainInfo/MainInfo'
import TheatreProgram from '../../../../components/Festivals/Hanukkah2025/Program/TheatreProgram'
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
import ulpanPolitica from '../../../../images/logo/ulpanPolitica.png' ////////link
import ujFederation from '../../../../images/logo/ujFederation.png'
import latte from '../../../../images/logo/latte.png'
import ole from '../../../../images/logo/ole.png'
import haifaruco from '../../../../images/logo/haifaruco.png'
import haifaafisha from '../../../../images/logo/haifaafisha.png'
import Participants from '../../../../components/Participants/Participants'

function Hanukkah2025Page({addCard, limit}) {
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
            name: 'ФОНД НАДАВ',
            logo: nadav,
            alt: 'logo ФОНД НАДАВ',
            link: 'https://nadavfoundation.org',
            description: '',
            id: 2,
        },
        {
            name: 'ulpanPolitica',
            logo: ulpanPolitica,
            alt: 'logo ulpanPolitica',
            link: 'https://ulpan.space/',
            description: '',
            id: 3,
        },
        {
            name: 'ole',
            logo: ole,
            alt: 'logo ole',
            link: 'https://olimhaifa.co.il/',
            description: '',
            id: 4,
        },
        {
            name: 'haifaruco',
            logo: haifaruco,
            alt: 'logo haifaruco',
            link: 'https://haifaru.co.il/',
            description: '',
            id: 5,
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
            name: 'haifaafisha',
            logo: haifaafisha,
            alt: 'logo haifaafisha',
            link: 'https://www.haifaafisha.org/ru/',
            description: '',
            id: 7,
        },
        {
            name: 'latte',
            logo: latte,
            alt: 'logo latte',
            link: 'https://www.facebook.com/groups/pumpkinlatte/',
            description: '',
            id: 8,
        }
    ]

    const idName = 'schedule_Hanukkah2025'

    return (
        <>
            <Hanukkah2025Banner/>
            <MainInfo></MainInfo>
            <TheatreProgram></TheatreProgram>
            <ScienceProgram></ScienceProgram>
            <LiteratureProgram></LiteratureProgram>
            <LiveMusic></LiveMusic>
            <SpecialEvent></SpecialEvent>
            <SeparatorPage color={colors.birusacoral}></SeparatorPage>
            <Schedule schedulePdf={schedulePdf} schedulePng={schedulePng} schedulePngSecond={schedulePngSecond} idName={idName}/>
            <SeparatorPage color={colors.yellowblue}></SeparatorPage>
            <Participants addCard={addCard} limit={limit}></Participants>
            <SeparatorPage color={colors.coralyellow}></SeparatorPage>
            <OurPartners dataArr={partnersData}/>
            <SeparatorPage color={colors.blueorangedarkblueyellow}></SeparatorPage>
            <TicketsStickyButton link={link}/>
        </>
    )
} 

export default Hanukkah2025Page