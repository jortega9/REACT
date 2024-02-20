const TodoComputed = ({computedItemsLeft, clearCompleted}) => {

    return(
        <section className="flex justify-between px-4 py-4 transition-all duration-1000 bg-white dark:bg-gray-800 rounded-b-md">
            <span className="text-gray-400 transition-all duration-1000 dark:text-gray-500">{computedItemsLeft} items left</span>
            <button className="text-gray-400 transition-all duration-1000 dark:text-gray-500" onClick={clearCompleted}>Clear Completed</button>
        </section>
    );

}

export default TodoComputed;