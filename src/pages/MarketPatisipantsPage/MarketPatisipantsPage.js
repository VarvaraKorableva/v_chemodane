import Participants from '../../components/Participants/Participants'

function MarketPatisipantsPage({addCard, limit}) {
    return(
        <>
          <Participants addCard={addCard} limit={limit}/>
        </>
    )
}

export default MarketPatisipantsPage