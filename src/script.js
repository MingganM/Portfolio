import "./style.scss";

// JS FILES / FUNCTIONS :
import selectors from "./scripts/selector";
import { displayNav } from "./scripts/nav";

// navbar event listener
selectors.navBtn.addEventListener('click', displayNav);