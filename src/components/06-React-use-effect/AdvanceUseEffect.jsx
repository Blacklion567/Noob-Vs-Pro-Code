import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function AdvanceUseEffect({ age }) {
  const [name, setName] = useState("");
  const [dark, setDark] = useState(false);
  const user = { age, name };
  const buttonStyle = {
    backgroundColor: dark ? "#000" : "initial",
    color: dark ? "#FFF" : "initial"
  };

  useEffect(() => {
    console.log(user);
  }, [name, age]);

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button
        style={buttonStyle}
        onClick={() => setDark(currDark => !currDark)}
      >
        Toggle Theme
      </button>
    </div>
  );
}

AdvanceUseEffect.propTypes = {
  age: PropTypes.number
};

export default AdvanceUseEffect;
