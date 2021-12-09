import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { api, cookies } from '../../conf';
import SHeader from './Style';

export default function Header() {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    toast(`Goodbye, étranger !`);
    cookies.set('token', null);
    api.defaults.headers.authorization = null;
    dispatch({ type: 'LOGOUT', isLogged });
    history.push('/');
  };

  return (
    <SHeader>
      <section>
        <div className="logo">
          <Link to="/">
            <img src="/assets/img/Trankilos.gif" alt="logoTrankilos" />
          </Link>
        </div>

        <div className="auth">
          {isLogged ? (
            <>
              <img src="/assets/img/icons/user.png" alt="iconUser" />
              <input type="button" onClick={handleLogout} value="Déconnexion" />
            </>
          ) : (
            <Link to="/login">
              <img src="/assets/img/icons/user.png" alt="iconUser" />
            </Link>
          )}
        </div>
      </section>

      <div className="cacthPhrase">
        <h1>
          <span className="firstPart">
            NE RÉFLECHISSEZ PLUS, <br />
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
