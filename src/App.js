import './App.css';
import AppTitle from './AppTitle';
import Wrapper from './Wrapper';
import MainPage from './Mainpage';
import {
  RecoilRoot,
  useRecoilState,
} from 'recoil';
import { useEffect } from 'react';
import { API } from './API/API';
import atomAPI from './API/recoil/atomAPI';

function App() {
 
  return (
    <RecoilRoot>
    <div className="App">
      <Wrapper>
      <AppTitle/>
      <MainPage/>
      </Wrapper>
    </div>
    </RecoilRoot>
  );
}

export default App;
