/**
 * Created by choyt on 17-2-26.
 */
let nextId = 0;
export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        id:nextId ++,
        text
    }
}

export function toggleTodo(id){
    return {
        type:'TOGGLE_TODO',
        id:id
    }
}

export function deleteTodo(id){
    return {
        type:'DEL_TODO',
        id:id
    }
}

export function deleteAll(){
    nextId = 0;
    return {
        type:'DEL_ALL'
    }
}