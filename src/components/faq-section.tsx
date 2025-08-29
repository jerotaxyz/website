import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQSection() {
    const faqs = [
        {
            question: 'What is Jerota?',
            answer: 'Jerota is a revolutionary streaming platform that rewards users with cryptocurrency for engaging with music and video content. It connects creators and fans in a Web3 ecosystem where everyone can earn.',
        },
        {
            question: 'How do I earn rewards on Jerota?',
            answer: 'You earn crypto rewards by streaming content, liking videos, following artists, and engaging with the community. The more active you are, the more rewards you earn, including our native $JRT token.',
        },
        {
            question: 'What kind of rewards can I earn?',
            answer: 'You can earn various cryptocurrency rewards including our native $JRT token, as well as other crypto tokens. Rewards are distributed based on your engagement level and activity on the platform.',
        },
        {
            question: 'Is Jerota only for Streamers?',
            answer: 'No! Jerota is for everyone - creators, streamers, and music lovers alike. Whether you want to create content, discover new music, or simply enjoy streaming, you can earn rewards for your participation.',
        },
        {
            question: 'How can I join Jerota?',
            answer: 'Currently, Jerota is in development. You can join our waitlist to be among the first to experience the platform when it launches. Simply click the "Join waitlist" button and provide your details.',
        },
    ]

    return (
        <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know about Jerota and how it works.
                    </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index + 1}`}
                            className="bg-card border border-border rounded-2xl px-4 sm:px-6 transition-colors duration-200"
                        >
                            <AccordionTrigger className="text-left hover:no-underline py-3 text-base sm:text-lg font-semibold cursor-pointer">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-6 text-sm sm:text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <p className="text-muted-foreground mb-4 text-sm sm:text-base text-center mt-6">
                    Need more help? Contact us at{' '}
                    <a
                        href="mailto:jerotaxyz@gmail.com"
                        className="text-primary transition-colors font-medium"
                    >
                        jerotaxyz@gmail.com
                    </a>
                </p>
            </div>
        </section>
    )
}
