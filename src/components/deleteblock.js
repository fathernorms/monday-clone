const DeleteBlock = () => {
    const deleteTicket = () => console.log("Delete ticket.");

    return (
        <div className="delete-block">
            <div className="delete-icon" onClick={deleteTicket}>
                ✕
            </div>
        </div>
    );
};
export default DeleteBlock;
