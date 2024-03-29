import React from "react";
import "./SwipeButton.css";
import ReplyIcon from "@material-ui/icons/Reply";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import StarRateIcon from "@material-ui/icons/StarRate";
import { IconButton } from "@material-ui/core";
const SwipeButton = () => {
  return (
    <div className="swipeButton">
      <IconButton className="swipeButton__repeat">
        {" "}
        <ReplyIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__star">
        {" "}
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__right">
        {" "}
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__lightning">
        {" "}
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButton;
