import PhotoStoriesTimeBannerSection from '../../components/PhotoStoriesTime/PhotoStoriesTimeBannerSection/PhotoStoriesTimeBannerSection'
import MainInfo from '../../components/PhotoStoriesTime/MainInfo/MainInfo'
import TextSection from '../../components/PhotoStoriesTime/TextSection/TextSection'
import ForWhom from '../../components/PhotoStoriesTime/ForWhom/ForWhom'
import ProgramFlow from '../../components/PhotoStoriesTime/ProgramFlow/ProgramFlow'
import ProgramBenefits from '../../components/PhotoStoriesTime/ProgramBenefits/ProgramBenefits'
import HowToParticipate from '../../components/PhotoStoriesTime/HowToParticipate/HowToParticipate'
import ProgramCurators from '../../components/PhotoStoriesTime/ProgramCurators/ProgramCurators'
import ProgramSchedule from '../../components/PhotoStoriesTime/ProgramSchedule/ProgramSchedule'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'

import OurPartners from '../../components/OurPartners/OurPartners'

import any from '../../images/logo/anublack.png'
import nadav from '../../images/logo/Nadav.png'
import ujFederation from '../../images/logo/ujFederation.png'
import yadvashem from '../../images/logo/yadvashem.png'

function PhotoStoriesTimePage() {

    const colors = {
        orangeline: 'orangeline',
        yellowline: 'yellowline',
        redline: 'redline',
        blueline: 'blueline',
        blueBigline: 'blue_bigline',
        blueLineMiddle: 'blueline_middle',
        threeLines: 'three_lines',
        threeLinesRedline: 'three_lines_redline'
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
            <PhotoStoriesTimeBannerSection></PhotoStoriesTimeBannerSection>
            <MainInfo></MainInfo>
            <SeparatorPage color={colors.blueline}></SeparatorPage>
            <TextSection></TextSection>
            <SeparatorPage color={colors.redline}></SeparatorPage>
            <ForWhom></ForWhom>
            <SeparatorPage color={colors.yellowline}></SeparatorPage>
            <ProgramFlow></ProgramFlow>
            <SeparatorPage color={colors.orangeline}></SeparatorPage>
            <ProgramBenefits></ProgramBenefits>
            <SeparatorPage color={colors.blueline}></SeparatorPage>
            <HowToParticipate></HowToParticipate>
            <SeparatorPage color={colors.blueBigline}></SeparatorPage>
            <ProgramCurators></ProgramCurators>
            <SeparatorPage color={colors.blueLineMiddle}></SeparatorPage>
            <ProgramSchedule></ProgramSchedule>
            <SeparatorPage color={colors.threeLinesRedline} variant="tall"></SeparatorPage>
            <OurPartners dataArr={partnersData}></OurPartners>
            <SeparatorPage color={colors.threeLines} variant="tall"></SeparatorPage>
        </>
    )
} 

export default PhotoStoriesTimePage