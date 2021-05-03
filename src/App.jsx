import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import SApp from './style';
import { Parallax, Error404, SearchOne } from './components';
import Nav from './components/Nav';

function App() {
  return (
    <SApp>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/parallax">
          <Parallax />
        </Route>
        <Route exact path="/searchone">
          <SearchOne />
        </Route>
        <Route path="/">
          <Error404 />
        </Route>
      </Switch>
      <Nav />
      <ToastContainer position="bottom-right" />
    </SApp>
  );
}

export default App;
