import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import Logo from "../../assets/images/logo.png";
import ChatIcon from "@mui/icons-material/Chat";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img className="header__logo" src={Logo} alt="" />

      <IconButton>
        <ChatIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
