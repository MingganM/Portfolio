import "./style.scss";

// JS FILES / FUNCTIONS :
import selectors from "./scripts/selector";
import { displayNav } from "./scripts/nav";
import './scripts/projectHandler';

// navbar event listener
selectors.navBtn.addEventListener('click', displayNav);
// dynamic age
let now = new Date();
let DOB = new Date("2001,11,29");
let ageYear = now.getFullYear() - DOB.getFullYear();
let ageMonth = now.getMonth() - DOB.getMonth();
let ageDay = now.getDate() - DOB.getDate();
selectors.age.textContent = ageMonth <= 0 && ageDay <= 0 ? ageYear - 1 : ageYear ;