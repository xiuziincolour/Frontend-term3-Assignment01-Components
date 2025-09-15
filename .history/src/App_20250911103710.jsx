import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Excerpt from "./Excerpt";

function App() {
    return (
        <div>
            <Excerpt
                tittle='React is hard'
                body='yes'
            />
            <Excerpt
                tittle='funny'
                body='no'
            />
            <Excerpt
                tittle='laugh'
                body='ok'
            />
        </div>
    );
}

export default App;
