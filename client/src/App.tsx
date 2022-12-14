// 최상위 파일 App 
// login 여부를 loggedIn 변수를 생성해서 판단
// login 상태면 로그인창과 회원가입창은 가지 못하도록 설계
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

  // 로그인 상태라면 "/todo"로만 Route 될 수 있도록 설계함
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
