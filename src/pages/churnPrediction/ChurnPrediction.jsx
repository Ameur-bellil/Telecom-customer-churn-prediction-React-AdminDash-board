import React from "react";
import "./ChurnPrediction.css";
import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ChurnPrediction() {
  const [contract, setContract] = useState("");
  const [internetservice, setInternetService] = useState("");
  const [monthlycharges, setMonthlyCharges] = useState(0);
  const [onlinebackup, setOnlineBackup] = useState("");
  const [onlinesecurity, setOnlineSecurity] = useState("");
  const [techsupport, setTechSupport] = useState("");
  const [tenure, setTenure] = useState(0);
  const [totalcharges, setTotalCharges] = useState(0);
  const [result, setResult] = useState("");
  const [proba, setProba] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const handleclick = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("contract", contract);
    formdata.append("internetservice", internetservice);
    formdata.append("monthlycharges", monthlycharges);
    formdata.append("onlinebackup", onlinebackup);
    formdata.append("onlinesecurity", onlinesecurity);
    formdata.append("techsupport", techsupport);
    formdata.append("tenure", tenure);
    formdata.append("totalcharges", totalcharges);
    console.log(formdata);
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:5000/predict", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setResult(result.predict);
        setProba(result.proba);
        setShowResult(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="churn">
      <div className="containerChurn">
        <div className="featuredTitle">Churn Prediction</div>
        <Box
          className="box"
          component="form"
          onSubmit={handleclick}
          sx={{
            "& .MuiTextField-root": { m: 2 },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="formItem">
            <TextField
              fullWidth
              required
              id="standard-required"
              label="Contract"
              variant="standard"
              onChange={(e) => setContract(e.target.value)}
            />
          </div>
          <div className="formItem">
            <TextField
              required
              fullWidth
              id="standard-required"
              label="Online Security"
              variant="standard"
              onChange={(e) => setOnlineSecurity(e.target.value)}
            />
          </div>
          <div className="formItem">
            <TextField
              required
              fullWidth
              id="standard-required"
              label="Tech Support"
              variant="standard"
              onChange={(e) => setTechSupport(e.target.value)}
            />
          </div>

          <div className="formItem">
            <TextField
              required
              fullWidth
              id="standard-required"
              label="Internet Service"
              variant="standard"
              onChange={(e) => setInternetService(e.target.value)}
            />
          </div>

          <div className="formItem">
            <TextField
              required
              fullWidth
              id="standard-required"
              label="Online Backup"
              variant="standard"
              onChange={(e) => setOnlineBackup(e.target.value)}
            />
          </div>

          <div className="formItem">
            <TextField
              required
              fullWidth
              id="standard-required"
              label="Tenure"
              type="number"
              variant="standard"
              onChange={(e) => setTenure(e.target.value)}
            />
          </div>

          <div className="formItem">
            <TextField
              required
              fullWidth
              id="standard-required"
              label="Monthly Charges"
              type="number"
              variant="standard"
              onChange={(e) => setMonthlyCharges(e.target.value)}
            />
          </div>

          <div className="formItem">
            <TextField
              required
              fullWidth
              id="standard-required"
              label="TotalCharges"
              type="number"
              variant="standard"
              onChange={(e) => setTotalCharges(e.target.value)}
            />
          </div>
          <button className="predictButton" onClick={handleclick}>
            <span className="predict">Predict</span>
          </button>
          {showResult && (
            <div className="result">
              <span className="resultTitle">Result: {result}</span> <br />
              <span className="resultTitle">
                Pourcentage:{proba.toFixed(2) * 100}%
              </span>
            </div>
          )}
        </Box>
      </div>
    </div>
  );
}
