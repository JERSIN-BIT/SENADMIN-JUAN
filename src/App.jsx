import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Aprendices from "./Pages/Aprendices";
import Instructores from "./Pages/Instructores";
import Cursos from "./Pages/Cursos";
import Areas from "./Pages/Areas";
import Computadores from "./Pages/Computadores";
import CentrosFormacion from "./Pages/CentrosFormacion";

function App() {
return (
<BrowserRouter>

    <MainLayout>

        <Routes>

            <Route path="/" element={<Home />}
            />

            <Route path="/login" element={<Login />}
            />

            <Route path="/register" element={<Register />}
            />

            <Route path="/dashboard" element={<Dashboard />}
            />

            <Route path="/aprendices" element={<Aprendices />}
            />

            <Route path="/instructores" element={<Instructores />}
            />

            <Route path="/cursos" element={<Cursos />}
            />

            <Route path="/areas" element={<Areas />}
            />

            <Route path="/computadores" element={<Computadores />}
            />

            <Route path="/centros-formacion" element={<CentrosFormacion />}
            />

        </Routes>

    </MainLayout>

</BrowserRouter>
);
}

export default App;
