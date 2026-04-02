import Header from "../general/Header";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
    return (
        <section id="projects">
            <Header title="Recent Projects" />
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
                <div data-aos="fade-right">
                    <ProjectCard
                        title="Modern Dashboard UI"
                        imagePath="/images/p1.webp"
                        description="A responsive admin dashboard with data visualization charts, user management, real-time analytics. Built with React, Tailwind CSS, Recharts."
                        link=""
                    />
                </div>

                <div data-aos="fade-left">
                    <ProjectCard
                        title="Modern Education Website"
                        imagePath="/images/p2.webp"
                        description="An interactive learning platform with course catalogs, student dashboards, and progress tracking. Features video integration and quiz functionality."
                        link=""
                    />
                </div>

                <div data-aos="fade-right">
                    <ProjectCard
                        imagePath="/images/p3.webp"
                        title="Modern Landing Page"
                        description="High-conversion marketing page with animated components optimized performance, and SEO best practices. Built with Next.js and Framer Motion."
                        link=""
                    />
                </div>

                <div data-aos="fade-left">
                    <ProjectCard
                        imagePath="/images/p4.webp"
                        title="Modern SAAS Website"
                        description="Full-featured software-as-a-service platform with subscription management, user onboarding, and payment integration using Stripe."
                        link=""
                    />
                </div>
            </div>
        </section>
    )
}
