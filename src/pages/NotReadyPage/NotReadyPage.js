import './NotReadyPage.css'
import {Link} from 'react-router-dom'

function NotReadyPage() {
    return (
        <div className="notReadyPage__container">
            <h1 className="notReadyPage__title">Привет!</h1>
            <h2 className="notReadyPage__subtitle">Страничка в разработке, скоро тут появится актуальная информация :)</h2>
            <Link to='/' className="notReadyPage__link">Вернуться на главную</Link>
        </div>
    )
}

export default NotReadyPage