import { useRef, useState } from "react"

const NoControlado = () => {

    const form = useRef(null)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        // console.log([...data.entries()])

        //const dataObject = Object.fromEntries([...data.entries()])
        //console.log(dataObject)

        //capturar datos
        const data = new FormData(form.current)
        const {title, description, state} = Object.fromEntries([...data.entries()])

        //validar datos

        if (title.trim() ==="" || !description.trim() || !state.trim()) return setError("Llena todos los campos") //trim borra espacios alante y despues
        
        //enviar datos
        console.log(title, description, state)
    }

//    document.addEventListener('submit', (evento) => {evento.preventDefault()})
// el evento de handleSubmit se manda por defecto
    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input 
                type = "text"
                placeholder="Ingrese Todo" 
                className= "form-control mb-2"
                name="title"
                defaultValue="TODO1"
            />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese descripción"
                name="description"
                defaultValue="descripcion1"
            />
            <select className="form-select mb-2" name="state" defaultValue="completado">
                <option value= "pendiente">Pendiente</option>
                <option value = "completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>
            {
                // si no se cumple error !== se usa && para escribir el error 
                // sinecesitase el else en vez de && usaria operador ternario error !== '' ? error : 'en caso contrario'
                error !== '' && error
            }
        </form>
    )
}

export default NoControlado;