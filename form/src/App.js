import './App.css';
import Form from './components/Form';
import Bank from './components/Bank';
import Address from './components/Address';
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
         <Link to='/'></Link>

         <Switch>
           <Route exact path='/'><Form/></Route>
           <Route path="/Bank"><Bank/></Route>
           <Route path="/Address"><Address/></Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
