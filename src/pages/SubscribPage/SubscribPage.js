import SubscribForm from '../../components/Forms/SubscribForm/SubscribForm'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'

export default function SubscribPage() {
    const colors = {
        pink: 'pink',
        purple: 'purple',
        yellow: 'yellow',
        blue: 'blue',
        another: 'another'
    }
    return (
        <>
            <SubscribForm></SubscribForm>
            <SeparatorPage color={colors.another}></SeparatorPage>
        </>
    )
}