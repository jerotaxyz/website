import './App.css'
import { AboutSection } from './components/about-section'
import { BuildingSection } from './components/building-section'
import { FAQSection } from './components/faq-section'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { HeroSection } from './components/hero-section'

function App() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className='px-18'>
                <HeroSection />
                <AboutSection />
                <BuildingSection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    )
}

export default App
