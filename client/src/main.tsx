import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage/HomePage'
import "./styles/global.scss"
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage/AboutPage'
import { FAQsPage } from './pages/FAQsPage/FAQsPage'
import { FAQsCategoryPage } from './pages/FAQsCategoryPage/FAQsCategoryPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header />
      <Hero />
      <main>
        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/faqs" element={  <FAQsPage /> } />
          <Route path="/faqs/:category" element={ <FAQsCategoryPage /> } />
        </Routes>
      </main>
      <Footer />
    </Router>
  </StrictMode>,
)