import Prac from "./components/Prac";
import Home from "./components/Home";
import News from "./components/News";
import Sign from './components/Sign'
import Prac2 from "./components/Prac2";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/news/:news' element={<News/>}/>
      <Route path="/prac" element={<Prac/>}/>
      <Route path="/sign" element={<Sign/>}/>
      <Route path="/prac2" element={<Prac2/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
