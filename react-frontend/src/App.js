
import './App.css';
import ListDepartmentsComponent from './components/employee/ListDepartmentsComponent';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import { BrowserRouter as Router ,Switch, Route, Link }from 'react-router-dom';
import CreateAndUpdateDepartmentsComponent from './components/employee/CreateAndUpdateDepartmentComponent';
import ViewDepartmentComponent from './components/employee/ViewDepartmentComponent';


function App() {
  return (
    
      <Router>
          <HeaderComponent/>
          <div className="container bg-dark">
            <Switch>
              <Route path="/" exact component={ListDepartmentsComponent}></Route>
              <Route path="/departments" component={ListDepartmentsComponent}></Route>
              <Route path="/add-department/:id" component={CreateAndUpdateDepartmentsComponent}></Route>
              <Route path="/view-department/:id" component={ViewDepartmentComponent}></Route>
            </Switch>
          </div>
          <FooterComponent/>
      </Router>
    
    
  );
}

export default App;
