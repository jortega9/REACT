import IconCross from "./icons/IconCross"
import IconCheck from "./icons/IconCheck"
import React from "react";

const TodoItem = React.forwardRef(({todo, removeTodo, updateTodo, ...props}, ref) => {

    const {id, title, completed} = todo;
    return (    
                <article {...props} ref={ref} className="flex gap-4 border-b border-b-gray-400">
                    {/* <button className="flex-none inline-block w-5 h-5 border-2 rounded-full"></button> */}
                    <button 
                        className={`w-5 h-5 flex-none border-2 rounded-full ${
                            completed 
                                ? "grid bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 place-items-center" 
                                : "inline-block "}`} 
                        onClick={() => updateTodo(id)}
                    >
                        {completed && <IconCheck/>}
                    </button>
                    <p className={`text-gray-600 grow dark:text-gray-400 transition-all duration-1000 ${completed && "line-through"}`}>{title}</p>
                    <button className="flex-none" onClick={() => removeTodo(id)}><IconCross/></button>
                </article>
            );
});

export default TodoItem;