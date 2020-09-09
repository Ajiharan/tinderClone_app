import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
const Header = ({ backButton }) => {
  let history = useHistory();

  const handleClick = () => {
    if (backButton === "/") {
      history.push("/");
    } else {
      history.push("/chat");
    }
  };
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={handleClick}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <IconButton>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tinder-clone-app-c8b4e.appspot.com/o/images%2Ftinder.png?alt=media&token=0609e4bd-3a1f-4980-8a92-bafeb6362108"
          alt="tinderlogo"
          className="header__logo"
        />{" "}
      </IconButton>
      <IconButton
        onClick={() => {
          history.push("/chat");
        }}
      >
        {" "}
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
