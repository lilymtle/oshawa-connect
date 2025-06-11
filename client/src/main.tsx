import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage/HomePage'
import "./styles/global.scss"
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Hero />
      <main>
        <HomePage />
      </main>
    <Footer />
  </StrictMode>,
)
