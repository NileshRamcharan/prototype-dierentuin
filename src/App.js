import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//import DragAndDrop from './components/DragAndDrop';
import Start from './components/gameplay/Start';
import OvergangPuzzelEen from './components/gameplay/OvergangPuzzelEen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start></Start>} />
          <Route path='/firstPuzzle' element={<OvergangPuzzelEen />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
