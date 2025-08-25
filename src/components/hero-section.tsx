import { Button } from '@/components/ui/button'
import HeroSectionImage from '../assets/hero-section-image.png'

export function HeroSection() {
    return (
        <section className="pt-24 pb-16 px-4">
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center my-4">
                    <p className="bg-base text-primary shadow-[0 0 10px 1px red] border-1 border-primary p-2 w-[200px] rounded-full">
                        Jerota is coming soon.
                    </p>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    The One App Where You Can Stream, Watch And Earn
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                    Jerota is the future of live streaming. Engage with your favorite music and
                    videos to get rewarded in crypto tokens. Join the waitlist by filling your
                    details below to be among the first to experience the future.
                </p>

                <form className="w-4/5 flex sm:flex-row justify-center mb-16 rounded-full border-2 border-gray-500 justify-between p-1">
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        className="w-4/5 px-4 rounded-full"
                    />
                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full w-1/5"
                    >
                        Join waitlist
                    </Button>
                </form>

                {/* Phone Mockups */}
                <div className="flex justify-center items-end gap-4 md:gap-8 max-w-4xl mx-auto">
                    <img src={HeroSectionImage} alt="hero section image" />
                </div>
            </div>
        </section>
    )
}
