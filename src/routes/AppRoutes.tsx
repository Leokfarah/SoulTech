import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "../pages/notfound/NotFound"
import Home from "../pages/home/Home"
import Cadastro from "../pages/cadastro/Cadastro"
import Login from "../pages/login/Login"


const AppRoutes: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;