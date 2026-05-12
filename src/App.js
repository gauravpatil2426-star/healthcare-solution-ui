import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bloggrid from './componets/Bloggrid';
import Footer from './componets/Footer';
import MainHeader from './componets/MainHeader';
import TopHeader from './componets/TopHeader';
import Home from './componets/Home';
import Blogdatail from './componets/Blogdatail';

function App() {
  return (
    <>
      <TopHeader />
      <MainHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bloggrid" element={<Bloggrid />} />
        <Route path="/blogdatail" element={<Blogdatail />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
