import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from 'components/Signup';
import './App.css';
import rocketImg from './assets/rocket.jpg';

function App() {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-5'>
          <Signup />
        </div>
        <div className='col-md-7 my-auto'>
          <img className='img-fluid  w-100' src={rocketImg} alt='img' />
        </div>
      </div>
    </div>
  );
}

export default App;
