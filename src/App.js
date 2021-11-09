import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from "./Container";

function App() {
  return (
    <Router>
        <div className="App">
            <Container/>
        </div>
    </Router>
  );
}

export default App;
