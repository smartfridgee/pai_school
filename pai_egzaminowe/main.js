let shopping_list = document.getElementById('shopping');
let shopping_input = document.getElementById('shopping_input');

const addNewShoppingItem = () => {
    let li = document.createElement('li');
    li.innerHTML = `${shopping_input.value}<button onclick="this.parentElement.remove();" style="margin-left: 1em;">Delete</button>`
    shopping_list.appendChild(li);
}

let box_container = document.getElementById('box_container');
let joiner_input = document.getElementById('joiner_input');

const addNewBox = () => {
    let div = document.createElement('div');
    div.classList.add('box');
    div.innerHTML = `<p class="join_text">${joiner_input.value}</p><input type="checkbox" class="check">`;
    box_container.appendChild(div);
    updateCounter();
}

let CURRENT_BOX_REMOVAL_STATE = "HIDDEN";

const removeBoxes = () => {
    let checkboxes = document.querySelectorAll('.check');
    if(CURRENT_BOX_REMOVAL_STATE === "HIDDEN") {
        checkboxes.forEach(element => {
            element.classList.add('visible');
        });
        CURRENT_BOX_REMOVAL_STATE = "VISIBLE";
    }
    else {
        document.querySelectorAll('.check:checked').forEach(element => {
            element.parentElement.remove();
        })
        checkboxes = document.querySelectorAll('.check');
        checkboxes.forEach(element => {
            element.classList.remove('visible');
        });
        CURRENT_BOX_REMOVAL_STATE = "HIDDEN";
    }
    updateCounter();
}

let elements_count = document.getElementById('elements_count');
let chars_count = document.getElementById('chars_count');

const updateCounter = () => {
    elements_count.textContent = `Elementów: ${box_container.children.length}`;
    let chars = 0;
    document.querySelectorAll('.join_text').forEach(el => {
        chars += el.textContent.length;
    })
    chars_count.textContent = `Znaków: ${chars}`;
}

let styles = [
    "style1", "style2", "style3", "style4", "style5", "style6", "style7"
]

let toBeRNG = document.querySelector('.view').children;

const rngStyles = () => {
    [...toBeRNG].forEach(el => {
        el.className = '';
        el.classList.add(styles[Math.floor(Math.random() * 7)]);
    })
}