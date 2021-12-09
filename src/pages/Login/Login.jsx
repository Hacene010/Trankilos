import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api, cookies } from '../../conf';
import SLogin from './Style';

export default function LoginPage() {
  const [form, setForm] = useState({
    haveAccount: false,
    email: '',
    firstname: '',
    lastname: '',
    password: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newForm = { ...form };
    const newValue = type === 'checkbox' ? checked : value;
    newForm[name] = newValue;
    setForm(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, firstname, lastname } = form;
    let url;
    let formData;
    if (form.haveAccount) {
      url = '/auth/login';
      formData = { email, password };
    } else {
      url = '/auth/signup';
      formData = { email, password, firstname, lastname };
    }
    api
      .post(url, formData)
      .then(({ data }) => {
        const { token, user } = data;
        cookies.set('token', token);
        api.defaults.headers.authorization = `Bearer ${token}`;
        dispatch({ type: 'LOGIN', user });
        toast(`Bienvenue chez tranKilos ${user.firstname}`);
        history.push('/');
      })
      .catch((err) => {
        toast.error(`Error :${err}`);
      });
  };

  return (
    <SLogin>
      <form onSubmit={handleSubmit}>
        <div className="login">
          <label htmlFor="haveAccount" className="checkbox">
            <input
              type="checkbox"
              id="haveAccount"
              name="haveAccount"
              onChange={handleChange}
            />
            Déjà un compte ?
          </label>

          <label htmlFor="email">
            Email :
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
          </label>

          <label htmlFor="password">
            Mot de passe :
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="Mot de passe "
            />
          </label>
        </div>

        {!form.haveAccount && (
          <div className="signUp">
            <label htmlFor="firstname">
              Prénom :
              <input
                type="text"
                id="firstname"
                name="firstname"
                onChange={handleChange}
                placeholder="Votre prénom..."
              />
            </label>

            <label htmlFor="lastname">
              Nom :
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={handleChange}
                placeholder="votre nom..."
              />
            </label>
          </div>
        )}
        <input
          type="submit"
          className="signUpBtn"
          value={form.haveAccount ? 'Se connecter' : "S'inscrire"}
        />
      </form>
    </SLogin>
  );
}
