import Purim2026Banner from '../../../../components/Festivals/Purim/Purim2026/Purim2026Banner/Purim2026Banner'
import MainInfo from '../../../../components/Festivals/Purim/Purim2026/MainInfo/MainInfo'
import MainTicket from '../../../../components/Festivals/Purim/Purim2026/MainTicket/MainTicket'
import MainAlso from '../../../../components/Festivals/Purim/Purim2026/MainAlso/MainAlso'

import TicketsStickyButton from '../../../../components/TicketsStickyButton/TicketsStickyButton'
import Schedule from '../../../../components/Festivals/MiniFestivalFamilyRelic/Schedule/Schedule'
import SeparatorPage from '../../../../components/SeparatorPage/SeparatorPage'
import OurPartners from '../../../../components/OurPartners/OurPartners'
import Participants from '../../../../components/Participants/Participants'

import schedulePdf from '../../../../images/schedule/schedulepurim2026.pdf'
import schedulePng from '../../../../images/schedule/schedulepurim2026-1.jpg'
import schedulePngSecond from '../../../../images/schedule/schedulepurim2026-2.jpg'

import any from '../../../../images/logo/anublack.png'
import nadav from '../../../../images/logo/Nadav.png'
import ujFederation from '../../../../images/logo/ujFederation.png'
import latte from '../../../../images/logo/latte.png'
import nontech from '../../../../images/logo/nontech.png'
import howpeople from '../../../../images/logo/howpeople.png'
import ulpanPolitica from '../../../../images/logo/ulpanPolitica.png'
import kehilatdanieljaffa from '../../../../images/logo/kehilatdanieljaffa.jpg'
import mania from '../../../../images/logo/manialogo.png'
import today from '../../../../images/logo/todaylogo.png'

function Purim2026Page({addCard, limit}) {
    const link = 'https://anumuseum.org.il/ru/events/purim-suitcase-26/'

    const colors = {
        purim2026lines4: 'purim2026lines4',
        purim2026linesorange: 'purim2026linesorange',
        purim2026linespurpal: 'purim2026linespurpal',
        purim2026pink: "purim2026pink"
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
            id: 2,
        },
        {
            name: 'ulpanPolitica',
            logo: ulpanPolitica,
            alt: 'logo ulpanPolitica',
            link: '',
            description: '',
            id: 3,
        },
        {
            name: 'nontech',
            logo: nontech,
            alt: 'logo nontech',
            link: 'https://nontech.co.il/',
            description: '',
            id: 4,
        },
        {
            name: 'latte',
            logo: latte,
            alt: 'logo latte',
            link: 'https://www.facebook.com/groups/pumpkinlatte/',
            description: '',
            id: 5,
        },
        {
            name: 'ФОНД НАДАВ',
            logo: nadav,
            alt: 'logo ФОНД НАДАВ',
            link: 'https://nadavfoundation.org',
            description: '',
            id: 6,
        },
        {
            name: 'Как Люди',
            logo: howpeople,
            alt: 'logo Как Люди',
            link: '',
            description: '',
            id: 7,
        },
        {
            name: 'kehilatdanieljaffa',
            logo: kehilatdanieljaffa,
            alt: 'logo kehilatdanieljaffa',
            link: '',
            description: '',
            id: 8,
        },
        {
            name: 'mania',
            logo: mania,
            alt: 'logo mania',
            link: '',
            description: '',
            id: 9,
        },
        {
            name: 'today',
            logo: today,
            alt: 'logo today',
            link: '',
            description: '',
            id: 10,
        },

        
    ]

    const idName = 'schedule_Purim2026'

    return (
        <>
            <Purim2026Banner/>
            <MainInfo></MainInfo>
            <MainTicket></MainTicket>
            <MainAlso></MainAlso>
            <SeparatorPage color={colors.purim2026linespurpal}></SeparatorPage>
            <Schedule schedulePdf={schedulePdf} schedulePng={schedulePng} schedulePngSecond={schedulePngSecond} idName={idName}/>
            <SeparatorPage color={colors.purim2026pink}></SeparatorPage>
            <Participants addCard={addCard} limit={limit}></Participants>
            <SeparatorPage color={colors.purim2026linesorange}></SeparatorPage>
            <OurPartners dataArr={partnersData}/>
            <SeparatorPage color={colors.purim2026lines4}></SeparatorPage>
            <TicketsStickyButton link={link}/>
        </>
    )
} 

export default Purim2026Page