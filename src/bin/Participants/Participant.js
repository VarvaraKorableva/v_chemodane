/*import './Participants.css' 
import {Link} from 'react-router-dom'


function Paticipant({item}) {

    return (
        <Link to={`/participant/${item.id}`} className="paticipant-container">

           {item.imgLink === ''?
            <p className="paticipant-img">Участник скоро добавит свой логотип</p>
            :
            <img className="paticipant-img" src={item.imgLink} alt={`Логотип компании ${item.companyName}`}></img>
           }
            
           {item.description.length? 
           <p className="paticipant-companyName-description">{item.description}</p>
           :
           <p>Описание не добавлено</p>
           }
           
        </Link>
    )
}

export default Paticipant;*/

//<h3 className="paticipant-companyName-title">{item.companyName}</h3>