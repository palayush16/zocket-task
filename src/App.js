
import './App.css';
import { ImLocation} from 'react-icons/im';
import Carousel from './components/Slider'
import TagCard from './components/TagCard'
import Reason from './components/Reason'
import Feedback from './components/Feedback'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="App">

      <div className="navbar">
        <div className="navbar-icon">
          <ImLocation/>
        </div>
        <div className="navbar-text">
          <h3>Bellandur, Bangalore</h3>
        </div>
      </div>
      
      <div className="header">
        <h1>Drive and Shine</h1>
        <h3>Car Wash</h3>
      </div>

      
        <Carousel/>
        <TagCard/>
        <Reason/>
        <Feedback/>
        <Testimonials/>
    </div>
  );
}

export default App;
