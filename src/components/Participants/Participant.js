import './Participants.css' 

function Paticipant({item}) {
    return (
        <li className="paticipant-container">
           <h3 className="paticipant-companyName-title">{item.componyName}</h3> 
           {item.description.length? 
           <p className="paticipant-companyName-description">{item.description}</p>
           :
           <p>Описание не добавлено</p>
           }
           
        </li>
    )
}

export default Paticipant;