import {useFetch} from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {

  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [searchParams, setSearchParams] = useSearchParams();

  if(loading) return <p>Loading data...</p>
  if(error) return <p>error...</p>

  const handleChange = (e) => {
    let filter = e.target.value;

    if(filter) setSearchParams({filter}); // si el nombre de la variable y de la propiedad es distinto entoces {propiedad: variable}
    else setSearchParams({});

  }

    return (
      <>
          <h1>Blog</h1>
          <input
            type="text"
            name=""
            onChange={handleChange}
            className="form-control my-3"
            value={searchParams.get("filter") || ""}>
          </input>
          <ul className="list-group">
            {data
                .filter((item) => {
                  let filter = searchParams.get("filter");
                  if(!filter) return true;
                  let name = item.title.toLowerCase();
                  return name.startsWith(filter.toLowerCase());
                })
                .map(item => (
                  <Link className="list-group-item" to={`/blog/${item.id}`} key={item.id}>{item.id} - {item.title}</Link>
                ))
            }
          </ul>
      </>
    )
  };
  
  export default Blog;
  