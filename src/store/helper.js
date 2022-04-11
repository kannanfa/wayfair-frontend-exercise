export function createAction(type, ...argsNames){
    return function(...args){
        let action = {type };
        argsNames.forEach((value, index)=>{
            action[argsNames[index]] = args[index]
        })
        return action;
    }

}