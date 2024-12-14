import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { headerColors } from "../theme/colors";
import LogoutIcon from "@mui/icons-material/Logout";
import { HeaderProps } from "./types";


const Header: React.FC<HeaderProps & { onLogout: () => void }> = ({ style, onLogout }) => {

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: headerColors.header_backgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 50,
        height: 50
      }}
      style={style}
    >
      <Toolbar
        variant='dense'
        disableGutters
        sx={{
          width: "100%",
          minHeight: 50,
          height: 50
        }}
      >
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          Mock Fleet UI
        </Typography>

        <IconButton
          color="inherit"
          aria-label="LogoutIcon"
          onClick={onLogout}
          sx={{ fill: headerColors.header_iconFill, ml: 1 }}
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
