const inputField = document.querySelector('input')
const unorderList = document.querySelector('ul')

inputField.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        const listItem = inputField.value;
        const newList = document.createElement('li');
        const textField = document.createElement('input')
        textField.setAttribute('readonly' , true)
        textField.setAttribute('value', listItem)

        // Pencil
        const pencil = document.createElement('i');
        pencil.classList.add('fa-solid');
        pencil.classList.add('fa-pencil');

        // Delete
        const trash = document.createElement('i');
        trash.classList.add('fa-solid');
        trash.classList.add('fa-trash');

        newList.appendChild(textField);
        newList.appendChild(pencil);
        newList.appendChild(trash);
        unorderList.appendChild(newList)
        inputField.value = '';
    }
})


unorderList.addEventListener('click', function (event) {
    if (event.target.classList.contains('fa-pencil')) {
        event.target.classList.remove('fa-pencil');
        event.target.classList.add('fa-floppy-disk');
        event.target.closest('li').querySelector('input').removeAttribute('readonly')
    }

    else if (event.target.classList.contains('fa-floppy-disk')) {
        event.target.classList.add('fa-pencil');
        event.target.classList.remove('fa-floppy-disk');
    }

    else if (event.target.classList.contains('fa-trash')) {
        event.target.parentElement.remove();
    }
})

