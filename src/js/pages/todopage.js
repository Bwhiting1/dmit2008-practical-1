import {createh1} from './../components/ui/createh1'
import {createp} from './../components/ui/createp'
import {link} from './../components/ui/link'
import { getStore } from './../redux/store'
import {todoContainer} from '../components/cards/todoContainer'
import { todoItem } from '../components/cards/todoItem'

const todopage = function ()
{
    const header = document.createElement('header')
    const h1 = createh1('h1','To Do Page')
    const p = createp('p', 'Manage your time better')
    const home = link('Back to home' , '/')
    const container = todoContainer();
    const todoData = getStore()
    const newBtn = link('Create New' , '/newPage')
    header.append(h1)
    header.append(p)
    header.append(home)
    console.log(container)
    console.log(todoData)
    console.log(todoItem)
    if(todoData.length !== 0){
        const elements = todoData.map(todo=>{
            return todoItem(todo)
        })
        const ul = container
        elements.forEach(elm => {
            ul.append(elm)
        });
        header.append(container)
    }
    header.append(newBtn)
    
    
    return header
}

export {todopage}