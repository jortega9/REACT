import { useCallback, useEffect, useState } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {

        setLoading(true);

        try{
            const res = await fetch(url);
            
            if(!res.ok) throw new Error("Error al consumir la API");

            const datos = await res.json();
    
            setData(datos);
        } catch(error){
            console.log(error.message);
            setError(error.message);
            setData([]);
        } finally{
            setLoading(false);
        }

    }, [])

    useEffect(() => {
        fetchData();
    }, []);

    return {data, loading, error};
}