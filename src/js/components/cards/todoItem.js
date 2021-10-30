import makeElement from "../../utils/makeElement";

const todoItem = function ({id,title,category,description,isComplete}) {
    const template = 
    `
    <li class="todo-item ${category}" data-key="${id}">
    <h3>${title}<h3>
    <p>${category}<p>
    <p>${description}<p>
    <p>${isComplete ? 'Completed' : ''}<p>
    <div class="edit-delete-buttons">
    <p><button class="edit">Edit</button></p>
    <p><button class="delete">Delete</button></p>
    </div>
    </li>
    
    `
    const element = makeElement(template);

    return element
}

export {todoItem}
