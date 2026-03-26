/* Creates Route entrances.

when clicked, routes you to their connected function.

Antony Wiegand, Mcmaster, 2026*/

import { useNavigate } from "react-router-dom";

export function GoStart ( { go }) {
    /*
    Input: None
    1. creates navigate variable using useNavigate function.
    Output: When clicked, takes you to start.
    */
    return (
    <button onClick={() => go("/dashboard")}>
      Dashboard
    </button>
  );
}

export function GoGame ( { go } ) {
    /*
    Input: None
    1. creates navigate variable using useNavigate function.
    Output: When clicked, takes you to game.
    */
    return (
    <button onClick={() => go("/game")}>
      Game
    </button>
  );
}


export function GoDashboard () {
    /*
    Input: None
    1. creates navigate variable using useNavigate function.
    Output: When clicked, takes you to dashboard.
    */
    const navigate = useNavigate();
    return (
        <div className="godashboard" onClick={() => navigate("/dashboard")}>Dashboard</div>
  );
}

export function GoGuidebook () {
    /*
    Input: None
    1. creates navigate variable using useNavigate function.
    Output: When clicked, takes you to guidebook.
    */
    const navigate = useNavigate();
    return (
        <div className="goguidebook" onClick={() => navigate("/guidebook")}>Guidebook</div>
  );
}



