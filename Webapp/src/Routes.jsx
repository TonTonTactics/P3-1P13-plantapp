
import { useNavigate } from "react-router-dom";

export function GoStart () {
    const navigate = useNavigate();
    return (
        <div className="gostart" onClick={() => navigate("/")}>Start</div>
  );
}

export function GoSetup () {
    const navigate = useNavigate();
    return (
        <div className="gosetup" onClick={() => navigate("/setup")}>Setup</div>
  );
}

export function GoGame () {
    const navigate = useNavigate();
    return (
        <div className="gogame" onClick={() => navigate("/game")}>Game</div>
  );
}

export function GoDashboard () {
    const navigate = useNavigate();
    return (
        <div className="godashboard" onClick={() => navigate("/dashboard")}>Dashboard</div>
  );
}

export function GoGuidebook () {
    const navigate = useNavigate();
    return (
        <div className="goguidebook" onClick={() => navigate("/guidebook")}>Guidebook</div>
  );
}



