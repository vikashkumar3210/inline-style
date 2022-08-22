//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
const d = new Date();
const x = d.getHours();
const customStyle = {
  color: "white"
};
let y = "";
if (x >= 0 && x <= 12) {
  y = "morning";
  cunstomStyle.color = "red";
} else if (x > 12 && x <= 18) {
  y = "afternoon";
  customStyle.color = "green";
} else {
  y = "night";
  customStyle.color = "blue";
}
ReactDOM.render(
  <h1 style={customStyle}>Good {y}</h1>,
  document.getElementById("root")
);
