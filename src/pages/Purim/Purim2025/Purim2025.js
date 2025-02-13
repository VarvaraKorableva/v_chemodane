import Purim2025Banner from '../../../components/Purim/Purim2025/Purim2025Banner/Purim2025Banner'
import Presentation from '../../../components/Purim/Purim2025/Presentation/Presentation'
import ImportantNotes from "../../../components/Purim/Purim2025/ImportantNotes/ImportantNotes"

function Purim2025({handleCardClick, addCard, limit}) {
    return (
        <>
            <Purim2025Banner></Purim2025Banner>
            <Presentation></Presentation>
            <ImportantNotes></ImportantNotes>
        </>
    )
}

export default Purim2025