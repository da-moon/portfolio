// Entry point - Renders the App to DOM
import { render } from "preact";
import { App } from "./app.tsx";
import "./style.css";

const root = document.getElementById("app");

if (root) {
  render(<App />, root);
}
