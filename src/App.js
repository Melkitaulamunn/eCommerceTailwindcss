import { BrowserRouter,Routes, Route } from "react-router-dom"
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./containers/PageContainer";
function App() {
  return (
  <PageContainer>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  </PageContainer>
  );
}

export default App;
