import makeElement from "../../utils/makeElement";

const todoContainer = function (){
    const template = ` 
<div class="todo-body">
<ul id="employees" class="employees">
</ul>
<div>
`

    return makeElement(template)
}

export {todoContainer}