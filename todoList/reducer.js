import storage from "./storage.js";

const init={
    todos:storage.get(),
    filter:'all',
    editIndex:null,
    filters:{
        all:()=>true,
        completed:todo=>todo.completed,
        active:todo=>!todo.completed

    }

};

const actions={
    add({todos},title){
        if(title){
            todos.push({title:title,completed:false});
            storage.set(todos);
        }
    },
    toggleAll({todos},completed){
        todos.forEach(todo=>todo.completed=completed);
        storage.set(todos);
    },
    toggle({todos},index){
        todos[index].completed=!todos[index].completed;
        storage.set(todos);
    },
    switchFilter(state,filter){
        state.filter=filter;
    },
    destroy({todos},index){
        todos.splice(index,1);
        storage.set(todos);
    },
    clearCompleted(state){
        state.todos=state.todos.filter(state.filters.active);
    },
    startEdit(state,index){
        state.editIndex=index;
    },
    endEdit(state,title){
        if(title){
            state.todos[state.editIndex].title=title;
        }else{
            state.todos.splice(state.editIndex,1);
        }
        state.editIndex=null;
        storage.set(state.todos);
    },
    cancelEdit(state){
        state.editIndex=null;
    }
}

export default function reducer(state=init,action,args){
    actions[action] && actions[action](state,...args);
    return state;
}