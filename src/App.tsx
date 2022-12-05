import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './routes/login';
import Join from './routes/join';
import Main from './routes/todo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/join' element={<Join />}/>
        <Route path='/todo' element={<Main />}/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
