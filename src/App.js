import {Route, Routes} from 'react-router-dom';
import MainPages from './pages/MainPages'; 
import TypingPages from './pages/TypingPages'; 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/MainPages" element={<MainPages/>} />
        <Route path="/TypingPages" element={<TypingPages/>}/>
        <Route path='*' element={<h1>Not Found 404</h1>} />
      </Routes>
    </div>
  );
}


export default App;
