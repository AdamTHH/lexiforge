import { motion } from "framer-motion";

const IconButton = ({ onClick, children, isBig }: any) => {
    return (
        <motion.button
            whileTap={{ opacity: 0.6, scale: 0.85 }}
            whileHover={{ opacity:0.6 }}
            transition={{ duration: 0.05 }}
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={onClick}
            className={`bg-transparent text-black dark:text-white size-10 items-center justify-center ${isBig ? 'text-3xl' : 'text-2xl'} flex`}
            >
            {children}
        </motion.button>

    )
}

export default IconButton;