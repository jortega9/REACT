import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import LayoutPublic from "./layout/LayoutPublic";
import BlogDetails from "./pages/BlogDetails";

const App = () =>{

  // path :id es el parametro q se captura con el useParams y el id es el nombre de ese parametro al capturarlo
  return (
    <>
      <Navbar/>

      <div className="container">
        <Routes>
            <Route path="/" element={<LayoutPublic/>}>
              <Route element={<Inicio/>} index></Route>
              <Route element={<Contacto/>} path="/contacto"></Route>
              <Route element={<Blog/>} path="/blog"></Route>
              <Route element={<BlogDetails/>} path="/blog/:id"></Route>
              <Route element={<NotFound/>} path="*"></Route>
            </Route>
        </Routes>
      </div>
    </>
  )
};

export default App;