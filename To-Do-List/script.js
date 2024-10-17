const inputField = document.querySelector('input')
const container = document.querySelector('.container')
const body = document.querySelector('body')
inputField.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        const listItem = inputField.value;
        const newList = document.createElement('li');
        newList.innerText = listItem;
        container.appendChild(newList)
        inputField.value = '';
    }
})