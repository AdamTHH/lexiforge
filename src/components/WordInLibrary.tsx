import { useRef } from "react";
import { motion } from "framer-motion";

const WordInLibrary = ({ _wordData, onDragStart, onDragEnd, onClickOnLibrary }: any) => {
    const ref = useRef(null);

    return (
        <div className="relative select-none">
            <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.1 }}
                drag
                dragMomentum={false}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                dragElastic={0}
                onDragStart={() => onDragStart(_wordData)}
                onDragEnd={(e) => onDragEnd(e, _wordData.title)}
                onClick={() => onClickOnLibrary(_wordData.title)}>
                <div ref={ref} style={{ backgroundImage: `url(${_wordData.img})` }} className={`
            bg-transparent border-neutral-300
             dark:border-neutral-800
            border-2 bg-cover bg-center bg-no-repeat rounded-xl p-2 lg:p-3 cursor-grab justify-center items-center overflow-hidden shadow-md`}>
                    <div className="flex rounded-md px-1 overflow-hidden backdrop-blur-lg">
                        <div className="absolute inset-0 bg-white opacity-70 dark:bg-black dark:opacity-60 z-10">
                        </div>
                        <p className='wordtitle z-20 text-black dark:text-white'>{_wordData.title.length > 30 ? _wordData.title.slice(0, 30) + "..." : _wordData.title}</p>
                    </div>

                </div>
            </motion.div>

        </div>
    )
}

export default WordInLibrary;