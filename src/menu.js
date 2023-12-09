
const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = "Chicken Marsala with Wild Mushroom Risotto";
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = "Vegetarian Pad Thai";
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = "BBQ Pulled Pork Tacos with Pineapple Salsa";
    const menuItem4 = document.createElement('li');
    menuItem4.textContent = "Four Cheese Truffle Macaroni and Cheese";
    const menuItem5 = document.createElement('li');
    menuItem5.textContent = "Butternut Squash Risotto with Sage Brown Butter";
    const menuItem6 = document.createElement('li');
    menuItem6.textContent = "Ribeye Steak with Garlic Butter";
    const menuItem7 = document.createElement('li');
    menuItem7.textContent = "Lobster Tail with Drawn Butter";
    const menuItem8 = document.createElement('li');
    menuItem8.textContent = "Shrimp Scampi Linguine";

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem4);
    menuList.appendChild(menuItem5);
    menuList.appendChild(menuItem6);
    menuList.appendChild(menuItem7);
    menuList.appendChild(menuItem8);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
};

export default createMenuPage;