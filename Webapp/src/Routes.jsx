/* Creates Route entrances.

when clicked, routes you to their connected function.

Antony Wiegand, Mcmaster, 2026*/

import "./index.css"

export function GoStartgame ( { go }) {
    /*
    Input: None
    1. creates navigate variable using useNavigate function.
    Output: When clicked, takes you to start.
    */
    return (
    <img
    className="gostartgame"
    src="clickable/notclick/gostartdirt.png"
    onClick={() => go("/")}/>
  );
}
export function GoStartdashboard ( { go }) {
    /*
    Input: None
    1. creates navigate variable using useNavigate function.
    Output: When clicked, takes you to start.
    */
    return (
    <img
    className="gostartdashboard"
    src="clickable/notclick/gostartbanner.png"
    onClick={() => go("/")}/>
  );
}

export function GoGame ( { go } ) {
    /*
    Input: None
    1. creates navigate variable using useNavigate function.
    Output: When clicked, takes you to game.
    */
    return (
    <img
    className="gogame"
    src="clickable/notclick/gogame.png"
    onClick={() => go("/game")}/>
  );
}


export function GoDashboardstart ( { go } ) {
    /*
    Input: None
    1. creates navigate variable using useNavigate function.
    Output: When clicked, takes you to dashboard.
    */
    return (
        <img
        className="godashboardstart"
        src="clickable/notclick/godashboard.png"
        onClick={() => go("/dashboard")}
        />
  );
}

export function GoDashboardguide ( { go } ) {
    /*
    Input: None
    1. creates navigate variable using useNavigate function.
    Output: When clicked, takes you to dashboard.
    */
    return (
        <img
        className="godashboardguide"
        src="clickable/notclick/home.png"
        onClick={() => go("/dashboard")}
        />
  );
}


export function GoGuidebook ( { go } ) {
    /*
    Input: None
    1. creates navigate variable using useNavigate function.
    Output: When clicked, takes you to guidebook.
    */
    return (
            <img
    className="goguide"
    src="clickable/notclick/goguide.png"
    onClick={() => go("/guidebook")}/>
  );
}




