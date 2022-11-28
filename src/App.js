import './App.css';
import AppTitle from './AppTitle';
import Wrapper from './Wrapper';
import MainPage from './Mainpage';
import TraceFilePath from './TreacFilePath';
import atomAPI from './API/recoil/atomAPI';
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const APIData = useRecoilValue(atomAPI)
  console.log(APIData);
  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>
          <AppTitle />
          <Routes>
            <Route path="/" element={<MainPage />} />
            { APIData ? APIData.map((el,index) =>{
              return <Route path={`/${el.path}`} element={<TraceFilePath />} key={index}/>
            }
            ) : undefined}
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
