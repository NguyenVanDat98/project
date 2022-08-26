
import {Routes,Route} from "react-router-dom"

import FormCreate from '../components/FormCreate';
import Header from "../layout/header/Header";
import Main from './../layout/main/Main';
import './App.css';

 function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}> </Route>
        <Route path='/add' element={<FormCreate/>}> </Route>
      </Routes>
      </div>
  );
}

export default App;
