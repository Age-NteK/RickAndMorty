import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Form from "./components/Form/Form";
import Nav from './components/Nav/Nav'
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import About from "./components/About/About";
import Create from './components/Create/Create'
import NotFound from "./components/NotFound/NotFound";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const access = useSelector((state) => state.access);

  useEffect(() => {
    !access && navigate("/");
    access && navigate('/home')
  }, [access]);

  return (
    <>
      {location.pathname !== "/" && <Nav />}
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/home" element={<Cards />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Create />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
