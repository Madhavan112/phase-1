import Header from "./Components/Header";
import Login from "./Components/Login";
import Post from "./Components/Post";
import { Routes,Route } from "react-router-dom";
import Signup from "./Components/Signup";
function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<><Header />
      <Post/></>}></Route>
        <Route path="/login" element={<> <Header/><Login/></>}></Route>
        <Route path="/signup" element={<> <Header/><Signup/></>}></Route>
      </Routes>
    </>
  );
}

export default App;
