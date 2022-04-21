import React from  'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './container/Home';
import Signin from './container/Signin';
import Signup from './container/Signup';
import SignupAdmin from './container/SignupAdmin'
import User from './container/User';
import Error from './container/Error';


import Admin from './container/Admin';
function App(){

return (
<div className="App">
<Router>
 <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/signin" component={Signin}/>
     <Route path="/signup" component={Signup} />
     <Route path="/admin" component={Admin}/>
     <Route path="/user" component={User}/>
     <Route path="/signupadmin" component={SignupAdmin}/>
     <Route path="/Error" component={Error}/>
 </Switch>
 

</Router>
    
</div>
)

}
 
export default App;
