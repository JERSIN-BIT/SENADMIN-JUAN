import { useEffect, useState } from "react";

function Home() {

const [slide, setSlide] = useState(0);

const slides = [
{
image: "/CSS/comunidad-sena.png",
title: "Bienvenidos a SENADMIN",
text: "Administra la información del centro de formación de una manera fácil y organizada.",
button: "Explorar sistema"
},
{
image: "/CSS/formacion-sena.png",
title: "Gestión de formación",
text: "Consulta y administra los cursos, aprendices e instructores del centro de formación.",
button: "Ver cursos"
},
{
image: "/CSS/recursos-sena.png",
title: "Gestión de recursos",
text: "Organiza las áreas, computadores y centros de formación disponibles.",
button: "Ver recursos"
}
];

useEffect(() => {
const intervalo = setInterval(() => {
setSlide((actual) => (actual + 1) % slides.length);
}, 5000);

return () => clearInterval(intervalo);
}, [slides.length]);

const siguiente = () => {
setSlide((slide + 1) % slides.length);
};

const anterior = () => {
setSlide((slide - 1 + slides.length) % slides.length);
};

return (
<>
    <section className="home-hero">

        <img src={slides[slide].image} alt={slides[slide].title} />

        <div className="hero-content">

            <h1>
                {slides[slide].title}
            </h1>

            <p>
                {slides[slide].text}
            </p>

            <a href={ slide===0 ? "#modulos" : slide===1 ? "/cursos" : "/computadores" } className="hero-button">
                {slides[slide].button}
            </a>

        </div>

        <button className="carousel-button carousel-prev" onClick={anterior}>
            ‹
        </button>

        <button className="carousel-button carousel-next" onClick={siguiente}>
            ›
        </button>

        <div className="carousel-indicators">

            {slides.map((_, index) => (
            <button key={index} className={slide===index ? "active" : "" } onClick={()=> setSlide(index)}
                ></button>
            ))}

        </div>

    </section>

    <section id="formaciones" className="home-section formations-section">

        <div className="section-container">

            <div className="section-heading">

                <span>OFERTA DEL SENA</span>

                <h2>
                    Formaciones disponibles
                </h2>

                <p>
                    Explora los programas y conoce la oferta
                    de formación disponible.
                </p>

            </div>

            <div className="formation-grid">

                <div className="formation-card">
                    <h3>Formaciones SENA</h3>

                    <p>
                        Consulta los programas de formación
                        disponibles en el sistema.
                    </p>

                    <a href="/cursos">
                        Ver formaciones
                    </a>
                </div>

                <div className="formation-card">
                    <h3>Aprendices</h3>

                    <p>
                        Consulta y administra la información
                        de los aprendices.
                    </p>

                    <a href="/aprendices">
                        Ver aprendices
                    </a>
                </div>

                <div className="formation-card">
                    <h3>Instructores</h3>

                    <p>
                        Administra la información de los
                        instructores del centro.
                    </p>

                    <a href="/instructores">
                        Ver instructores
                    </a>
                </div>

            </div>

        </div>

    </section>

    <section id="quienes-somos" className="home-section about-section">

        <div className="section-container about-content">

            <div className="section-heading">

                <span>CONOCE SENADMIN</span>

                <h2>
                    Quiénes somos
                </h2>

                <p>
                    SENADMIN es una herramienta de apoyo para
                    centralizar y organizar la información
                    administrativa de un centro de formación
                    del SENA.
                </p>

                <p>
                    El sistema permite gestionar información
                    relacionada con aprendices, instructores,
                    cursos, áreas, computadores y centros
                    de formación desde un solo lugar.
                </p>

                <a href="#modulos" className="hero-button">
                    Conocer el sistema
                </a>

            </div>

            <div className="about-image">

                <img src="/CSS/formacion-sena.png" alt="Formación SENA" />

            </div>

        </div>

    </section>

    <section id="modulos" className="home-section modules-section">

        <div className="section-container">

            <div className="section-heading center">

                <span>GESTIÓN CENTRALIZADA</span>

                <h2>
                    Todo el sistema en un solo lugar
                </h2>

                <p>
                    SENADMIN reúne diferentes procesos
                    administrativos para facilitar la
                    organización y consulta de la información.
                </p>

            </div>

            <div className="module-grid">

                <div className="module-card">
                    <div className="module-number">
                        01
                    </div>

                    <h3>
                        Gestión académica
                    </h3>

                    <p>
                        Centraliza la información relacionada
                        con aprendices, instructores y cursos.
                    </p>
                </div>

                <div className="module-card">
                    <div className="module-number">
                        02
                    </div>

                    <h3>
                        Gestión de recursos
                    </h3>

                    <p>
                        Organiza la información de las áreas
                        y computadores utilizados.
                    </p>
                </div>

                <div className="module-card">
                    <div className="module-number">
                        03
                    </div>

                    <h3>
                        Administración institucional
                    </h3>

                    <p>
                        Facilita la organización de los centros
                        de formación y su información.
                    </p>
                </div>

            </div>

        </div>

    </section>

    <section id="contacto" className="contact-section">

        <div className="section-container">

            <span>CONTACTO</span>

            <h2>
                ¿Necesitas información?
            </h2>

            <p>
                SENADMIN facilita la administración de la
                información del centro de formación SENA.
            </p>

        </div>

    </section>
</>
);
}

export default Home;
