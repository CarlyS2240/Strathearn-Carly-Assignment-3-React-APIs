import './App.css';

/* Importing react router so we can have multiple pages */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

/* Importing our page, navbar, and footer components */
import { MoviesHomePage } from './components/pages/MoviesHomePage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MovieDetailsPage } from './components/pages/MovieDetailsPage';


/* Displaying our components in the App*/
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
