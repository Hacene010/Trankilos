import SHeader from './Style';

export default function Header() {
  return (
    <SHeader>
      <section>
        <div className="logo">
          <img src="/assets/img/Trankilos.gif" alt="logoTrankilos" />
        </div>
        <div className="auth">
          <input type="button" value="Inscription" />
          <input type="button" value="Connexion" />
        </div>
      </section>

      <div className="cacthPhrase">
        <h1>
          NE RÉFLICHISSEZ PLUS, <br />
          <span>
            NOUS LE FAISONS POUR VOUS
            <img src="/assets/img/emoji.jpeg" alt="emoji" />
          </span>
        </h1>
      </div>
    </SHeader>
  );
}
