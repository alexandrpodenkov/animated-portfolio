import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const items = [
    {
    id: 1,
    title: "React Commerce",
    img: "https://images.unsplash.com/photo-1687295602900-8767fbf06843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.unsplash.com/photo-1692736933712-c757798b689b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.unsplash.com/photo-1692355147175-55eb5df57435?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
    id: 4,
    title: "Music App",
    img: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]

const Single = ({ item }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"] 
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container flex justify-center items-center max-w-full h-screen overflow-hidden">
            <div className="wrapper max-w-[1366px] h-screen m-auto flex gap-[50px] items-center justify-center">
                <div style={{ flex: 1 }} className="h-[50%]">
                    <img ref={ref} className="w-[100%] h-[100%] object-cover" src={item.img}></img>
                </div>
                <motion.div style={{y, flex: 1 }} className="textcontainer flex flex-col gap-[30px]">
                    <h2 className="text-[60px]">{item.title}</h2>
                    <p className="text-[gray] text-[17px]">{item.description}</p>
                    <button className="bg-[orange] border-none rounded-[10px] w-[150px] h-[40px] text-black">See Demo</button>
                </motion.div>
            </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref, 
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return ( 
        <div className="relative" ref={ref}>
            <div className="progress sticky top-0 left-0 pt-[50px] text-center text-[orange] text-[36px]">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressbar h-[10px] bg-white"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id}/>
            ))}
        </div>
     );
}
 
export default Portfolio;