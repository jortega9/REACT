import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useEffect } from "react";

const initialTodos = JSON.parse(localStorage.getItem("todos")) || [
  {id:1, text: "hola 1"},
  {id:2, text: "hola 2"},
  {id:3, text: "hola 3"}
]

const App = () => {

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  const handleDragEnd = result => {
      if(!result.destination) return;
      const startIndex = result.source.index;
      const endIndex = result.destination.index;

      const copyArray = [...todos];
      const [reorderedItem] = copyArray.splice(startIndex, 1);
      
      copyArray.splice(endIndex, 0, reorderedItem);

      setTodos(copyArray);
  }  

  return (<DragDropContext onDragEnd={handleDragEnd}>
              <h1>Todo App</h1>

              <Droppable droppableId="todos">
                {
                  (droppableProvided) => (
                      <ul ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
                        {todos.map((todo,index) => (
                          <Draggable index={index} key ={todo.id} draggableId= {`${todo.id}`}>
                            {
                              (draggableProvided) => (
                                <li ref={draggableProvided.innerRef} {...draggableProvided.dragHandleProps} {...draggableProvided.draggableProps}>{todo.text}</li>
                              )                   
                            }
                          </Draggable>
                        ))}
                        {droppableProvided.placeholder}
                      </ul>
                  )
                }
              </Droppable>

          </DragDropContext>)
}

export default App;