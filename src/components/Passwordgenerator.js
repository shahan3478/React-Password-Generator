import React, { useState } from "react";
import './Style1.css'

function Passwordgenerator() {
  const [password, setpassword] = useState("");
  const [length, setlength] = useState(8);
  const [includeuppercase, setincludeuppercase] = useState(false);
  const [includespecialcharacter, setincludespecialcharacter] = useState(false);
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
  function generatepassword() {
    let characterpool = lowercase;
    if (includeuppercase) characterpool += uppercase;
    if (specialChars) characterpool += specialChars;
    let genpassword = "";
    for (let i = 0; i < length; i++) {
      let randomindex = Math.floor(Math.random() * characterpool.length);
      genpassword += characterpool[randomindex];
    }
    setpassword(genpassword);
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };
  return (
    <div className="main">
      <h2 className="gen1">Password Generator</h2>
      <div className="options">
        <label htmlFor="">
          Password Length
          <input
            type="number"
            min="4"
            max="40"
            value={length}
            onChange={(e) => setlength(Number(e.target.value))}
          />
        </label>

        <label htmlFor="">
          <input
            type="checkbox"
            value={includeuppercase}
            onChange={(e) => setincludeuppercase(!includeuppercase)}
          />
          Include Uppercase Letter
        </label>

        <label htmlFor="">
          <input
            type="checkbox"
            value={includespecialcharacter}
            onChange={() =>
              setincludespecialcharacter(!includespecialcharacter)
            }
          />
          Include special character
        </label>
      </div>

      <button className="btn" onClick={generatepassword}>
        Generate Password
      </button>
      {password && (
        <div className="password">
          <input type="text" value={password} readOnly />
          <button className="copy-btn" onClick={copyToClipboard}>
            Copy
          </button>
        </div>
      )}
    </div>
  );
}

export default Passwordgenerator;
