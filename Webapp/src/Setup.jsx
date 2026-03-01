/* Shown after clicking start. Explains how to connect your hub device to the app. 
    Once home wifi is connected, this page disappears.

Antony Wiegand, Mcmaster, 2026*/

import { GoStart, GoDashboard } from "./Routes.jsx"

export default function Setup() {
    /*
    Input: None
    1. Title: Setup
    2. routes: Start, Dashboard
    Output: None
    */
    return (
        <>
        <h1>SETUP</h1>
        <GoStart />
        <GoDashboard />
        </>
    );
}