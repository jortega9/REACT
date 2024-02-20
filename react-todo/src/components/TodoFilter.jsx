const TodoFilter = ({filter, changeFilter}) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 p-4 bg-white rounded-md">
                <button className= {`${filter === "all" ? "text-blue-600" : "hover:text-blue-500"}`} onClick={() => changeFilter("all")}>All</button>
                <button className= {`${filter === "active" ? "text-blue-600" : "hover:text-blue-500"}`} onClick={() => changeFilter("active")}>Active</button>
                <button className= {`${filter === "completed" ? "text-blue-600" : "hover:text-blue-500"}`} onClick={() => changeFilter("completed")}>Completed</button>
            </div>
        </section>
    );
}

export default TodoFilter;