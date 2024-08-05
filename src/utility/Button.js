import React from "react";

const Button = ({buttonPress, buttonKey, audio}) => {
  return (
    <button id={buttonKey} onClick={buttonPress} className=" bg-slate-50 cursor-pointer min-w-16 min-h-16 h-full hover:bg-slate-400 shadow-lg shadow-slate-950">
      {buttonKey}
      <audio className="clip" src={audio}></audio>
    </button>
  );

}

export default Button;