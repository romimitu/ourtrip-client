import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import BookNow from './Pages/BookNow/BookNow';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import AddService from './Pages/AddService/AddService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/servicedetail/:serviceID">
              <ServiceDetail></ServiceDetail>
            </Route>

            <PrivateRoute path="/booknow/:serviceID">
              <BookNow></BookNow>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manage-order">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
