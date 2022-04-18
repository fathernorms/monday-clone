import TicketCard from "../components/ticketcard";

const Dashboard = () => {
    const tickets = [
        {
            category: "Q1 2022",
            color: "red",
            title: "Testing",
            owner: "Norms",
            avatar: "https://cutewallpaper.org/21/luffy-profile-picture/luffy-y-nicon-robin-one-piece-minimalist-Forum-Avatar-.png",
            status: "done",
            priority: 5,
            progress: 40,
            description: "Testing display",
            timestamp: "2022-02-11T07:32:13+0000",
        },
        {
            category: "Q1 2022",
            color: "red",
            title: "Testing Testing",
            owner: "Norms",
            avatar: "https://cutewallpaper.org/21/luffy-profile-picture/luffy-y-nicon-robin-one-piece-minimalist-Forum-Avatar-.png",
            status: "in progress",
            priority: 5,
            progress: 70,
            description: "Hello world!",
            timestamp: "2022-02-11T07:32:13+0000",
        },
        {
            category: "Q2 2022",
            color: "blue",
            title: "Testing",
            owner: "Norms",
            avatar: "https://cutewallpaper.org/21/luffy-profile-picture/luffy-y-nicon-robin-one-piece-minimalist-Forum-Avatar-.png",
            status: "done",
            priority: 2,
            progress: 40,
            description: "Testing display",
            timestamp: "2022-02-11T07:32:13+0000",
        },
    ];

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category)),
    ];

    console.log(uniqueCategories);

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                { tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        { tickets.filter(ticket => ticket.category === uniqueCategory).map((filteredTicket, _index) => (
                            < TicketCard
                                id = {_index}
                                color = {filteredTicket.color}
                                ticket={filteredTicket}

                            />
                        ))
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Dashboard;
