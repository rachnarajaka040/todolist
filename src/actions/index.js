export const addTodo=(data)=>{
    return{
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const deletTodo=(id)=>{
    return{
        type:"DELETE_TODO",
        id
    }
}

export const removeTodo=(id)=>{
    return{
        type:"REMOVE_TODO",
        id
    }
}