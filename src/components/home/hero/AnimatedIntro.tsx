import Typewriter from "typewriter-effect";

export default function AnimatedIntro() {
    return (
        <div data-aos="fade-up" data-aos-delay="400" className="text-lg sm:text-2xl h-30 px-8 text-center font-medium text-gray-400">
            <p className="my-4">Hi, I&apos;m Nelson - A passionate</p>
            <span className="text-indigo-400 font-bold">
                <Typewriter options={{
                    strings: [
                        "Fullstack Developer",
                        "Nextjs Developer",
                        "React Expert",
                        "Tech Enthusiast",
                        "UI/UX Designer"
                    ],
                    autoStart: true,
                    loop:true,
                    delay:75,
                    deleteSpeed:50,
                    wrapperClassName:"inline-block"
                }}/>
            </span>
        </div>
    )
}
