import EventPokaVseDomaBanner from '../../components/Events/EventPokaVseDoma/EventPokaVseDomaBanner/EventPokaVseDomaBanner'
import EventPokaVseDomaScedule from '../../components/Events/EventPokaVseDoma/EventPokaVseDomaScedule/EventPokaVseDomaScedule'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'

function EventPokaVseDomaPage({}) {

    const colors = {
        another: 'another'
    }

    return (
        <>
            <EventPokaVseDomaBanner/>
            <EventPokaVseDomaScedule/>
            <SeparatorPage color={colors.another}></SeparatorPage>
            
        </>
    )
}

export default EventPokaVseDomaPage