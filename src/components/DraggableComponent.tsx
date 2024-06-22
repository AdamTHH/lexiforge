import { useState, useEffect, useMemo, memo, useRef } from 'react';
import { IWordData } from '../Interfaces';
import generateNewWord from '../services/generateNewWord';
import generateImage from '../services/generateImage';
import LoadingText from './LoadingText';
import { defaultCombinations } from '../assets/defaultCombinations';
import { TbReload } from "react-icons/tb";
import { motion } from "framer-motion"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react'

const DraggableComponent: any = ({ id, onPositionChange, onDragEnd, onWordGenerated, onImageGenerated, isSelected, startX, startY, startPrompt, startWordData }: any) => {
  const [position, setPosition] = useState({ x: startX, y: startY });

  const [wordData, setWordData] = useState<IWordData>(startWordData)

  const [requireImage, setRequireImage] = useState(false)

  const [isDragging, setIsDragging] = useState(false)

  const eRef: any = useRef(null);

  useEffect(() => {
    if (startPrompt !== "") {
      const temp: string[] = startPrompt.split('"');
      const word1 = temp[3]
      const word2 = temp[13]

      let isADefaultWord = false;
      defaultCombinations.forEach(word => {
        word.combinationOf.forEach(wordPair => {
          if ((wordPair[0] === word1 && wordPair[1] === word2) || (wordPair[1] === word1 && wordPair[0] === word2)) {

            isADefaultWord = true;
            const defaultWord: IWordData = {
              title: word.title.toLowerCase(),
              description: "",
              img: "",
              isARealWord: true
            }

            console.log("DAEFASDAS", defaultWord)

            setWordData(defaultWord)
            return;
          }
        })
      });

      if (!isADefaultWord)
        generateWord(startPrompt)
    }
  }, [])

  useEffect(() => {
    if (startWordData.title !== "" || wordData.title === "" || wordData.title === startWordData.title)
      return;

    const temp: string[] = startPrompt.split('"');
    const word1 = temp[3]
    const word2 = temp[13]

    onWordGenerated(id, wordData, [[word1, word2]])
    setRequireImage(true)
  }, [wordData.title])

  const generateWord = async (startPrompt: string) => {
    try {
      const result = await generateNewWord(startPrompt)
      console.log(result.content[0].text)
      let generatedWordData = JSON.parse(result.content[0].text);

      delete Object.assign(generatedWordData, { ["title"]: generatedWordData["newWord"] })["newWord"];
      delete Object.assign(generatedWordData, { ["description"]: generatedWordData["sdprompt"] })["sdprompt"];

      generatedWordData.title = generatedWordData.title.toLowerCase();
      generatedWordData.img = "";

      setWordData(generatedWordData)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    if (requireImage) {
      if (wordData.description == "") {
        genImage(wordData.title + ", 8k rendered in unreal engine 5, realistic")
      } else {
        genImage(wordData.description)
      }
    }
  }, [requireImage])

  const genImage = async (description: string) => {
    const result: any = await generateImage(description)
    //const result = "https://fastly.picsum.photos/id/237/250/250.jpg?hmac=tNmO3YWXALG9JM81cghI9nflo3dWc3e5vlNsf_jmKWw"

    wordData.img = result
    setWordData({ ...wordData })
    onImageGenerated(id, result)
    setRequireImage(false)
  }

  const MemodImageState = useMemo(() => {
    const ImageState = () => {
      if (wordData.img !== "")
        return wordData.img === "error" ? <p className='text-center w-full'>❌</p> : <img src={wordData.img} className='rounded-lg select-none' draggable="false" onClick={() => {if (!isDragging) setIsModalOpen(true)}} />

      if (requireImage)
        return <p className='text-center w-full text-black dark:text-white'><LoadingText /></p>

      if (wordData.title === "")
        return <></>

      if (wordData.title != "" && !requireImage)
        return <button className='text-black dark:text-white' onClick={() => setRequireImage(true)}><TbReload /></button>
      return <p>idk</p>
    }

    return memo(ImageState)
  }, [wordData.img, requireImage, wordData.title, isDragging])

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ scale: 0, originX: `${Math.sqrt(Math.abs(position.x))}px`, originY: `${Math.sqrt(Math.abs(position.y))}px` }}
        animate={{ scale: 1 }}

        whileTap={{ scale: 0.90 }}
        transition={{ duration: 0.3, type: "spring" }}
        style={{ x: position.x, y: position.y, }}
        drag
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDrag={() => onPositionChange(id, eRef.current.getBoundingClientRect().x, eRef.current.getBoundingClientRect().y)}
        onDragEnd={() => {
          const pos = eRef.current.getBoundingClientRect();
          onDragEnd(id, pos.x, pos.y);
          setPosition({ x: pos.x, y: pos.y })
          setIsDragging(false)
        }}
        className={`${isDragging ? "z-20" : "z-10"} absolute`}
      >
        <div ref={eRef} style={{ backgroundImage: `url(${wordData.img})` }} className={`
        ${!isDragging && isSelected ? "scale-90" : ""}
        ${isSelected ? "border-neutral-500 dark:border-neutral-600" : "border-neutral-300 dark:border-neutral-800"}
       bg-neutral-200
       dark:bg-neutral-900
       border-2 rounded-xl lg:w-36 w-28 p-1 select-none absolute cursor-grab overflow-hidden break-words text-center text-sm lg:text-base shadow-lg`}>
          {wordData.img !== "" && wordData.img !== "error" ? <div className="absolute z-10 inset-0 bg-white opacity-65 dark:bg-black dark:opacity-50" /> : <></>}
          <div className='relative z-20'>
            <p className={`wordtitle text-black dark:text-white`}>{wordData.title === "" || wordData.title.includes("combine: ") ? <LoadingText /> : wordData.title}</p>
            <MemodImageState />
          </div>
        </div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size={window.innerWidth >= 1024 ? "lg" : "sm"} isCentered={window.innerWidth >= 1024 ? false : true}>
        <ModalOverlay />
        <ModalContent backgroundColor={"transparent"} shadow={"none"}>
          <ModalBody>
            <img src={wordData.img} alt="image" className='rounded-lg' />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>



  );

};

export default DraggableComponent;