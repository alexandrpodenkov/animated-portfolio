import { useState } from "react";
import ToggleButton from "./ToggleButton/ToggleButton";
import Links from "./Links/Links";
import { motion } from "framer-motion";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffnes: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                dealay: 0.5,
                type: "spring",
                stiffnes: 400,
                damping: 40,
            }
        } 
    }

    return ( 
        <motion.div 
        animate={open? 'open' : 'closed'}
        variants={variants} 
        className="flex flex-col fixed items-center justify-center bg-white text-black z-40">
            <motion.div 
            variants={variants} 
            className="fixed top-0 left-0 bottom-0 w-[400px] bg-white ">
                <Links/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
     );
}
 
export default Sidebar;