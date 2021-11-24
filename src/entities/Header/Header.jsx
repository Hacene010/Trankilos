import { Link } from 'react-router-dom';
import SHeader from './Style';

export default function Header() {
  return (
    <SHeader>
      <section>
        <div className="logo">
          <Link to="/">
            <img src="/assets/img/Trankilos.gif" alt="logoTrankilos" />
          </Link>
        </div>
        <div className="auth">
          <input type="button" value="Inscription" />
          <input type="button" value="Connexion" />
        </div>
      </section>

      <div className="cacthPhrase">
        <h1>
          <span className="firstPart">
            NE RÉFLICHISSEZ PLUS, <br />
          </span>
          <span className="secondPart">
            NOUS LE FAISONS POUR <span className="you">VOUS</span>
            <img src="/assets/img/emoji.jpeg" alt="emoji" />
          </span>
        </h1>
      </div>
    </SHeader>
  );
}
