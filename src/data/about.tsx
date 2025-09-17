import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const about = {
  fullName: "Jonel Teaño",
  bio: [
    <p key={"1"} className="leading-relaxed">
      🎓 I am a{" "}
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="font-semibold cursor-pointer">
              Bachelor of Science in Computer Science Graduate
            </span>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="bg-background p-2 rounded-md">
            <div className="font-semibold text-xs text-primary-dark">Cavite State University – Silang Campus</div>
            <div className="h-2" />
            <div className="text-xs text-black">
                🏅  Graduated With Honors SHS Commencement 2021
            </div>
            <div className="text-xs text-black">
                📅  Graduated September 2025
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>{" "}
      with a strong foundation in full-stack development and software engineering.
      I am passionate about creating impactful web applications and security-driven systems.
    </p>,
    <p key={"2"} className="leading-relaxed">
      💻 My technical skill set includes JavaScript, TypeScript, Node.js, Express,
      Next.js, React, Angular, ASP.NET Core, SQL, MongoDB, and more. I&apos;ve also
      integrated third-party services like Stripe, OAuth 2.0, JWT Authentication,
      and Mapbox API into production-ready applications.
    </p>,
    <p key={"3"} className="leading-relaxed">
      🚀 Professionally, I&apos;ve worked as a{" "}
      <span className="font-semibold">Software Developer Freelancer</span>, delivering
      e-commerce platforms, management systems, and desktop apps for clients. I also
      completed an{" "}
      <span className="font-semibold">internship at Sun Life Financial Asia Services</span>,
      where I supported network engineers, troubleshooted WAN/LAN issues, and built a
      deeper understanding of enterprise IT systems.
    </p>,
    <p key={"4"} className="leading-relaxed">
      🔬 My academic and project experience includes{" "}
      <span className="font-semibold">Blockchain-Based IDS for IoT Networks</span>,
      security tools with Python and Solidity, crowdfunding platforms with Stripe,
      business management systems, and ordering applications. These projects allowed
      me to combine my knowledge in{" "}
      <span className="font-semibold">software engineering, cybersecurity, and web development</span>.
    </p>,
    <p key={"5"} className="leading-relaxed">
      🎮 Outside of coding, I enjoy playing games, exploring new technologies,
      reading about AI, machine learning, and blockchain, and continuously finding ways
      to improve my problem-solving skills and creativity.
    </p>,
  ],
}

export default about
