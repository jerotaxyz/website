import { Button } from './button'

export function JoinWaitList() {
    return (
        <form
            className="w-full max-w-md sm:max-w-lg mb-2"
            action="https://formsubmit.co/jerotaxyz@gmail.com"
            method="POST"
        >
            {/* parent wrapper holds border, bg, and focus ring */}
            <div className="flex flex-row items-center w-full rounded-full border-2 border-border bg-background focus-within:ring-1 focus-within:ring-primary/50 focus-within:border-primary/50">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-3 bg-transparent rounded-full focus:outline-none text-foreground placeholder:text-muted-foreground w-full"
                    required
                />
                <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />
                {/* <input type="hidden" name="_subject" value="New waitlist submission" /> */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Thank you for joining Jerota's waitlist 🎉" />
                <Button
                    size="lg"
                    type="submit"
                    className="btn-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 cursor-pointer sm:w-auto sm:mr-[1.5px] mr-[2px]"
                >
                    Join waitlist
                </Button>
            </div>
        </form>
    )
}
