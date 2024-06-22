import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const PhantomWord = ({ wordData, isVisible }: any) => {
    const x = useMotionValue(-50);
    const y = useMotionValue(-50);

    useEffect(() => {
        const updatePosition = (e: any) => {
            const newX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
            const newY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
            x.set(newX);
            y.set(newY);
        };

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("touchmove", updatePosition);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("touchmove", updatePosition);
        };
    }, []);

    return (
        <motion.div
            className={`${isVisible ? "visible" : "invisible"}`}
            style={{ y: y, x: x }}
        >
            <div
                style={{ backgroundImage: `url(${wordData.img})` }}
                className={`
            bg-neutral-200 text-black border-neutral-300 
            dark:bg-neutral-900 dark:text-white dark:border-neutral-800
            border-2 bg-cover bg-center bg-no-repeat rounded-xl p-3 select-none inline-block justify-center cursor-grabbing items-center relative shadow-md overflow-hidden translate-x-[-50%] translate-y-[-50%]`}>
                <div className="relative flex rounded-md px-1 overflow-hidden backdrop-blur-lg">
                    <div className="absolute inset-0 bg-white opacity-80 dark:bg-black dark:opacity-60 z-10">
                    </div>
                    <p className='text-center w-full wordtitle inset-0 z-20 relative'>{wordData.title}</p>
                </div>

            </div>
        </motion.div>
    )
}

export default PhantomWord;