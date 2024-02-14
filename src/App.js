import { DeleteAccSubmit } from './Account/DeleteAccSubmit';
import DeleteAccount from './Account/DeleteAccount';
import './App.css';
import { LandingPage } from './LandingPage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/delete-account' element={<DeleteAccount/>}/>
          <Route path='/delete-account-submit' element={<DeleteAccSubmit/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
