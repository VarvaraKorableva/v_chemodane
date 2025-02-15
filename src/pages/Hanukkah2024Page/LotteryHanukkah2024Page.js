import LotteryHanukkah2024Pagination from '../../components/Festivals/Hanukkah2024/LotteryHanukkah2024Pagination/LotteryHanukkah2024Pagination'
import LotteryStickyButton from '../../components/TicketsStickyButton/LotteryStickyButton'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'

function LotteryHanukkah2024Page({handleLotClick}) {
    return(
        <>
            <LotteryStickyButton/>
            <LotteryHanukkah2024Pagination handleLotClick={handleLotClick}/>
            <SeparatorPage/>
        </>
    )
}

export default LotteryHanukkah2024Page