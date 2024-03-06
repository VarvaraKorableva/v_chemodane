//

function OneImg({item, handleCardClick}) {

    function onHandleCardClick() {
        handleCardClick(item.img)
    }

    return(
        <>
        <img src={item.img} alt={item.name} className='schedule__img' onClick={onHandleCardClick}></img>
        </>
    )
}

export default OneImg;