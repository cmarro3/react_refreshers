import { useReducer } from "react";
import "./App.css";

export function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <>
    <label htmlFor="checkbox">{checked ? "checked": "not checked"}</label>
      <input id="checkbox" type={"checkbox"} value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}
