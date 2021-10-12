import Verification from "./pages/verification/Verification";
import Otp from "./pages/otp/Otp";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./pages/servicesProvider/Services";
import ServiceDetail from "./pages/serviceDetail/ServiceDetail";
import Home from "./pages/home/Home";
import BookingSlot from "./pages/bookingSlots/BookingSlot";
import Navbar from "./components/navbar/Navbar";
import Booking from "./pages/booking/Booking";
import Register from "./components/registerForm/RegisterForm";
import Menu from "./pages/menu/Menu";
import UpdateAccount from "./pages/updateAccount/UpdateAccount";
import UpdateName from "./pages/updateName/UpdateName";
import UpdateEmail from "./pages/updateEmail/UpdateEmail";
import UpdateNumber from "./pages/updateNumber/UpdateNumber";
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import ConfirmBooking from "./pages/confirmBooking/ConfirmBooking";
import Favorites from "./pages/favorites/Favorites";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Otp />
        </Route>
        <Route path="/verification">
          <Verification />
        </Route>
        <div className="fullContainer">
          <Navbar />
          <div className="pb-85">
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/detail">
              <ServiceDetail />
            </Route>
            <Route path="/slots">
              <BookingSlot />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/updateAccount">
              <UpdateAccount />
            </Route>
            <Route path="/updateName">
              <UpdateName />
            </Route>
            <Route path="/updateEmail">
              <UpdateEmail />
            </Route>
            <Route path="/updateNumber">
              <UpdateNumber />
            </Route>
            <Route path="/updatePassword">
              <UpdatePassword />
            </Route>
            <Route path="/confirmBooking">
              <ConfirmBooking />
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
