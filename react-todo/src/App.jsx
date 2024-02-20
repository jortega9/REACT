import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos = [
  {
    id: 1,
    title: "Go to the gym",
    completed: true
  },
  {
    id: 2,
    title: "Complete the React course",
    completed: false
  },
  {
    id: 3,
    title: "Watch a movie",
    completed: false
  },
  {
    id: 4,
    title: "Play Basketall",
    completed: false
  }
]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false
    }

    setTodos([...todos, newTodo]);
  }

  const removeTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id)); {/*actualiza el array a todos menos el que coincida el id*/}
  }

  const updateTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)); 
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
      switch (filter) {
        case "all":
          return todos;
        case "active":
          return todos.filter((todo) => !todo.completed);
        case "completed":
          return todos.filter((todo) => todo.completed);
        default:
          return todos;
      }
  }

  return (
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">

        <Header />

        <main className="container px-4 mx-auto mt-8">
          <TodoCreate createTodo={createTodo}/> 

          <TodoList todos={filteredTodos()} removeTodo= {removeTodo} updateTodo = {updateTodo}/>

          <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>
          
          <TodoFilter filter={filter} changeFilter={changeFilter}/>
        </main>

        <footer className="mt-8 text-center">Drag and drop to reorder</footer>
        
      </div>
  );

};

export default App;