import './Presenters.css'
import vera from '../../../images/storytime/vera.png'
import marina from '../../../images/storytime/marina.png'
import vladimir from '../../../images/storytime/vladimir.png'
import sima from '../../../images/storytime/sima.png'
import ilia from '../../../images/storytime/ilia.png'

function Presenters() {
    return(
        <section className='presenters__section' id='Presenters'>
            <div className='presenters__page-pic'></div>
            <h2 className='presenters__title'>ВЕДУЩИЕ</h2>
            <ul className='presenters__wrapper'>
                <li className='presenters__li_card'>
                    <div className='presenters__photo-container'>
                        <img src={vera} className='presenters__photo' alt='Фотография ведущего Вера Ярилина'></img>
                    </div>
                    <p className='presenters__li_card-title'>Вера Ярилина</p>
                    <p className='presenters__li_card-discription'>психолог, музейный педагог, куратор образовательных программ Zukunft Memorial — Человек в истории</p>
                </li>
                <li className='presenters__li_card'>
                    <div className='presenters__photo-container'>
                        <img src={marina} className='presenters__photo' alt='Фотография ведущего Марина Сазоненко'></img>
                    </div>
                    <p className='presenters__li_card-title'>Марина Сазоненко</p>
                    <p className='presenters__li_card-discription'>Художница, преподаватель,художник-исследователь, педагог, выпускница Аспирантской Школы по искусству и дизайну НИУ ВШЭ</p>
                </li>
                <li className='presenters__li_card'>
                    <div className='presenters__photo-container'>
                        <img src={sima} className='presenters__photo' alt='Фотография ведущего Серафима Велькович'></img>
                    </div>
                    <p className='presenters__li_card-title'>Д-р Серафима Велькович</p>
                    <p className='presenters__li_card-discription'>Руководитель отдела исследования семейных корней в службе архива Яд Вашем. Автор лекций о использовании ресурсов Яд Вашем для генеалогических и других исследований</p>
                </li>
                <li className='presenters__li_card'>
                    <div className='presenters__photo-container'>
                        <img src={ilia} className='presenters__photo' alt='Фотография ведущего Илья Майншлос'></img>
                    </div>
                    <p className='presenters__li_card-title'>Илья Майншлос</p>
                    <p className='presenters__li_card-discription'>Руководитель отдела израильского образования в АНУ-музей еврейского народа, куратор программы изучения еврейских корней “My family story”</p>
                </li>
                <li className='presenters__li_card'>
                    <div className='presenters__photo-container'>
                        <img src={vladimir} className='presenters__photo' alt='Фотография ведущего Владимир Определенов'></img>
                    </div>  
                    <p className='presenters__li_card-title'>Владимир Определенов</p>
                    <p className='presenters__li_card-discription'>Эксперт и исследователь в области сохранения цифрового наследия и использования технологий для сферы искусства и культуры, cооснователь цифровой платформы Album, основатель цифрового Art&Tech агенства TECH4.ART. opredelenov.pro</p>
                </li>  
            </ul>

        </section>
    )
}

export default Presenters