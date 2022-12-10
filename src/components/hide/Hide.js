import React from "react";
import "./hide.css";

function Hide({ isHide, hideElements }) {
  const handleHideElements = (e) => {
    hideElements(e.target.checked);
  };

  return (
    <label>
      <input type="checkbox" checked={isHide} onChange={handleHideElements} />
      <span>Hide completed</span>
    </label>
  );
}

export default Hide;
