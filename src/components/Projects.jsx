import { motion } from "framer-motion"
import { PROJECTS } from "../constants"

export default function Projects() {
    const projectVarients = {
        hidden: {
            opacity: 0, scale: 0.8, rotate: -40, y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                bounce: 0.4,
            }
        }
    }
    return (
        <section className="px-6 py-10 " id="work">
            <h1 className="text-4xl md:text-4xl lg:text-6xl tracking-tight font-medium " style={{
                textDecoration: "none",
                paddingBottom: "10px"
            }}>
                Work
            </h1>
            <div className="h-1 w-24 mb-8 bg-white"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative rounded-lg overflow-hidden h-[500px] transition transform"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={projectVarients}
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300" />
                        <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-black/30 text-white">
                            <h2 className="text-2xl font-medium mb-4">
                                {project.name}
                            </h2>
                            <div className="flex flex-col justify-between">
                                <p className="mb-4 flex flex-grow text-2xl">{project.description}</p>
                                <a href={project.link} target="_blank" rel=" noopener noreffer" className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center">View On Github</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
