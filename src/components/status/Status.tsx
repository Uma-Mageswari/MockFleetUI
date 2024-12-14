import React from "react";
import Pill from "./Pill";
import { 
    assertProps, 
    alertProps, 
    taskProps,
    efficiencyProps
} from "./pillData"
import "./statusStyles.css";

const Status: React.FC = () => {
    return (
        <div id="status-container" className="container">
            <Pill {...assertProps} />
            <Pill {...alertProps} />
            <Pill {...taskProps} />
            <Pill {...efficiencyProps} />
        </div>
    );
};

export default Status;
