import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/home/hero/HeroSection";
import ServiceSection from "@/components/services/ServiceSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ResumeSection from "@/components/resume/ResumeSection";
import SkillSection from "@/components/skills/SkillSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import AnimationLayout from "../../layout/AnimationLayout";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <ServiceSection />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />
      <TestimonialsSection />
      <ContactSection />
      <Toaster />
    </AnimationLayout>

  );
}
