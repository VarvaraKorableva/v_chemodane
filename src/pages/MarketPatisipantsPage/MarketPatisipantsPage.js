import Participants from '../../components/Participants/Participants'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'

function MarketPatisipantsPage({addCard, limit}) {
    return(
        <>
          <Participants addCard={addCard} limit={limit}/>
          <SeparatorPage/>
        </>
    )
}

export default MarketPatisipantsPage