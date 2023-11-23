import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer';
import Home from './pages/home';
import Faculty from './pages/faculty';
import About from './pages/about';
import Social from './pages/social';
// import Faq from './pages/faq/faq';
// import NotFound from './pages/404';
// import Contact from './pages/contact/contact';
// import Sotd from './pages/sotd/sotd';
// import Resources from './pages/resources/resources';
import Events from './pages/events';
import Research from './pages/research';
import Programmers from './pages/programmers';
import TechTeam from './pages/techteam';
// import TipsLayout from './pages/tips/tipsLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
         <Routes>
            <Route path='/' element={<Home />}/>
           <Route path='/faculty' element={<Faculty />}/>
           <Route path='/events' element={<Events />}/>
           <Route path='/about' element={<About />}/> 
           <Route path='/research-groups' element={<Research />}/>
           <Route path='/programmers' element={<Programmers />}/>
           <Route path='/tech-team' element={<TechTeam />}/>
           <Route path='/social' element={<Social />}/>
           {/*
           <Route path='/contact' element={<Contact />}/>
           <Route path='/faq' element={<Faq />}/>
           */}
         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;