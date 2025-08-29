import { Twitter, Mail } from 'lucide-react'
import Logo from '../assets/logo.png'
import { JoinWaitList } from './ui/join-waitlist'
import { SocialIcon } from 'react-social-icons'

export function Footer() {
    return (
        <footer className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Brand and Email Signup */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
                        <div className="lg:max-w-md">
                            <div className="mb-2">
                                <img src={Logo} alt="Jerota Logo" className="h-8 w-auto" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                                Play Stream & <span className="text-[#2EAF4E]">Earn</span>
                            </h3>
                            <JoinWaitList />
                        </div>

                        {/* Services and Contact */}
                        <div>
                            {/* Services */}
                            <div className="mb-4">
                                <h4 className="font-semibold mb-4 text-white text-lg">Services</h4>
                                <div className="space-y-4">
                                    <a
                                        href="#about"
                                        className="block text-gray-400 hover:text-primary transition-colors cursor-pointer"
                                    >
                                        About Jerota
                                    </a>
                                </div>
                            </div>

                            {/* Contact */}
                            <div>
                                <h4 className="font-semibold mb-4 text-[#F5F5F5] text-lg">
                                    Contact us
                                </h4>
                                <div className="space-y-4">
                                    <a
                                        href="https://x.com/jerotaxyz"
                                        className="flex items-center gap-3 text-gray-400 hover:text-[#2EAF4E] transition-colors cursor-pointer"
                                    >
                                        <Twitter className="text-primary h-5 w-5" />
                                        jerotaxyz
                                    </a>
                                    <a
                                        href="mailto:jerotaxyz@gmail.com"
                                        className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors cursor-pointer"
                                    >
                                        <Mail className="text-primary h-5 w-5" />
                                        jerotaxyz@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center sm:text-left">
                            © Jerota All Rights Reserved
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-end gap-6">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-primary transition-colors text-sm cursor-pointer"
                            >
                                Terms and conditions
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-primary transition-colors text-sm cursor-pointer"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
