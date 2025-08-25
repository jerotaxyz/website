import Logo from '../assets/logo.png'

export default function Headerbar() {
    return (
        <div className="p-4 flex w-4/5 justify-between border-2 rounded-full  bg-[#111111]">
            <img className="w-max" src={Logo} alt="Jerota Logo" />
            <button className="rounded-full border-none">Join Waitlist</button>
        </div>
    )
}
