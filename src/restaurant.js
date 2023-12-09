
const createRestaurantHomePage = () => {
    const content  = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create and append image element
    const image = document.createElement('img');
    image.src = '../images/restaurant.webp';
    image.height = '300';
    pageContent.appendChild(image);

    //create and append headline element 
    const headLine = document.createElement('h1');
    headLine.textContent = 'Welcome to our Restaurant !';
    pageContent.appendChild(headLine);

    //create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food in town. Come and taste it !!';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;