// import logo from "../images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    return (
        <nav>
            {/* <div className="logo-container">
            </div> */}
            <div className="controls-container">
                <div className="icon" onClick={() => navigate("/")}>
                    Home
                </div>
                <div className="icon" onClick={() => navigate("/ticket")}>
                    Ticket
                </div>
            </div>
        </nav>
    );
};
export default Nav;
