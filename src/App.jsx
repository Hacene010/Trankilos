import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SApp from './style';
import { Parallax, Error404, SearchOne } from './components';

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
    </SApp>
  );
}

export default App;
