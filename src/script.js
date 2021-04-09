import "./style.scss";

// JS FILES / FUNCTIONS :
import "./icons/all";
import selectors from "./scripts/selector";
import { displayNav } from "./scripts/nav";
import './scripts/projectHandler';

// navbar event listener
selectors.navBtn.addEventListener('click', displayNav);