import { Card, CardContent } from '@/components/ui/card'
import Creator1Image from '../assets/about-creator-1-image.png'
import Creator2Image from '../assets/about-creator-2-image.png'
import Listener1Image from '../assets/about-listener-1-image.png'
import Listener2Image from '../assets/about-listener-2-image.png'

export function AboutSection() {
    const aboutArr = [
        {
            title: 'Promote Your Art',
            desc: 'Promote your music and get paid with Jerota. Our decentralized live app rewards, our streamers very well. Jerota is a place where you can showcase your talent and get rewarded for it.',
            img: Creator1Image,
            tag: 'Made for musicians',
        },
        {
            title: 'Build a Community',
            desc: 'Build a community of music and video lovers. Join with 500+ fans from around the world. Jerota is a place where you can connect with like-minded people and share your passion.',
            img: Creator2Image,
            tag: 'Made for creators',
        },
        {
            title: 'Stream & Earn',
            desc: 'Get rewarded for every stream you make on our platform. We use a unique reward system that pays you for your time and engagement. The more you stream, the more you earn.',
            img: Listener1Image,
            tag: 'Made for streamers',
        },
        {
            title: 'Discover & Support',
            desc: 'Discover new artists and support them with your engagement. Every interaction helps them grow and earn rewards. Join our community of music lovers and creators.',
            img: Listener2Image,
            tag: 'Made for fans',
        },
    ]
    return (
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        What is <span className="text-brand">Jerota</span> about?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Jerota connects creators and fans. Every stream and watch you make earns you
                        real crypto rewards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {aboutArr.map((about: any, index: number) => (
                        <div key={index} className="group">
                            <Card className="card-about overflow-hidden rounded-3xl">
                                <CardContent className="p-0 relative">
                                    {/* Image Section */}
                                    <div
                                        className="w-full h-48 sm:h-56 lg:h-64 bg-cover bg-center relative"
                                        style={{ backgroundImage: `url(${about.img})` }}
                                    >
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    </div>

                                    {/* Curved Content Section */}
                                    <div className="relative bg-card">
                                        {/* Curved top border using CSS */}
                                        <div
                                            className="absolute -top-5 left-0 right-0 h-6 bg-card"
                                            style={{
                                                borderRadius: '50px 50px 0 0',
                                                clipPath: 'ellipse(100% 100% at 50% 0%)',
                                            }}
                                        ></div>

                                        {/* Content - Centered on mobile, left-aligned on larger screens */}
                                        <div className="px-4 sm:px-6 pt-8 pb-6 text-center md:text-left">
                                            <span className="inline-block border-primary border-1 text-brand rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium mb-3 sm:mb-4 backdrop-blur-sm">
                                                {about.tag}
                                            </span>
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-foreground">
                                                {about.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-none md:max-w-sm lg:max-w-none">
                                                {about.desc}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
