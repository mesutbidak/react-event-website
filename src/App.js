import './App.css';
import {
  Routes,
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom"
import Home from "./views/Home"
import EventDetail from "./views/EventDetail"

function App() {
  return (
    <Router>
      <div>
        <div className='header-container'>Ana Sayfa</div>
        <div className='body-container'>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/eventdetail/:id' element={<EventDetail />} />
          </Routes >
        </div>
      </div>
    </Router>
  );
}

export default App;
