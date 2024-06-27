import './NotFoundPage.css'
import {Link} from 'react-router-dom'

function NotFoundPage() {
    return (
        <div className='notFoundPage__container'>
            <h2 className='notFoundPage__text'>Такой страницы не существует</h2>
            <div className='notFoundPage__pic'></div>
            <Link className='notFoundPage__link' to='/'>Вернуться на главную</Link>
        </div>
    )
}

export default NotFoundPage