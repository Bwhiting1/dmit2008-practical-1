import {Router} from './routes/router';
import {dataFetcher} from './utils/datafetcher'
import {keyGenerator} from './utils/keys';
import {createStore, getStore} from "./redux/store";

const app = document.querySelector("#app");

const onAppInit =   async function(e){

    const todo =  await dataFetcher('./data/todo.json')

    createStore(keyGenerator(todo))
    Router(window.location.pathname)
}


window.addEventListener('load', onAppInit)




