/* All components on the dashboard page

Antony Wiegand, Mcmaster, 2026*/
import { GoStart,GoGuidebook } from "./Routes.jsx";
import { GetSensors } from "./Fetch.jsx"

export default function Dashboard() {
    /*
    Input: None
    1. Title: dashboard
    2. routes: start, guidebook
    3. grabs sensor data from today
    Output: None
    */
    return (
        <>
        <h1>DASHBOARD</h1>
        <GoStart />
        <GoGuidebook />
        <GetSensors />
        </>
    );
}
