import { useState, useEffect } from "react";
import RocketIcon from "@mui/icons-material/Rocket";
import { Typography } from "@mui/material";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return function () {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 2300 ? setVisible(true) : setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return visible ? (
    <button
      style={{
        position: "fixed",
        right: "30px",
        bottom: "30px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
      }}
      onClick={scrollToTop}
    >
      <RocketIcon fontSize="large" color="warning" />
      <Typography>Go top</Typography>
    </button>
  ) : (
    <></>
  );
};

export default ScrollButton;
