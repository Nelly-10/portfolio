import Header from "../general/Header";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
    return (
        <section id="projects">
            <Header title="Recent Projects" />
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
                <div data-aos="fade-right">
                    <ProjectCard
                        title="Real-Time Analytics Dashboard"
                        imagePath="/images/p1.png"
                        description="Developed a responsive admin dashboard with real-time analytics and dynamic data visualization. Implemented user management features and interactive charts to improve data insights and usability. Built using NextJs, React, Tailwind CSS, and Recharts."
                        link="https://chat-app-o4ip.onrender.com/"
                    />
                </div>

                <div data-aos="fade-left">
                    <ProjectCard
                        title="Horizon Banking Website"
                        imagePath="/images/p2.png"
                        description="Experience modern banking designed around you. Manage your accounts, transfer funds, pay bills, and track your financial goals—all securely and conveniently from one platform. Your money, simplified and protected."
                        link="https://chat-app-o4ip.onrender.com/"
                    />
                </div>

                <div data-aos="fade-right">
                    <ProjectCard
                        imagePath="/images/p3.webp"
                        title="Modern Landing Page"
                        description="High-conversion marketing page with animated components optimized performance, and SEO best practices. Built with Next.js and Framer Motion."
                        link="https://chat-app-o4ip.onrender.com/"
                    />
                </div>

                <div data-aos="fade-left">
                    <ProjectCard
                        imagePath="/images/p4.webp"
                        title="Modern SAAS Website"
                        description="Full-featured software-as-a-service platform with subscription management, user onboarding, and payment integration using Stripe."
                        link="https://chat-app-o4ip.onrender.com/"
                    />
                </div>
            </div>
        </section>
    )
}
