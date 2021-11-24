import Footer from './entities/Footer/Footer';
import Header from './entities/Header/Header';
import RouteCalls from './pages/Routes.jsx/RouteCalls';
import SApp from './style';

function App() {
  return (
    <SApp>
      <Header />
      <RouteCalls />
      <Footer />
    </SApp>
  );
}

export default App;
