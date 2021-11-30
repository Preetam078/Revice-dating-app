import { IconButton } from "@mui/material";
import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import "./SwipeButton.css";

function SwipeButton() {
  return (
    <div className="swipeButton">
      <IconButton>
        <ReplayIcon fontSize="large" className="swipeButton__replay" />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" className="swipeButton__close" />
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize="large" className="swipeButton__start" />
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="large" className="swipeButton__love" />
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize="large" className="swipeButton__light" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
