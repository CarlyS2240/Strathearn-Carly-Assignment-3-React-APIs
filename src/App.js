import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { MoviesHomePage } from './components/pages/MoviesHomePage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MovieDetailsPage } from './components/pages/MovieDetailsPage';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MoviesHomePage />
        </Route>
        <Route path="/movie/:id">
          <MovieDetailsPage/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
