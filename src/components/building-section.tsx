import BuildingImage1 from '../assets/building-1-image.png'
import BuildingImage2 from '../assets/building-2-image.png'
import BuildingImage3 from '../assets/building-3-image.png'

export function BuildingSection() {
    return (
        <section id="features" className="py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What we are building?</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Jerota is bringing Web3-based opportunities that will serve both artists and
                        listeners. The platform is creating a space where the music community can
                        thrive.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Earn Crypto Rewards */}
                    <div className="grid lg:grid-cols-2 items-center border-2 rounded-[32px] px-4 py-8">
                        <div className="flex justify-center">
                            <img
                                src={BuildingImage1}
                                alt="Crypto rewards dashboard"
                                className="w-64 h-auto rounded-3xl shadow-2xl"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-primary">💰</span>
                                Earn Crypto rewards
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Discover new music, like & follow artists and earn crypto rewards,
                                including our native token, $JAT. Easily by engaging with your
                                favorite music and videos. The more you engage, the more you earn.
                                Allowing you to monetize your music consumption.
                            </p>
                        </div>
                    </div>

                    {/* Boost Streams & Promote */}
                    <div className="grid lg:grid-cols-2 items-center border-2 rounded-[32px] px-4 py-8">
                        <div className="">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-primary">🚀</span>
                                Boost Streams & Promote
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Use Jerota Boost to get more eyes and ears on your music and
                                content. Promote your streams to reach a wider audience. Connect
                                with fans and build your following. Jerota provides tools to help
                                you grow your audience and increase your reach.
                            </p>
                        </div>
                        <div className="order-2 lg:order-1 flex justify-center">
                            <img
                                src={BuildingImage2}
                                alt="Stream promotion dashboard"
                                className="w-64 h-auto rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Become a Creator & User */}
                    <div className="grid lg:grid-cols-2 items-center border-2 rounded-[32px] px-4 py-8">
                        <div className="flex justify-center">
                            <img
                                src={BuildingImage3}
                                alt="Creator profile dashboard"
                                className="w-64 h-auto rounded-3xl shadow-2xl"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-primary">🎵</span>
                                Become a Creator & User
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Effortlessly switch to a creator account and monetize your favorite
                                music by becoming content creators, and share your music with the
                                world. Upload your music, build your fanbase, and earn rewards.
                                Creating a stronger connection between listeners and creators. View
                                and like content they love and make a living.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
