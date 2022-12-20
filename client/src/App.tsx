import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './routes/login';
import Join from './routes/join';
import Main from './routes/todo';
import { useEffect, useState } from 'react';
import { Cookies, CookiesProvider } from 'react-cookie';

function App() {
  const [loggedIn, setLoggedIn] = useState<Boolean>();
  const cookies = new Cookies();
  const isLogin = cookies.get("loggedIn")
  const loginStateHandler: Function = () => {
    setLoggedIn(true);
  }

  useEffect(() => {
    setLoggedIn(isLogin);
  }, []);

  if(loggedIn && loggedIn !== undefined) {
    return (
      <BrowserRouter>
        <CookiesProvider>
          <Routes>
            <Route path='/todo' element={<Main />}/>
          </Routes>
        </CookiesProvider>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
        <CookiesProvider>
          <Routes>
            <Route path='/' element={<Login loginStateHandler={loginStateHandler} />}/>
            <Route path='/join' element={<Join />}/>
          </Routes>
        </CookiesProvider>
      </BrowserRouter>
    );
}

export default App;
