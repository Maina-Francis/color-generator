import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ index, weight, rgb }) => {
  //   console.log(props);
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  const hex = rgbToHex(...rgb);

  //   clear 'copied to clipboard' alert message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
