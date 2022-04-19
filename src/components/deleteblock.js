import axios from "axios";

const DeleteBlock = ({ documentId }) => {
    const apiURL = "https://norms-monday-clone.herokuapp.com/tickets";
    const deleteTicket = async () => {
        const response = await axios.delete(`${apiURL}/${documentId}`);
        const success = response.status === 200;
        if (success) {
            window.location.reload();
        }
    };

    return (
        <div className="delete-block">
            <div className="delete-icon" onClick={deleteTicket}>
                ✕
            </div>
        </div>
    );
};
export default DeleteBlock;
