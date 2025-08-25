import { Button } from '@/components/ui/button'
import Logo from '../assets/logo.png'

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Jerota Logo" />
                </div>

                <nav className="flex items-center gap-2">
                    <a
                        href="#contact"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Contact Us
                    </a>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                        Join waitlist
                    </Button>
                </nav>
            </div>
        </header>
    )
}
