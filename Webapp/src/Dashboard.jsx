{/* All components on the dashboard page

Antony Wiegand, Mcmaster, 2026*/}
import { GoStart,GoGuidebook } from "./Routes.jsx";
import { GetSensors } from "./Fetch.jsx"

export default function Dashboard() {
    return (
        <>
        <h1>DASHBOARD</h1>
        <GoStart />
        <GoGuidebook />
        <GetSensors />
        </>
    );
}
