import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SApp from './style';
import {
  Home,
  Toasts,
  Parallax,
  Error404,
  SearchOne,
  Gallery,
  Form,
  Search,
} from './pages';
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
        <Route exact path="/search">
          <Search />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/toasts">
          <Toasts />
        </Route>
        <Route path="/form">
          <Form />
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
