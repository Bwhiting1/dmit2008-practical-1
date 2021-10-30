import makeElement from "../../utils/makeElement"

const createh2 = function (elementType='h2', label="ui heading", className="ui-heading-h2"){
    const template = `<${elementType} class="${className}"> ${label} </ ${elementType}>`
    const element = makeElement(template)  
    
    return element
}

export {createh2}