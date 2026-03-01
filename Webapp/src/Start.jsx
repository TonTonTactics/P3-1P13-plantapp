{/* Start Page

Antony Wiegand, Mcmaster, 2026*/}

import { GoSetup, GoGame } from "./Routes.jsx"

export default function Start() {
  /*
    Input: None
    1. Title: Start
    2. routes: setup, game
    Output: None
    */

  return (
    <>
      <h1>START</h1>
      <GoSetup />
      <GoGame />
    </>
  );
}