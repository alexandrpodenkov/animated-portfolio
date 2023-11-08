import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
    return ( 
        <div className="h-[100px] max-w-full">
            <Sidebar/>
            <div className="h-[100%] max-w-full flex items-center justify-between mx-[40px] lg:mx-[200px]">
                <motion.span 
                initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}} 
                transition={{duration: 0.5}}
                className="font-bold text-[14px]">
                    Alexander Podenkov
                </motion.span>
                <div className="flex gap-[20px]">
                    <a href="/"><img className="w-[18px] h-[18px]" src="/facebook.png"/></a>
                    <a href="/"><img className="w-[18px] h-[18px]" src="/instagram.png"/></a>
                    <a href="/"><img className="w-[18px] h-[18px]" src="/youtube.png"/></a>
                    <a href="/"><img className="w-[18px] h-[18px]" src="/dribbble.png"/></a>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;