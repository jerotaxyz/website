import BuildingImage1 from '../assets/building-1-image.png'
import BuildingImage2 from '../assets/building-2-image.png'
import BuildingImage3 from '../assets/building-3-image.png'

export function BuildingSection() {
    const features = [
        {
            icon: '💰',
            title: 'Earn Crypto rewards',
            description:
                'Discover new music, like & follow artists and earn crypto rewards, including our native token, $JAT. Easily by engaging with your favorite music and videos. The more you engage, the more you earn. Allowing you to monetize your music consumption.',
            image: BuildingImage1,
            imageAlt: 'Crypto rewards dashboard',
        },
        {
            icon: '🚀',
            title: 'Boost Streams & Promote',
            description:
                'Use Jerota Boost to get more eyes and ears on your music and content. Promote your streams to reach a wider audience. Connect with fans and build your following. Jerota provides tools to help you grow your audience and increase your reach.',
            image: BuildingImage2,
            imageAlt: 'Stream promotion dashboard',
            reverse: true,
        },
        {
            icon: '🎵',
            title: 'Become a Creator & User',
            description:
                'Effortlessly switch to a creator account and monetize your favorite music by becoming content creators, and share your music with the world. Upload your music, build your fanbase, and earn rewards. Creating a stronger connection between listeners and creators.',
            image: BuildingImage3,
            imageAlt: 'Creator profile dashboard',
        },
    ]

    return (
        <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        What we are <span className="text-brand">building</span>?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Jerota is bringing Web3-based opportunities that will serve both artists and
                        listeners. The platform is creating a space where the music community can
                        thrive.
                    </p>
                </div>

                <div className="space-y-12 lg:space-y-20">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center border border-border rounded-3xl p-6 sm:p-8 lg:p-12 hover:border-primary/30 transition-all duration-300 ${
                                feature.reverse ? 'lg:grid-flow-col-dense' : ''
                            }`}
                        >
                            {/* Image */}
                            <div
                                className={`flex justify-center ${feature.reverse ? 'lg:col-start-2' : ''}`}
                            >
                                <img
                                    src={feature.image}
                                    alt={feature.imageAlt}
                                    className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-2xl shadow-2xl"
                                />
                            </div>

                            {/* Content */}
                            <div className={`space-y-4 ${feature.reverse ? 'lg:col-start-1' : ''}`}>
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold flex items-center gap-3">
                                    <span className="text-2xl">{feature.icon}</span>
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
