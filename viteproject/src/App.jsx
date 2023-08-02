import "./App.css";
import Footer from "./components/Home/footer";
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link,  
  BrowserRouter
}   
from 'react-router-dom'; 

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/footer" element={<Footer/>}/>
    </Routes>

    </BrowserRouter>
     
    </>
  );
}

export default App;
