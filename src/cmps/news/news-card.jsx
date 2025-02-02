
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { useHistory } from 'react-router-dom';




export function Card({item,RandomInt,labels}) {

 

   function handleClick() {
     window.location.href = item.web_url;
   }

   const chageDate = (date) => {
      const newdate = date.split('T');
      return `${newdate[0]} ${newdate[1].substring(0,5)}`
   }

   const changeLabel = (types) => {

       return types.some(type => 
         type.value.includes("Coronavirus")
       ) ?  'Covid19' : types.some(type => 
         type.value.includes("Health")
       ) ? 'General Health' : labels[2]
   }


 
     return  <div onClick={handleClick} className="news-card">
        <div className='label'>{changeLabel(item.keywords)}</div>
       <div className="card-img-continer">
          <div className='imge'></div>
       </div>
       <div className="card-info">
           <h5>{item.headline.main}</h5>
        <div className="flex card-info-user flex ">
            <div className="img-continer">
          <img src={`https://randomuser.me/api/portraits/men/${RandomInt}.jpg`}/>
           </div>
           <p>{item.byline.original.substring(0,19)}</p>
           <div className="flex">
           <div className="user-icon"><AccessTimeFilledIcon/></div>
           <p> {chageDate(item.pub_date)}</p>
           </div>
        </div>
       </div>
    </div>


}

