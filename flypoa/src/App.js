import './App.css';
import { LandingPage } from './pages/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  ListFlightComponent  from './components/ListFlightComp';
import AddFlightComponent from './components/AddFlightComp';
import UpdateFlightComponent from './components/UpdateFlightComp';
import UserFlightComponent from './components/UserFlightComp';
import Login from './components/login/Login';
import UserLogin from './components/login/UserLogin';
import ContactComponent from './components/ContactDetailsComp';
import PassengerComponent from './components/PassengerDetailsComp';
import MpesaComponent from './components/MpesaComp';
import CardPaymentComponent from './components/CardDetailsComp';
import ShowCart from './components/book/Card2';
import { PaymentType } from './components/PaymentTypeComp';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/flights" element={<ListFlightComponent/>} ></Route>
          <Route path="/add-flight" element={<AddFlightComponent/>}></Route>
          <Route path="/login" element={<Login/>}></Route>```````````````````E``34E E41444E`
          <Route path="/userlogin" element={<UserLogin/>}></Route>
          <Route path="/contact" element={<ContactComponent/>}></Route>
          <Route path="/passenger" element={<PassengerComponent/>}></Route>
          <Route path="/mpesa" element={<MpesaComponent/>}></Route>
          <Route path="/cardpayment" element={<CardPaymentComponent/>}></Route>
          <Route path="/edit-flight/:id" element={<UpdateFlightComponent/>}></Route>
          <Route path="/user-flights" element={<UserFlightComponent/>}></Route>
          <Route path="/showcart" element={<ShowCart/>}></Route>
          <Route path="/payment" element={<PaymentType/>}></Route>
      </Routes>
    </Router>
    {/*<FooterComponent />*/}
    </div>
   
  );
}

export default App;
<LandingPage/>
