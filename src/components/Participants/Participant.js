import './Participants.css' 


function Paticipant({item}) {

    console.log(item.imgLink)
    //const img = 'https://drive.google.com/file/d/1rYaSvn2CvQ0PZf9OC4mGx9NIjcyNtlOj/view'
    //const img = 'https://plus.unsplash.com/premium_photo-1709993969997-6885e7466468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8'
    return (
        <li className="paticipant-container">
           <img className="paticipant-img" src={item.imgLink} alt={`Логотип компании ${item.companyName}`}></img>
           <h3 className="paticipant-companyName-title">{item.companyName}</h3> 
           {item.description.length? 
           <p className="paticipant-companyName-description">{item.description}</p>
           :
           <p>Описание не добавлено</p>
           }
           
        </li>
    )
}

export default Paticipant;