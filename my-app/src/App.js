import React from 'react';
import './App.css';
import ProductListPage from './ProductListPage';
import ProductDetailPage from './ProductDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to="/productListPage" />
          </Route>
          <Route exact path="/productListPage" component={ProductListPage} />
          <Route exact path="/productDetailPage" component={ProductDetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
