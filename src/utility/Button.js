import React from "react";

const Button = ({buttonPress, buttonKey, audio}) => {

  return (
    <button id="button" onClick={buttonPress} className="py-4 px-6 bg-slate-50 cursor-pointer">
      {buttonKey}
      <audio className="clip" id={buttonKey} src={audio}></audio>
    </button>
  );

}

export default Button;