import React from "react";

const Button = ({buttonPress, buttonKey, audio}) => {
  let buttonId = `button-${buttonKey}`
  return (
    <button id={buttonId} onClick={buttonPress} className="drum-pad bg-slate-50 cursor-pointer min-w-16 min-h-16 h-full hover:bg-slate-400 shadow-lg shadow-slate-950 active:bg-red-900">
      {buttonKey}
      <audio id={buttonKey} className="clip" src={audio}></audio>
    </button>
  );

}

export default Button;