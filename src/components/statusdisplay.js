const StatusDisplay = ({ status }) => {
    const getColor = (status) => {
        let color;
        switch (status) {
            case "Done":
                color = "rgb(160,255,183)";
                break;
            case "Working on it":
                color = "rgb(254,222,160)";
                break;
            case "Stuck":
                color = "rgb(253,228,236)";
                break;
            default:
                color = "rgb(254,248,239)";
        }
        return color;
    };
    return (
        <div
            className="status-display"
            style={{ backgroundColor: getColor(status) }}
        >
            {status}
        </div>
    );
};
export default StatusDisplay;
