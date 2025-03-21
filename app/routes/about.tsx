import type { Route } from "./+types/about"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "About us" },
        {
            name: "Who behind this?",
            content:
                "Adi Nugraha Putra is a web developer and designer who loves to create beautiful and functional websites.",
        },
    ]
}

export default function About() {
    return (
        <div className="pt-24 pb-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-semibold text-gray-900 mb-6 pt-10">About This Website</h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                    This website uses the <span className="font-semibold text-indigo-600">REST Countries API</span> to
                    display comprehensive information about countries from around the world.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Explore our data to learn about country names, capitals, regions, populations, flags, and much more.
                    Whether you&apos;re curious about a particular country or looking for insights about global regions,
                    our interactive explorer makes it easy.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our goal is to build a fully responsive and modern web application using the latest technologies,
                    including React Router v7 for seamless routing and Tailwind CSS for a beautiful, responsive user
                    interface.
                </p>
            </div>
        </div>
    )
}
