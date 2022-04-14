import React, { useState } from "react";
import Card from "./Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function NewCard() {
  const [jobText, setJobText] = useState("");
  const [nameText, setNameText] = useState("");
  const [srcText, setSrcText] = useState("");
  const [cardNew, setCardNew] = useState([]);

  let nameHandle = event => {
    const { value } = event.target;
    setNameText(value);
  };

  let jobHandle = event => {
    const { value } = event.target;
    setJobText(value);
  };

  let srcHandle = event => {
    const { value } = event.target;
    setSrcText(value);
  };

  const addCard = () => {
    if (jobText == "" && nameText == "" && srcText == "") return;
    let newCard = {
      jobText,
      nameText,
      srcText
    };

    setCardNew(prev => {
      return [...prev, newCard];
    });
    setJobText("");
    setNameText("");
    setSrcText("");
  };
  return (
    <div className="cardContainer">
      <br />
      <br />
      <TextField
        onChange={nameHandle}
        value={nameText}
        label="Name"
        type="search"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        onChange={jobHandle}
        value={jobText}
        label="Job"
        type="search"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        onChange={srcHandle}
        value={srcText}
        label="Image Source"
        type="search"
        variant="filled"
      />
      <br />
      <br />
      <Button onClick={addCard} variant="contained" color="success">
        Add Card
      </Button>
      <div className="card-container">
        {cardNew.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.nameText}
              job={item.jobText}
              src={item.srcText}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewCard;
