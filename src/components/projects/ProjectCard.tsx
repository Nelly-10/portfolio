
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
    imagePath: string,
    title: string,
    description: string,
    link: string,
}
export default function ProjectCard({ imagePath, title, description, link }: ProjectCardProps) {
    return (
        <Link href={link} target="_blank">
            <div className="cursor-pointer">
                <Image
                    src={imagePath}
                    alt="project-image"
                    width={800}
                    height={600}
                    className="rounded-lg"
                />
                <p className="my-4 text-xl sm:text-2xl font-semibold text-gray-200">{title}</p>
                <p className="font-medium text-gray-400">{description}</p>
            </div>

        </Link>
    )
}
