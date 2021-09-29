import SFooter from './Style';

export default function Footer() {
  return (
    <SFooter>
      <div className="container">
        <section className="contactForm">
          <h3>Nous contacter</h3>
          <form>
            <div className="contactIinfos">
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Nom / prénom..."
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Mail..."
              />
            </div>

            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Message..."
            />

            <input type="button" value="Envoyer" className="sendBtn" />
          </form>
        </section>
      </div>

      <section className="navigation">
        <div className="navbar">
          <div className="home">
            <a href="#home">
              <h3>Accueil</h3>
            </a>
          </div>
          <div className="dishes">
            <a href="dishes">
              <h3>Plats</h3>
            </a>
          </div>
        </div>
        <div className="infos">
          <a href="https://www.linkedin.com/in/hacenehamroune/">
            <img src="/assets/img/icons/linkedIn.png" alt="linkedIn" />
          </a>
          <a href="https://fr-fr.facebook.com/marmiton/">
            <img src="/assets/img/icons/fb.png" alt="facebook" />
          </a>
          <a href="https://github.com/Hacene010">
            <img src="/assets/img/icons/github.png" alt="github" />
          </a>
        </div>
      </section>
    </SFooter>
  );
}
