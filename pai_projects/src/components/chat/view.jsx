import './view.css';
import { Message } from './message';

export function View() {
    return(
        <div className="chat_view_container">
            <Message text={"Blbalbal"}/>
            <Message text={"Blbalbal"}/>
            <Message sender text={"Blbalbal"}/>
            <Message text={"Blbalbal"}/>
        </div>
    )
}