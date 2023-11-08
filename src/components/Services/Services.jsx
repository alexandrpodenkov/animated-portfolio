import { motion } from "framer-motion";

const Services = () => {
    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            }
        }
    }

    return ( 
        <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate" 
        className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] 
        h-screen flex flex-col justify-between">
            <motion.div 
            variants={variants}
            className="flex self-end items-center gap-[20px]" 
            style={{flex: 1}}>
                <p className="font-extralight text-[16px] text-[gray] text-right">
                    I focus on helping your brand grow
                    <br/>and move forward</p>
                <hr className="w-[400px] border-t-[0.5px] border-solid border-[gray]"/>
            </motion.div>
            <motion.div 
            variants={variants}
            className="title flex flex-col items-center"
            style={{flex: 2}}>
                <div className="flex gap-[30px] items-center">
                    <img className="w-[180px] h-[60px] rounded-[50px] object-cover" src="/people.webp"/>
                    <h1 className="text-[60px] font-thin">
                        <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="flex items-center gap-[30px]">
                    <h1 className="text-[60px] font-thin">
                        <motion.b whileHover={{color: "orange"}}>For your</motion.b> Business.
                    </h1>
                    <button className="w-[180px] h-[60px] text-[14px] text-black rounded-[50px] bg-[orange] border-none">
                        WHAT WE DO?
                    </button>
                </div>
            </motion.div>
            <motion.div 
            variants={variants}
            className="list flex flex-wrap max-w-full m-auto gap-[5px]"
            style={{flex: 2 }}>
                <motion.div
                whileHover={{background: "lightgray", color: "black"}}
                 className="p-[40px] w-[250px] h-[300px] border-[0.1px] border-solid border-[gray] flex flex-col justify-between">
                    <h2>Branding</h2>
                    <p className="text-[12px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad mi 

                         im veniam, quis nostrud exercitation ullamco laboris 
                    </p>
                    <button className="p-[10px] h-[40px] text-[14px] bg-[orange] border-none text-black">Go</button>
                </motion.div>
                <motion.div
                whileHover={{background: "lightgray", color: "black"}}
                 className="p-[40px] w-[250px] h-[300px] border-[0.5px] border-solid border-[gray] flex flex-col justify-between">
                    <h2>Branding</h2>
                    <p className="text-[12px]"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    </p>
                    <button className="p-[10px] h-[40px] text-[14px] bg-[orange] border-none text-black">Go</button>
                </motion.div>
                <motion.div
                whileHover={{background: "lightgray", color: "black"}}
                 className="p-[40px] w-[250px] h-[300px] border-[0.5px] border-solid border-[gray] flex flex-col justify-between">
                    <h2>Branding</h2>
                    <p className="text-[12px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    </p>
                    <button className="p-[10px] h-[40px] text-[14px] bg-[orange] border-none text-black">Go</button>
                </motion.div>
                <motion.div
                whileHover={{background: "lightgray", color: "black"}}
                 className="p-[40px] w-[250px] h-[300px] border-[0.5px] border-solid border-[gray] flex flex-col justify-between">
                    <h2>Branding</h2>
                    <p className="text-[12px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    </p>
                    <button className="p-[10px] h-[40px] text-[14px] bg-[orange] border-none text-black">Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
        
     );
}
 
export default Services;
