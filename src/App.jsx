import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Parallax from './components/Parallax';

function App() {
  return (
    <>
      <Switch>
        <Route path="/:lorem">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/parallax">
          <Parallax />
        </Route>
      </Switch>
    </>
  );
}

export default App;
