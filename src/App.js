import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./Homepage";

function App() {
  return (
    <Router>
       <div className="App">
        <Switch>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
