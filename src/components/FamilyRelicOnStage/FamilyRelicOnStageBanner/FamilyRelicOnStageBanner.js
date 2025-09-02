import './FamilyRelicOnStageBanner.css'
//import banner from '../../../../images/banners/purim2025/background.png'
//import banner from '../../../../images/slider/Relic.jpeg'
import NavContainer from '../NavContainer/NavContainer'

function FamilyRelicOnStageBanner() {
    return (
        <section className="FamilyRelicOnStageBanner__section">

            <div className="FamilyRelicOnStageBanner__pic-container">
                
                    
                    <div className="FamilyRelicOnStageBanner__pic"></div>
                
                
                <div className='FamilyRelicOnStageBanner__text-container'>
                    <p className='FamilyRelicOnStageBanner__text FamilyRelicOnStageBanner__margin'>5-15 ОКТЯБРЯ</p>
                    <h1 className='FamilyRelicOnStageBanner__title FamilyRelicOnStageBanner__text'>ТЕАТРАЛЬНАЯ ЛАБОРАТОРИЯ <span className='no-wrap'>МАРФЫ ГОРВИЦ</span></h1>
                    <h2 className='FamilyRelicOnStageBanner__shadow FamilyRelicOnStageBanner__text'>СЕМЕЙНАЯ РЕЛИКВИЯ</h2>
                    <p className='FamilyRelicOnStageBanner__text'>АНУ - МУЗЕЙ ЕВРЕЙСКОГО НАРОДА</p>
                    <p className='FamilyRelicOnStageBanner__text FamilyRelicOnStageBanner__margin'>ТЕЛЬ-АВИВ, КЛАУЗЕР 15</p> 

                    <p className='FamilyRelicOnStageBanner__text'>ДЛЯ ДЕТЕЙ СТАРШЕ 8 ЛЕТ</p>  
                    <p className='FamilyRelicOnStageBanner__text'>И ИХ РОДИТЕЛЕЙ</p> 
                </div>
                <div className='FamilyRelicOnStageBanner__row-container'>
                        <div className='FamilyRelicOnStageBanner__pic-one'></div>
                        <>
                            <div className='FamilyRelicOnStageBanner__column-container'>
                                <div className='FamilyRelicOnStageBanner__pic-two FamilyRelicOnStageBanner__pic-general'></div>
                                <div className='FamilyRelicOnStageBanner__pic-five FamilyRelicOnStageBanner__pic-general'></div>
                            </div>
                            <div className='FamilyRelicOnStageBanner__column-container'>
                                <div className='FamilyRelicOnStageBanner__pic-three FamilyRelicOnStageBanner__pic-general'></div>
                                <div className='FamilyRelicOnStageBanner__pic-four FamilyRelicOnStageBanner__pic-general'></div>
                            </div>
                        </>
                </div>
            </div>
            
            <NavContainer/>
        </section>
    )
}

export default FamilyRelicOnStageBanner