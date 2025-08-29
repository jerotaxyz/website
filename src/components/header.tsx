import { Button } from '@/components/ui/button'
import Logo from '../assets/logo.png'
import { useState } from 'react'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/20">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Jerota Logo" className="h-8 w-auto" />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <a href="#about" className="nav-link">
                        About
                    </a>
                    <a href="#features" className="nav-link">
                        Features
                    </a>
                    <a href="#faq" className="nav-link">
                        FAQ
                    </a>
                    <Button className="btn-primary px-6 rounded-full text-white">
                        Join waitlist
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1 p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                    />
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border/20">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <a
                            href="#about"
                            className="text-muted-foreground hover:text-foreground transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#features"
                            className="text-muted-foreground hover:text-foreground transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#faq"
                            className="text-muted-foreground hover:text-foreground transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            FAQ
                        </a>
                        <Button
                            className="bg-primary hover:bg-primary/90 text-white rounded-full w-full mt-2 cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Join waitlist
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
