class Multimedia {
  constructor(url) {
    const _url = url;
    this.url = () => _url;
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    const _id = id;
    this.getId = () => _id;
  }

  playMultimedia() {
    Aplicacion.agregarVideo(this.url(), this.getId());
  }

  setInicio(tiempo = 0) {
    const elementoIframe = document.getElementById(this.getId());
    if (!elementoIframe) return;
    elementoIframe.setAttribute("src", `${this.url()}?start=${tiempo}`);
  }
}

const Aplicacion = (() => {
  const _agregarVideo = (url, idIframe) => {
    const elementoIframe = document.getElementById(idIframe);
    if (!elementoIframe) return;
    elementoIframe.setAttribute("src", url);
  };

  const agregarVideo = (url, id) => _agregarVideo(url, id);

  return {
    agregarVideo
  };
})();

const musica = new Reproductor("https://www.youtube.com/embed/fHI8X4OXluQ", "musica");
musica.playMultimedia();

const pelicula = new Reproductor("https://www.youtube.com/embed/DEa508Xmmio", "pelicula");
pelicula.playMultimedia();

const serie = new Reproductor("https://www.youtube.com/embed/G8447cSrZ8c", "serie");
serie.setInicio(10);