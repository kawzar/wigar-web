<template>
  <div class="main">
    <section id="inicio" class="section">
      <div class="section-container">
        <div class="title">
          <img :src="require('~/assets/images/logo_wigar.png')" alt="logo" class="logo-large" />
          <h1 class="white">Agrupación de mujeres y disidencias del rubro de Videojuegos de Argentina</h1>
        </div>
      </div>
    </section>
    <img :src="require('~/assets/images/bar_00.png')" alt="separator" class="bar" />
    <section id="nosotras" class="section">
      <div class="section-container">
        <h2>Nosotras</h2>
        <p>
          Bienvenides! Women in Games Argentina es una comunidad de networking de profesionales y aficionadxs de la industria de videojuegos, que
          nuclea a mujeres y disidencias de Argentina.
        </p>
        <p>
          Nuestra misión principal es trabajar por una industria de videojuegos más inclusiva, a partir de varias acciones concretas: visibilizar,
          educar y crear oportunidades de acceso y trabajo para grupos y minorías tradicionalmente en desventaja.
        </p>
        <p>
          La diversidad implica también entender y mostrar los distintos roles que se pueden ocupar dentro de la industria, desde el desarrollo y
          producción de los juegos, a su comercialización, difusión, conservación y estudio como producto cultural.
        </p>
        <p>
          Por eso, nos percibimos como un colectivo que nuclea e invita a todos quienes de alguna forma son parte de todos los procesos que implica la
          cadena de valor: desde desarrolladores, jugadores profesionales de esports, periodistas, traductorxs, artistas, streamers, curadorxs de
          arte, abogadxs. Todxs quienes optan por participar de la experiencia del gaming tienen un lugar en la industria!
        </p>
        <p>
          Además, revalorizamos el potencial de los videojuegos como fuente creativa para el crecimiento económico, con una industria argentina en
          constante desarrollo, creando fuentes de trabajo y posibilidades.
        </p>
      </div>
    </section>
    <img :src="require('~/assets/images/bar_01.png')" alt="separator" class="bar" />
    <section id="juegos" class="section">
      <div class="section-container white">
        <h2>JUEGOS</h2>
        <p>
          Este es nuestro tablero de juegos. Aqui visibilizamos los proyectos en los que nuestros miembros formaron parte de una u otra manera.
          Proyectos personales, Indies o no tan indies.
        </p>
        <div class="container margins-xl">
          <div
            class="padlet-embed"
            style="border:1px solid rgba(0,0,0,0.1);border-radius:2px;box-sizing:border-box;overflow:hidden;position:relative;width:100%;background:#F4F4F4"
          >
            <p style="padding:0;margin:0">
              <iframe
                src="https://padlet.com/embed/tmisvp8jdnv1uyvl"
                frameborder="0"
                allow="camera;microphone;geolocation"
                style="width:100%;height:608px;display:block;padding:0;margin:0"
              ></iframe>
            </p>
            <div style="padding:8px;text-align:right;margin:0;">
              <a href="https://padlet.com?ref=embed" style="padding:0;margin:0;border:none;display:block;line-height:1;height:16px" target="_blank"
                ><img
                  src="https://padlet.net/embeds/made_with_padlet.png"
                  width="86"
                  height="16"
                  style="padding:0;margin:0;background:none;border:none;display:inline;box-shadow:none"
                  alt="Hecho con Padlet"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <img :src="require('~/assets/images/bar_02.png')" alt="separator" class="bar" />
    <section id="eventos" class="section">
      <div class="section-container">
        <h2>EVENTOS</h2>
        <p>Encuentros, participaciones, webinars, talleres y más!</p>
        <div class="container horizontal">
          <div class="card" v-for="event in events" :key="event.id">
            <img :src="event.metadata.imagen.url" />
            <h3>{{ event.title }}</h3>
            <p>{{ event.metadata.descripcion }}</p>
          </div>
        </div>
      </div>
    </section>
    <img :src="require('~/assets/images/bar3replacement.png')" alt="separator" class="bar" />
    <section id="faq" class="section">
      <div class="section-container">
        <h2 class="white">F.A.Q.</h2>
        <p class="white">
          ¿Tenés alguna duda? Quizá alguien más también tuvo la misma intriga. Te dejamos un compendio de preguntas comunes. ¿No está lo que buscabas?
          ¡Sentite libre de enviarnos un mail y te responderemos a la brevedad!
        </p>
        <div class="faq-grid">
          <div class="faq-card" v-for="faq in faqs" :key="faq.id">
            <h3>{{ faq.title }}</h3>
            <div class="container">
              <p v-html="faq.content"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
p {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  line-height: 1.5;
}

h2 {
  font-size: 2.5rem;
  margin: 2rem 0;
  font-weight: 600;
}

h1 {
  color: #fff;
  font-size: 3rem;
  width: 50%;
  margin: 3rem;
  text-align: center;
}

.logo-large {
  height: 200px;
  margin-top: 100px;
}

.bar {
  width: 100%;
  position: relative;
  z-index: 2;
  padding: 0;
  margin: 0;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
  padding: 0;
}

.section {
  display: flex;
  justify-content: center;
}

.section-container {
  width: 60%;
  margin: 0 2rem;
  justify-content: center;
  align-items: center;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#inicio {
  background-color: #e4097f;
  height: 500px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.card {
  overflow: hidden;
  width: 250px;
  height: 430px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 10px;
  -webkit-box-shadow: 9px 9px 23px -6px rgba(0, 0, 0, 0.84);
  box-shadow: 9px 9px 23px -6px rgba(0, 0, 0, 0.84);
  margin: 3rem 2rem 4rem 2rem;
}
.card img {
  min-width: 100%;
  max-height: 320px;
  width: 250px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.card a {
  padding: 1.5rem 3rem;
  margin-bottom: 1rem;
}

.faq-grid {
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.faq-card {
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 9px 9px 23px -6px rgba(0, 0, 0, 0.84);
  margin: 3rem 2rem 4rem 2rem;
  overflow: hidden;
  position: relative;
  background-color: #fafafa;
}

.faq-card h3 {
  margin: 20px 10px 0px;
  padding-bottom: 5px;
  text-align: center;
}

.faq-card p {
  margin: 10px;
}

.horizontal {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.white {
  color: #fafafa;
}

#faq {
  background-color: #b0cb1e;
}

#juegos {
  background-color: #733466;
}
</style>

<script>
import Cosmic from "cosmicjs";

export default {
  data: () => {
    return {
      events: [],
      faqs: [],
    };
  },
  async created() {
    const cosmic = Cosmic();

    const config = {
      slug: process.env.bucket_slug,
      read_key: process.env.read_key,
    };

    const bucket = await cosmic.bucket(config);
    bucket.getObjects({ query: { type: "eventos" } }).then((res) => {
      this.events = res.objects;
    });
    bucket.getObjects({ query: { type: "faqs" } }).then((res) => (this.faqs = res.objects));
  },
};
</script>
