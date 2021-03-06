import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import NotFound from './component/NotFound/NotFound';
import Project1 from './component/Porject1/Project1';
import Project2 from './component/Project2/Project2';
import Project3 from './component/Project3/Project3';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/project1' element={<Project1></Project1>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/project2' element={<Project2></Project2>}></Route>
        <Route path='/project3' element={<Project3></Project3>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
