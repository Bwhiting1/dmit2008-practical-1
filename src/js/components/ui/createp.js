import makeElement from "../../utils/makeElement"

const createp = function (elementType='p', label="ui heading", className="ui-p"){
    const template = `<${elementType} class="${className}"> ${label} </ ${elementType}>`
    const element = makeElement(template)

    return element
}

export {createp}