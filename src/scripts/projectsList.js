const projects = [
    {
        name: "FasTyper",
        category: "Browser Game",
        liveDemo: "https://fastyper.netlify.app/",
        projectCode: "https://github.com/MingganM/FasTyper",
        img: "./images/Fastyper.jpg",
        about: "FasTyper is browser game. Random keys appear and user has to press them, so the score keeps increasing. It has responsive design with a simple and nice UI/UX. The app has 3 sections: Home, Guide and Play. The navigation system is made with window.hashchange event. The Guide section explains the rules of the game.",
        toolsUsed: ["HTML", "CSS", "JavaScript", "Webpack", "Babel"]
    },
    {
        name: "PC SHOP",
        category: "Ecommerce Website",
        liveDemo: "https://pcshop-m.netlify.app/",
        projectCode: "https://github.com/MingganM/PCShop",
        img: "./images/pcshop.jpg",
        about: "Made with React, PC SHOP is an imaginary Ecommerce website that sells computer parts. It has Home, Products, Cart and Get Started sections. It is responsive and fast. It uses smaller versions of product images normally and large version of image in single product section, making the website load faster. It has filters that sort items by price: low to high or high to low.",
        toolsUsed: ["HTML", "CSS", "JavaScript", "React", "Cotext API"]
    },
    {
        name: "Web Builder",
        category: "Website Builder",
        liveDemo: "https://webbuilder.netlify.app/",
        projectCode: "https://github.com/MingganM/webbuilder",
        img: "./images/webbuilder.jpg",
        about: "A GUI for HTML and CSS. Uses React's virtual DOM to maximize the performance. Easy enough to understand at the first glance and it can produce code for HTML and CSS. The rest is explained in the Docs section.",
        toolsUsed: ["HTML", "SCSS", "JavaScript", "React", "Context API"]
    },
    {
        name: "Dota 2 Infos",
        category: "Website",
        liveDemo: "https://dota2infos.netlify.app/",
        projectCode: "https://github.com/MingganM/DotaInfos/",
        img: "./images/dota2infos.jpg",
        about: "Simply fetches data from official DOTA 2 API, displays it and allows users to select particular hero information via binary search. The data is about each and every hero such as, roles, primary attribute, attack type and heath etc.",
        toolsUsed: ["HTML", "SCSS", "JavaScript", "Webpack", "Babel"]
    },
    {
        name: "Cheap Gaming Deals",
        category: "Website",
        liveDemo: "https://cheapgamingdeals.netlify.app/",
        projectCode: "https://github.com/MingganM/CheapGamingDeals",
        img: "./images/cheapgamingdeals.jpg",
        about: `A web app made with CheapShark just like "isthereanydeal.com" showing if any game is on sale. In search section, search for any game and get multiple deals from multiple stores.`,
        toolsUsed: ["HTML", "SCSS", "React", "Redux", "axios"]
    },
]
export default projects;