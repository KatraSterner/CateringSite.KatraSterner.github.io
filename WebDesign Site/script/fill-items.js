
import Item from "./item.js";

const getItems = async () => {

    const response = await fetch("../json/menu.json");
    const data = await response.json();

    let menu = [];
    data.items.forEach((item) => {
        menu.push(
            new Item(
                item.image,
                item.name,
                item.list[0],
                item.list[1],
                item.list[2],
                item.list[3]
            )
        )
    });
    return menu;
}


const outputMenu = (menu) => {

    const menuItems = document.querySelector(".menu-items");

    menu.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.className = ".menu-item"
        menuItem.innerHTML = `
            <div class="menu-card">
                <img src="${item.image}">
                <p class="item-name">${item.name}</p>
                <ul>
                    <li>${item.list[0]}</li>
                    <li>${item.list[1]}</li>
                    <li>${item.list[2]}</li>
                    <li>${item.list[3]}</li>
                </ul>
            </div>
        `;
        menuItems.appendChild(menuItem);
    });
}

const main = async () => {
    const menu = await getItems();
    outputMenu(menu)
}

main();