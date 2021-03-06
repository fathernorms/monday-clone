import { useState, useEffect, useContext } from "react";

import TicketCard from "../components/ticketcard";
import axios from "axios";
import CategoriesContext from "../context";

const Dashboard = () => {
    const [tickets, setTickets] = useState(null);
    const { categories, setCategories } = useContext(CategoriesContext);
    const apiURL = "https://norms-monday-clone.herokuapp.com/tickets";

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(apiURL);

            const dataObject = response.data.data;

            const arrayKeys = Object.keys(dataObject);
            const arrayData = Object.keys(dataObject).map(
                (key) => dataObject[key]
            );
            const formattedArray = [];
            arrayKeys.forEach((key, index) => {
                const formattedData = { ...arrayData[index] };
                formattedData["documentId"] = key;
                formattedArray.push(formattedData);
            });
            setTickets(formattedArray);
        }
        fetchData();
    }, []);

    useEffect(() => {
        setCategories([...new Set(tickets?.map(({ category }) => category))]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tickets]);

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category)),
    ];

    const colors = [
        "rgb(255, 179, 186)",
        "rgb(255, 223, 186)",
        "rgb(255, 255, 186)",
        "rgb(186, 255, 201)",
        "rgb(186, 255, 255)",
    ];

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <p>
                TODO: Add User authentication, Develop and use own NodeJS REST
                API for database
            </p>
            <div className="ticket-container">
                {tickets &&
                    uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                        <div key={categoryIndex}>
                            <h3>{uniqueCategory}</h3>
                            {tickets
                                .filter(
                                    (ticket) =>
                                        ticket.category === uniqueCategory
                                )
                                .map((filteredTicket, _index) => (
                                    <TicketCard
                                        id={_index}
                                        color={
                                            colors[categoryIndex] || colors[0]
                                        }
                                        ticket={filteredTicket}
                                    />
                                ))}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Dashboard;
