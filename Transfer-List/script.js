const container = document.querySelector('.container');
const leftList = document.querySelector('.left-list');
const anglesLeft = document.querySelector('.fa-angle-left');
const doubleLeft = document.querySelector('.fa-angles-left');
const doubleRight = document.querySelector('.fa-angles-right');
const angleRight = document.querySelector('.fa-angle-right ');
const rightList = document.querySelector('.right-list');

container.addEventListener('click' , function(event) {
    if(event.target.classList.contains('fa-angles-left')){
        let listItems = document.querySelectorAll('.right-check-item');
        listItems.forEach((item) => {
            item.classList.remove('right-check-item')
            item.classList.add('left-check-item')
            leftList.appendChild(item)
        })
    }

    else if(event.target.classList.contains('fa-angles-right')){
        let listItems = document.querySelectorAll('.left-check-item')
        listItems.forEach((item) => {
            item.classList.remove('left-check-item')
            item.classList.add('right-check-item')
            rightList.appendChild(item)
        })
    }

    else if(event.target.classList.contains('fa-angle-left')){
        let listItems = document.querySelectorAll('.right-list input[type = "checkbox"]:checked')
        listItems.forEach((item) => {
            item.classList.remove('right-check-item')
            item.classList.add('left-check-item')
            item.checked = false;
            leftList.appendChild(item.parentElement)
        })
    }

    else if(event.target.classList.contains('fa-angle-right')){
        let listItems = document.querySelectorAll('.left-list input[type = "checkbox"]:checked')
        listItems.forEach((item) => {
            item.classList.remove('left-check-item')
            item.classList.add('right-check-item')
            item.checked = false;
            rightList.appendChild(item.parentElement)
        })
    }
})
