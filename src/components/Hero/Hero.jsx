import { motion } from "framer-motion";

const Hero = () => {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            }
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }
    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
                staggerChildren: 0.1,
            }
        },
    }

    return ( 
        <div className="h-[calc(100vh-100px)] overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132] relative">
            <div className="max-w-full h-[100%] mx-[200px]">
            <motion.div 
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="h-[100%] w-[50%] flex flex-col justify-center gap-[20px]">
                <motion.h2 
                variants={textVariants}
                className="text-[20px] text-[rebeccapurple] tracking-[10px] font-bold">HARVEY TYLER</motion.h2>
                <motion.h1 
                variants={textVariants}
                className="text-[60px] font-bold">Web developer and UI designer</motion.h1>
                <div>
                    <motion.button 
                    variants={textVariants}
                    className="p-[15px] text-[15px] border-solid border-[1px] border-white rounded-[10px] mr-[20px]">
                        See the Latest Works
                    </motion.button>
                    <motion.button 
                    variants={textVariants}
                    className="p-[15px] text-[15px] border-solid border-[1px] border-white rounded-[10px] mr-[20px]">
                        Contact Me
                    </motion.button>
                </div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" className="w-[40px]"/>
            </motion.div>
            </div>
            <motion.div 
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            className="absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] w-[50%] font-bold">
                Writer Content Creator Influencer
            </motion.div>
            <div className="h-[100%] w-[300px] lg:w-[560px] absolute top-0 right-0">
                <img src="/hero.png"/>
            </div>
        </div>
     );
}
 
export default Hero;