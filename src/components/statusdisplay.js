const StatusDisplay = ({ status }) => {
    const getColor = (status) => {
        let color;
        switch (status) {
            case "done":
                color = "rgb(160,255,183)";
                break;
            case "in progress":
                color = "rgb(254,222,160)";
                break;
            case "stuck":
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
