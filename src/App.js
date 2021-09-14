import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container,} from 'reactstrap';
import Header from './components/partials/header';
import Home from './components/home/home';
import Inbox from './components/inbox';
import Explore from './components/explore';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <div className="container_custom">
            <Switch>
              <Route path="/inbox">
                <Inbox />
              </Route>
              <Route path="/explore">
                <Explore />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </div>
  );
}

export default App;
