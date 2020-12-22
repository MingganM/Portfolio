import selectors from "./selector";

export function displayNav(){
    selectors.mobileNav.classList.toggle('showNav');
}