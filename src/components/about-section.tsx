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
        <section id="about" className="py-16 px-4 bg-card/30">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Jerota about?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Jerota connects creators and fans. Every stream and watch you make earns you
                        real crypto rewards.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {aboutArr.map((about: any) => (
                        <div className="space-y-8">
                            <Card className="border-border rounded-[24px]">
                                <CardContent
                                    className="p-0 w-full bg-cover bg-center h-128 rounded-[24px] relative"
                                    style={{ backgroundImage: `url(${about.img})` }}
                                >
                                    <div className="flex flex-col gap-2 items-start bg-[#000] border-t-4 rounded-[24px] border-base-300 p-4 bottom-0 absolute">
                                        <span className='border-1 border-primary rounded-full px-4 py-1'>{ about.tag }</span>
                                        <h3 className="text-xl font-bold mb-2">{about.title}</h3>
                                        <p className="text-muted-foreground">{about.desc}</p>
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
