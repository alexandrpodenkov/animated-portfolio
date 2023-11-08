import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return ( 
        <div 
        ref={ref}
        className={`max-w-full h-[100vh] relative flex items-center justify-center overflow-hidden
        ${type === 'services'
        ? "bg-gradient-to-b from-[#111132] to-[#0c0c1d]" 
        : "bg-gradient-to-b from-[#111132] to-[#505064]"}`}
        >
            <motion.h1 
            style={{y: yText}}
            className="font-bold text-[80px]">{type === 'services'? 'What We Do?' : 'What We Did?'}</motion.h1>
            <motion.div className="bg-[url('/mountains.png')] bg-cover bg-bottom w-[100%] h-[100%] absolute z-30">
                {/* mountans */}
            </motion.div>
            <motion.div 
            style={{y: yBg}}
            className={`z-20 bg-cover bg-bottom w-[100%] h-[100%] absolute ${type === 'services'? "bg-[url('/planets.png')]" : "bg-[url('/sun.png')]"}`}>
                {/* planets */}
            </motion.div>
            <motion.div 
            style={{x: yBg}}
            className="z-10 bg-[url('/stars.png')] bg-cover bg-bottom w-[100%] h-[100%] absolute">
                {/* stars */}
            </motion.div>
        </div>
     );
}
 
export default Parallax;