import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from "./Container";

function App() {
  return (
    <Router>
       <div className="App">
        <Switch>
          <Route path="/">
            <Container/>
          </Route>
          <Route path="/data">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
