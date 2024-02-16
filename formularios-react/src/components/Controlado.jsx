import { useState } from "react"

const Controlado = () => {

    const [todo, setTodo] = useState({
        title: 'Todo 1',
        description: 'Description 1',
        state: "pendiente",
        priority: true
    })

    const {title, description, state, priority} = todo
    const [error, setError] = useState(false);

    const handleChange = (e) => {

        const {name, type,checked, value} = e.target

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value
        })
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(!title.trim() || !description.trim()){
            console.log("campos vacíos");
            setError(true);
            return;
        }
        else{
            setError(false);
        }
    }

    const PintarError = () => (
        <div className= "alert alert-danger">Todos los campos obligatorios</div>
    );

    return (
        <div className="container mt-2">
            <h2>Formulario</h2>
            {error && <PintarError />}
            <form onSubmit={handleSubmit}>
                <input 
                    type = "text"
                    placeholder="Ingrese Todo" 
                    className= "form-control mb-2"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
                <textarea
                    className="form-control mb-2"
                    placeholder="Ingrese descripción"
                    name="description"
                    value={description}
                    onChange={handleChange}
                />
                <div className="form-check mb-2">
                    <input
                        type="checkbox"
                        name="priority"
                        className="form-check-input"
                        id="inputCheck"
                        checked={priority}
                        onChange={handleChange}
                    />
                    <label htmlFor="inputCheck">Dar prioridad</label>
                </div>
                <select 
                    className="form-select mb-2" 
                    name="state" 
                    value={state} 
                    onChange={handleChange}
                >
                    <option value= "pendiente">Pendiente</option>
                    <option value = "completado">Completado</option>
                </select>
                <button type="submit" className="btn btn-primary">Procesar</button>
            </form>
        </div>
    )
}

export default Controlado;