import {v4 as uuidv4} from "uuid"
const keyGenerator = function(data=[]){
    const key = data.map(item=>{
        item.id = uuidv4().substr(0,8);
        return item
    })
    return key
}

//singleKey return
//return uuidv4().substr(0,8);

export {keyGenerator}