import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos"

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  // cada vez que cambien los todos se reenderiza
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = todo => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = id => {
    
    const newArray = todos.filter(todo => todo.id !== id );
    setTodos(newArray);
  }

  const updateTodo = id => {

    const newArray = todos.map((todo) => {
        if(todo.id === id){
          todo.state = !todo.state;
        }
        return todo;
    })
    setTodos(newArray);
  }

  const orderTodo = arrayTodos => {

    // -1 quiere decir que tiene mayor prioridad y 1 menor prioridad 0 es que no se cambia 
    return arrayTodos.sort((a,b) => {
      if(a.priority === b.priority) return 0
      if(a.priority) return -1
      if(!a.priority) return 1
    })
  }

   return (
    <div className="container mb-2">
      <h1 className="my-5">Formulario</h1>
      <Formulario addTodo= {addTodo}/>
      <Todos todos = {orderTodo(todos)} deleteTodo = {deleteTodo} updateTodo = {updateTodo}/>
    </div>

   );
}

export default App;