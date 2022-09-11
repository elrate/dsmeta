import icon from '../../assets/img/notification-icon.svg'
import './styles.css'
import axios from 'axios'
import {BASE_URL} from "../../utils/request"

type Props = {
    saleId: number;
}

function handClick(saleId : number) {
    axios(`${BASE_URL}/sales/${saleId}/notification`).then(response => {
        console.log("SUCESSO");
    })
}

function NotificationButton({saleId} : Props) {
    return(
        <div className="dsmeta-red-btn" onClick={() => handClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
  }
  
  export default NotificationButton
  