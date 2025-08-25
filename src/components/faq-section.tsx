import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQSection() {
    return (
        <section id="faq" className="py-16 px-4 bg-card/30">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem
                        value="item-1"
                        className="bg-card border border-border rounded-lg px-6"
                    >
                        <AccordionTrigger className="text-left hover:no-underline">
                            What is Jerota?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Jerota is a revolutionary streaming platform that rewards users with
                            cryptocurrency for engaging with music and video content. It connects
                            creators and fans in a Web3 ecosystem where everyone can earn.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-2"
                        className="bg-card border border-border rounded-lg px-6"
                    >
                        <AccordionTrigger className="text-left hover:no-underline">
                            How do I earn rewards on Jerota?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            You earn crypto rewards by streaming content, liking videos, following
                            artists, and engaging with the community. The more active you are, the
                            more rewards you earn, including our native $JAT token.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-3"
                        className="bg-card border border-border rounded-lg px-6"
                    >
                        <AccordionTrigger className="text-left hover:no-underline">
                            What kind of rewards can I earn?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            You can earn various cryptocurrency rewards including our native $JAT
                            token, as well as other crypto tokens. Rewards are distributed based on
                            your engagement level and activity on the platform.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-4"
                        className="bg-card border border-border rounded-lg px-6"
                    >
                        <AccordionTrigger className="text-left hover:no-underline">
                            Is Jerota only for Streamers?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            No! Jerota is for everyone - creators, streamers, and music lovers
                            alike. Whether you want to create content, discover new music, or simply
                            enjoy streaming, you can earn rewards for your participation.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-5"
                        className="bg-card border border-border rounded-lg px-6"
                    >
                        <AccordionTrigger className="text-left hover:no-underline">
                            How can I join Jerota?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Currently, Jerota is in development. You can join our waitlist to be
                            among the first to experience the platform when it launches. Simply
                            click the "Join waitlist" button and provide your details.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">
                        Have more questions? Contact us at{' '}
                        <a
                            href="mailto:support@jerota.com"
                            className="text-primary hover:underline"
                        >
                            support@jerota.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}
