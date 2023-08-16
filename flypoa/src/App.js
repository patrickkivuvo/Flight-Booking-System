import './App.css';
import { LandingPage } from './pages/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  ListFlightComponent  from './components/ListFlightComp';
import AddFlightComponent from './components/AddFlightComp';
import UpdateFlightComponent from './components/UpdateFlightComp';
import Login from './components/login/Login'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/flights" element={<ListFlightComponent/>} ></Route>
          <Route path="/add-flight" element={<AddFlightComponent/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        <Route path="/edit-flight/:id" element={<UpdateFlightComponent/>}></Route>
      
      </Routes>
    </Router>
    {/*<FooterComponent />*/}
    </div>
   
  );
}

export default App;
<LandingPage/>
