import makeElement from "../../utils/makeElement"

const createh1 = function (elementType='h1', label="ui heading", className="ui-heading-h1"){
     const template = `<${elementType} class="${className}"> ${label} </ ${elementType}>`
     const element = makeElement(template)

     return element
}

export {createh1}