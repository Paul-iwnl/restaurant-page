
const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter your Name';
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter your Address';
    form.appendChild(addressInput);

    const phoneNumberInput = document.createElement('input');
    phoneNumberInput.type = 'number';
    phoneNumberInput.placeholder = 'Enter your Phone Number';
    form.appendChild(phoneNumberInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'submit';
    form.appendChild(submitButton);

    pageContent.appendChild(form);
    content.appendChild(pageContent);
}

export default createContactPage;