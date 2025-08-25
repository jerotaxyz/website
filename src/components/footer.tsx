export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-sm">J</span>
                        </div>
                        <div>
                            <span className="text-xl font-bold text-foreground">Jerota</span>
                            <p className="text-sm text-muted-foreground">Play Stream & Earn</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        <div>
                            <h4 className="font-semibold mb-3">Our Apps</h4>
                            <div className="space-y-2">
                                <a
                                    href="#"
                                    className="block text-muted-foreground hover:text-primary transition-colors"
                                >
                                    iOS App
                                </a>
                                <a
                                    href="#"
                                    className="block text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Android App
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Contact Us</h4>
                            <div className="space-y-2">
                                <a
                                    href="mailto:support@jerota.com"
                                    className="block text-muted-foreground hover:text-primary transition-colors"
                                >
                                    support@jerota.com
                                </a>
                                <div className="flex gap-4 mt-4">
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Twitter
                                    </a>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Discord
                                    </a>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Telegram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-8 text-center">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Jerota. All Rights Reserved.
                    </p>
                    <div className="flex justify-center gap-6 mt-4">
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                            Terms of use
                        </a>
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
