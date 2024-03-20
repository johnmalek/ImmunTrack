import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

function LogoutPage(){
    const {setToken} = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        setToken();
        navigate("/", {replace: true});
    }

    setTimeout(() => {
        handleLogout();
      }, 3 * 1000);

    const pStyle = {
        marginTop: "25px",
        textAlign: "center",
        color: "green"
    }

    return (
        <p style={pStyle}>You have been logged out!</p>
    )
}

export default LogoutPage;