import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function ThankYouPage() {
    const navigate = useNavigate()

    const handleBackToHome = () => {
        navigate('/')
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center">
                {/* Success Icon */}
                <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-12 h-12 text-brand" />
                    </div>
                </div>

                {/* Thank You Message */}
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                    Thank You!
                </h1>

                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-brand">
                    Welcome to the Future of Streaming
                </h2>

                <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                    You've successfully joined the Jerota waitlist! We'll notify you as soon as we launch so you can start streaming, watching, and earning crypto rewards.
                </p>

                {/* Features Preview */}
                <div className="bg-card rounded-2xl p-6 mb-8 text-left">
                    <h3 className="font-semibold mb-4 text-foreground">What's coming next:</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-brand rounded-full"></div>
                            Early access to the Jerota platform
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-brand rounded-full"></div>
                            Exclusive launch bonuses and rewards
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-brand rounded-full"></div>
                            Updates on our development progress
                        </li>
                    </ul>
                </div>

                {/* Back to Home Button */}
                <Button
                    onClick={handleBackToHome}
                    className="btn-primary w-full py-4 text-white"
                >
                    Back to Homepage
                </Button>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                        Stay connected with us:
                    </p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://x.com/jerotaxyz"
                            className="social-link text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                        <a
                            href="mailto:jerotaxyz@gmail.com"
                            className="social-link text-sm"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}