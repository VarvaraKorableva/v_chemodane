import RegistrationForm from '../../components/Forms/Registration/RegistrationForm'
import SeparatorPage from '../..//components/SeparatorPage/SeparatorPage'

export default function RegistrationPage() {
    const colors = {
        pink: 'pink',
        purple: 'purple',
        yellow: 'yellow',
        blue: 'blue',
        another: 'another'
    }
    return (
        <>
            <RegistrationForm></RegistrationForm>
            <SeparatorPage color={colors.another}></SeparatorPage>
        </>
    )
}