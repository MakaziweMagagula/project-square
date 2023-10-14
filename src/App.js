import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Brands from '../src/components/Brands'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Brands />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
