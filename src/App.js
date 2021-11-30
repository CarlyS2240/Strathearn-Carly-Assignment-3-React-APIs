import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { MoviesHomePage } from './components/pages/MoviesHomePage';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MoviesHomePage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
