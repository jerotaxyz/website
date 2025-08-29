import HeroSectionImage from '../assets/hero-section-image.png'
import { JoinWaitList } from './ui/join-waitlist'

export function HeroSection() {
    return (
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center">
                    {/* Coming Soon Badge */}
                    <div className="flex items-center justify-center mb-8">
                        <div className="border border-primary rounded-full px-6 py-2 shadow-[0_5px_20px_rgba(46,174,78,0.3)]">
                            <p className="text-primary text-sm font-medium">
                                Jerota is coming soon.
                            </p>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl">
                        The One App Where You Can <span className="text-primary">Stream</span>,{' '}
                        <span className="text-primary">Watch</span> And{' '}
                        <span className="text-primary">Earn</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                        Jerota is the future of live streaming. Engage with your favorite music and
                        videos to get rewarded in crypto tokens. Join the waitlist by filling your
                        details below to be among the first to experience the future.
                    </p>

                    {/* Email Signup Form */}
                    <JoinWaitList />

                    {/* Phone Mockups */}
                    <div className="flex justify-center items-end max-w-4xl mx-auto mt-12">
                        <img
                            src={HeroSectionImage}
                            alt="Jerota app mockup showing streaming interface"
                            className="w-full h-auto max-w-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
