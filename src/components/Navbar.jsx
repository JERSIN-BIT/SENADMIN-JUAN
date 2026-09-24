import { Link } from "react-router-dom";

function Navbar() {
return (
<nav className="navbar-sena">
    <div className="navbar-container">

        <Link to="/" className="navbar-brand-sena">
        <img src="/CSS/sena.png" alt="Logo SENA" />

        <div className="brand-info">
            <div className="brand-title">
                SENADMIN
            </div>

            <div className="brand-subtitle">
                Sistema Administrativo SENA
            </div>
        </div>
        </Link>

        <div className="navbar-menu">

            <Link to="/" className="nav-link">
            Inicio
            </Link>

            <Link to="/cursos" className="nav-link">
            Formaciones
            </Link>

            <Link to="/aprendices" className="nav-link">
            Aprendices
            </Link>

            <Link to="/instructores" className="nav-link">
            Instructores
            </Link>

            <Link to="/dashboard" className="nav-link">
            Administración
            </Link>

            <Link to="/login" className="btn-login">
            Iniciar sesión
            </Link>

            <Link to="/register" className="btn-outline-sena">
            Registrarme
            </Link>

        </div>

    </div>
</nav>
);
}

export default Navbar;
