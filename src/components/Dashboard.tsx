import React from "react";
import Status from "./status/Status"
import { HeaderProps } from "./types";

const Dashboard: React.FC<HeaderProps> = () => {

  return (
    <div
      className="Dashboard"
      style={{
        backgroundColor: "#eaeaea",
        position: "absolute",
        top: "50px", // Space for the header
        bottom: "36px", // Space for the footer
        left: 0,
        right: 0,
        overflowY: "auto",
      }}
    >
      <Status />
    </div>
  );
};

export default Dashboard;
