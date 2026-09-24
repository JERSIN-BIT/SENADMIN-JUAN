function Footer() {
return (
<footer className="footer-sena">

    <div className="footer-container">

        <div className="footer-content">

            <div className="footer-logo">
                <img src="/CSS/sena.png" alt="Logo SENA" />
            </div>

            <div className="footer-info">
                <h5>SENADMIN</h5>

                <p>
                    Sistema de administración de información
                    del Servicio Nacional de Aprendizaje.
                </p>
            </div>

            <div className="footer-links">
                <h5>Información</h5>

                <a href="/">
                    Inicio
                </a>

                <a href="/#quienes-somos">
                    Quiénes somos
                </a>

                <a href="/#contacto">
                    Contáctanos
                </a>
            </div>

        </div>

        <div className="footer-line"></div>

        <div className="footer-bottom">

            <span>
                © 2026 SENADMIN
            </span>

            <span>
                Servicio Nacional de Aprendizaje - SENA
            </span>

        </div>

    </div>

</footer>
);
}

export default Footer;
