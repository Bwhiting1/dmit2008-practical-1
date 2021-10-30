import makeElement from "../../utils/makeElement";
import link from "../ui/link"

const button = function (label="ui button", className="ui-button"){
     const template = `<button class="${className}">${label}</button>`
     const element = makeElement(template);

     return element

}

export default button
