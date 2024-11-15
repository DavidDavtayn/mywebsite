import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Aboutpage } from "./pages/Aboutpage";
import { Blog } from "./pages/Blog";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Team } from "./pages/Team";
import { Contacts } from "./pages/Contacts";

import Header from "./components/Header";
import Section from "./components/Section";
import Elementer from "./components/Elementer";
import Project from "./components/Project";
import Images from "./components/Images";
import About from "./components/About";
import Swiper from "./components/Swiper";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Section />
            <Elementer />
            <Project />
            <Images />
            <About />
            <Swiper />
            <Footer />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </div>
    );
}

export default App;
