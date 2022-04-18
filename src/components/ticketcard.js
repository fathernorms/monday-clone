import { Link } from "react-router-dom"
import AvatarDisplay from "./avatardisplay"
import StatusDisplay from "./statusdisplay"
import ProgressDisplay from "./progressdisplay"
import PriorityDisplay from "./prioritydisplay"
import DeleteBlock from "./deleteblock"

const TicketCard = ({color, ticket}) => {
    return (
    <div className="ticket-card">
        <Link to={`/ticket/${ticket.documentId}`} id="link">
            <div className="ticket-color"></div>
            <h3>{ticket.title}</h3>
            <AvatarDisplay ticket={ticket} />
            <StatusDisplay status={ticket.status}/>
            <PriorityDisplay/>
            <ProgressDisplay/>
        </Link>
        <DeleteBlock/>
    </div>
    )
};
export default TicketCard;
