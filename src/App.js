import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from "./Container";

function App() {
  return (
    <Router>
       <div className="App">
        <Switch>
          <Route path="/">
            {/* Homepage would be more correct */}
            <Container/>
          </Route>

          {/* API routes shouldn't be related to react and shouldn't be in switch */}
          <Route path="/data">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
