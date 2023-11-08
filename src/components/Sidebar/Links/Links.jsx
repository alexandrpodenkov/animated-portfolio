import { motion } from "framer-motion";

const Links = () => {
    const items = ["Hompege", "Services", "Portfolio", "Contact", "About",]

    const variants = {
        open: {
            transition: {
                straggerChildren: 0.1,
            }   
        },
        closed: {
            transition: {
                straggerChildren: 0.05,
                staggerDirection: -1,
            }            
        }   
    }

    const itemsVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0,
        }   
    }

    return ( 
        <motion.div 
        variants={variants}
        className="absolute w-[100%] h-[100%] flex flex-col items-center justify-center gap-[20px]">
            {items.map(item => (
                <motion.a variants={itemsVariants} 
                whileHover={{scale: 1.1}} 
                whileTap={{scale: 0.95}} 
                href={`#${item}`} 
                className="text-[30px]" 
                key={item}>
                    {item}
                </motion.a>
            ))}
        </motion.div>
     );
}
 
export default Links;