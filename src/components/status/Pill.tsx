import React from "react";
import { Box, Typography } from "@mui/material";
import "./statusStyles.css";
import { PillProps } from "../types";

const Pill: React.FC<PillProps> = ({
    boxId = "default-box-id", // Default value
    icon,
    iconImgId,
    iconImgAlt,
    pillType,
    pillValue,
    pillValueId,
}) => {
    return (
        <Box id={boxId as string} className="status-pill">
            <div id="img-container">
                <img id={iconImgId as string} src={icon as string} alt={iconImgAlt as string} />
            </div>
            <div id="data-container">
                <Typography id="pill-type" variant="h6" sx={{fontWeight: 500}}>
                    {pillType}
                </Typography>
                <Typography id={pillValueId as string} variant="h4" sx={{fontWeight: 400}}>
                    {pillValue}
                </Typography>
            </div>
        </Box>
    );
};

export default Pill;