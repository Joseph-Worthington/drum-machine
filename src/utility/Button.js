import React from "react";

const Button = ({buttonPress, buttonKey, audio}) => {
  const id = `button-${buttonKey}`
  return (
    <button id={id} onClick={buttonPress} className=" bg-slate-50 cursor-pointer min-w-16 h-full hover:bg-slate-400">
      {buttonKey}
      <audio className="clip" id={buttonKey} src={audio}></audio>
    </button>
  );

}

export default Button;