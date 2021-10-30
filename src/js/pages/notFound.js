import makeElement from "../utils/makeElement";
import {link} from "./../components/ui/link";



const notFound = function(){
    const page = document.createElement('div')
    const backToSaftey = link('Back to home' , '/')
    const template =`<header class="ui-header">
    <h1>Page Not Found</h1>
    <p>Oops looks like you found your way to a 404 page</p>
    </header>`;
    
    const pageHeader = makeElement(template)
    page.append(pageHeader)
    pageHeader.append(backToSaftey)

    return page
}

export {notFound}