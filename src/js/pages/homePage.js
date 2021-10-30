import {createh2} from '../components/ui/createh2'
import {createh1} from './../components/ui/createh1'
import {createp} from './../components/ui/createp'
import {link} from './../components/ui/link'
const homePage = function (){


    const header = document.createElement('header')
    const h1 = createh1('h1','Brad Whitings')
    const h2 = createh2('h2', 'ToDo App')
    const p = createp('p', 'Manage your time better')
    const todopage = link('Get Started', '/todopage')
    header.append(h1)
    header.append(h2)
    header.append(p)
    header.append(todopage)

    return header
}

export {homePage}