import { useState, useEffect, FC } from 'react';
import DraggableComponent from './components/DraggableComponent';
import { v4 as uuidv4 } from 'uuid';
import { IWord, IWordData, IWordOnCanvas } from './Interfaces';
import defaultWords, { emptyWordInLibrary } from './assets/defaultLibrary';
import { loadMode, loadTheme, loadWordLibrary, loadWords, updateWordLibrary, updateWords } from './services/loadFromStorage';
import { defaultCombinationsAsList } from './assets/defaultCombinations';
import { FaRegMoon } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import PhantomWord from './components/PhantomWord';
import SearchBar from './components/SearchBar';
import { TbPencilPlus, TbWiperWash } from 'react-icons/tb';
import ResetModal from './components/Modals/ResetModal';
import { Tooltip } from '@chakra-ui/react';
import AddNewWordModal from './components/Modals/AddNewWordModal';
import IconButton from './components/IconButton';
import WordLibraryVirtualized from './components/WordLibraryVirtualized';
import { motion } from 'framer-motion';

const App: FC = () => {

  const [words, setWords] = useState<IWordOnCanvas[]>(loadWords());

  const [wordLibrary, setWordLibrary] = useState<IWord[]>(loadWordLibrary());

  const [searchBar, setSearchBar] = useState("")

  const [themeString, setThemeString] = useState(loadTheme());

  const [mode, setMode] = useState(loadMode())

  const [phantomWord, setPhantomWord] = useState({
    isVisible: false,
    wordData: emptyWordInLibrary.wordData,
  })

  useEffect(() => {
    updateWords(words)
    console.log(import.meta.env.VITE_ANTHROPIC_API_KEY)
  }, [words]);

  useEffect(() => {
    let wordLibraryNoErrors = wordLibrary.map((w) => {
      if (w.wordData.img === "error") {
        w.wordData.img = "";
        return w;
      }
      return w;
    })
    updateWordLibrary(wordLibraryNoErrors);
  }, [wordLibrary]);

  useEffect(() => {
    localStorage.setItem('mode', mode || "");
  }, [mode]);

  const handlePositionChange = (id: any, newX: number, newY: number) => {
    let updateState = false;
    let nearDistance = 70;
    for (let j = 0; j < words.length; j++) {
      if (id !== words[j].canvasID) {
        if (
          Math.abs(newX - words[j].x) < nearDistance &&
          Math.abs(words[j].x - newX) < nearDistance &&
          Math.abs(newY - words[j].y) < nearDistance &&
          Math.abs(words[j].y - newY) < nearDistance
        ) {
          if (!words[j].isSelected) {
            words[j].isSelected = true
            findInWords(id).isSelected = true;
            updateState = true;
          }
          break;
        } else {
          if (words[j].isSelected) {
            words[j].isSelected = false;
            findInWords(id).isSelected = false;
            updateState = true;
          }
        }
      }
    }

    if (updateState)
      setWords([...words])
  };

  const handleDragEnd = (id: any, newX: any, newY: any) => {
    const word1: IWordOnCanvas = findInWords(id)

    if (!word1.isSelected) {
      word1.x = newX; word1.y = newY;
      let asd = words;
      if (window.innerWidth >= 1024) {
        if (newX < 350)
          asd = words.filter(w => w.canvasID !== id);
      } else {
        if (newY > window.innerHeight - 192)
          asd = words.filter(w => w.canvasID !== id);
      }
      setWords([...asd])
      return;
    }

    let otherId = "";
    words.forEach((w) => {
      if (w.canvasID !== id && w.isSelected === true) {
        otherId = w.canvasID
      }
    });

    const word2: IWordOnCanvas = findInWords(otherId);

    const word1Data = findInWordLibrary(word1.title).wordData
    const word2Data = findInWordLibrary(word2.title).wordData
    const XforNewWord = word2.x + (newX - word2.x) / 2
    const YforNewWord = word2.y + (newY - word2.y) / 2

    let newWords = words.filter(item => item.canvasID !== word1.canvasID && item.canvasID !== word2.canvasID);

    newWords.forEach(w => {
      w.isSelected = false
    });

    const newWordID = uuidv4()
    const newWord: IWordOnCanvas = {
      title: "",
      canvasID: newWordID,
      x: XforNewWord,
      y: YforNewWord,
      isSelected: false,
      startPrompt: ""
    }

    let isANewWord = true;

    wordLibrary.forEach((word) => {
      word.combinationOf.forEach((wordPair) => {
        if ((wordPair[0] === word1.title && wordPair[1] === word2.title) || (wordPair[1] === word1.title && wordPair[0] === word2.title)) {
          isANewWord = false;
          newWord.title = word.wordData.title;
          return;
        }
      })
    })

    if (isANewWord) {
      const promptforNewWord = `{"word1":"${word1Data.title}","isARealWord":${word1Data.isARealWord},"description":"${word1Data.description}"},{"word2":"${word2Data.title}","isARealWord":${word2Data.isARealWord},"description":"${word2Data.description}"}`
      newWord.startPrompt = promptforNewWord
    }

    newWords.push(newWord)

    setWords([...newWords]);
  }

  const handleWordGenerated = (canvasId: string, wordData: IWordData, newCombinationOf: string[][]) => {

    const updateableWord = findInWords(canvasId)
    updateableWord.startPrompt = "";
    updateableWord.title = wordData.title;

    if (findInWordLibrary(wordData.title) != null) {
      console.log("duplicate created")


      findInWordLibrary(wordData.title).combinationOf.push(newCombinationOf[0])

      setWordLibrary([...wordLibrary])
      setWords([...words])

      return;
    }

    setWordLibrary((wl) => [...wl, {
      wordData: wordData,
      combinationOf: newCombinationOf
    }]);
    setWords([...words])
  }

  const handleImageGenerated = (canvasId: string, imgBase64: string) => {

    const wordTitle = findInWords(canvasId).title

    const updateableWord = findInWordLibrary(wordTitle)
    updateableWord.wordData.img = imgBase64
    console.log(updateableWord)

    setWordLibrary((wl) => [...wl])
  }

  const addWord = (x: number, y: number, title: string) => {
    const id = uuidv4()

    const newWord: IWordOnCanvas = {
      title: title,
      canvasID: id,
      x: x,
      y: y,
      isSelected: false,
      startPrompt: ""
    };

    setWords(([...words, newWord]));
  };

  const createWord = (title: string) => {
    if (findInWordLibrary(title) != null) {
      addWord(400, 400, title)
      return;
    }

    const asd: IWord = {
      wordData: {
        title: title,
        description: "",
        img: "",
        isARealWord: false
      },
      combinationOf: [[]]
    }

    setWordLibrary([...wordLibrary, asd]);

    addWord(400, 400, title)
  }

  const findInWords = (id: string) => {
    return words.find((word) => word.canvasID === id) as IWordOnCanvas;
  };
  const findInWordLibrary = (title: string) => {
    const result: any = wordLibrary.find((word: IWord) => word.wordData.title === title) || null;

    return result as IWord
  }

  function handleDragStartFromLibrary(wordData: IWordData) {
    //timeout needed, because of mobile bug: TouchMove in PhantomWord is triggered with a slight delay
    setTimeout(() => {
      setPhantomWord({ ...phantomWord, wordData: wordData, isVisible: true })
    }, 50);
  }

  function handleDragEndFromLibrary(e: any) {
    const newX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
    const newY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
    addWord(newX - 60, newY - 20, phantomWord.wordData.title)

    setPhantomWord({ ...phantomWord, isVisible: false })
  }

  function handleClickOnLibrary(title: string) {
    let x = 400, y = 400;
    if (window.innerWidth >= 1024) {
      x = Math.ceil(Math.random() * (window.innerWidth - window.innerWidth * (1 / 3)) + 400);
      y = Math.ceil(Math.random() * (window.innerHeight - 200) + 100);
    } else {
      x = Math.ceil(Math.random() * (window.innerWidth - 200) + 50);
      y = Math.ceil(Math.random() * (window.innerHeight - 200) - 100);
    }
    addWord(x, y, title)
  }

  return (
    <div id='main-canvas' className={'bg-white dark:bg-neutral-950 w-screen h-screen dark:[color-scheme:dark] ' + themeString}>
      <div id='canvas-design' className='absolute inset-0 opacity-10 dark:opacity-10 select-none'></div>
      <WordLibraryVirtualized
        wordLibrary={wordLibrary.filter((w: any) => w.wordData.title.toLowerCase().includes(searchBar.toLowerCase()))}
        handleDragStartFromLibrary={handleDragStartFromLibrary}
        handleClickOnLibrary={handleClickOnLibrary}
        handleDragEndFromLibrary={handleDragEndFromLibrary} />

      <div className='absolute
      lg:w-[352px] lg:left-4 lg:bottom-5
      bottom-[195px] left-0 w-6/12
      '>
        <SearchBar
          searchChange={setSearchBar}
          searchBar={searchBar} />
      </div>

      {wordLibrary.length === 4
      ? <p className='lg:text-5xl absolute top-1/2 left-1/2 wordtitle select-none z-0 lg:translate-x-[0%] translate-x-[-50%] translate-y-[-50%] text-slate-500 opacity-25 lg:w-1/3 break-words w-4/5 text-3xl'>Drag the words to the canvas and combine them!</p> : <></>}

      <div className='absolute
      lg:left-96 lg:bottom-0 m-3 right-0'>
        {mode === "normal"
          ? <Tooltip label="Unlock the built in words + create your own!">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{opacity:0.8}}
              transition={{ duration: 0.05 }}
              onClick={() => { setMode("playground"); setWordLibrary(wordLibrary.concat(defaultCombinationsAsList().filter((n) => wordLibrary.every((value) => value.wordData.title !== n.wordData.title)))) }} className="bg-transparent items-center justify-center flex">
              <p className='kode-mono-semibold text-neutral-500 dark:text-neutral-400 select-none'>
                ✨ Playground
              </p>
            </motion.button>
          </Tooltip>

          : <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{opacity:0.8}}
            transition={{ duration: 0.05 }}
            onClick={() => {
            const discoveredWords = wordLibrary.filter((n) => defaultCombinationsAsList().every((value) => value.wordData.title !== n.wordData.title));
            setWordLibrary(discoveredWords);
            setMode("normal");
            setWords(words.filter((w) => discoveredWords.some((value) => value.wordData.title === w.title)))
          }}>
            <p className='kode-mono-semibold text-neutral-500 dark:text-neutral-400 select-none'>
              🔍 Normal mode
            </p></motion.button>}
      </div>

      <div id="icon-container" className='flex-wrap flex-row space-x-1 space-y-1 p-1 absolute
      lg:flex-col lg:left-96 lg:top-0 lg:bottom-auto lg:w-min lg:space-x-0 
      right-0 bottom-48'>
        <div className='inline-flex'>
          <ResetModal onConfirm={() => { setWords([]); setWordLibrary(defaultWords); setMode("normal") }} theme={themeString}>
            <IconButton>
              <FaRegTrashCan />
            </IconButton>
          </ResetModal>
        </div>

        <div className='inline-flex'>
          <IconButton onClick={() => {
            if (themeString === "") {
              setThemeString("dark")
              localStorage.theme = "dark";
            }
            else {
              setThemeString("")
              localStorage.theme = "";
            }
          }}>
            <FaRegMoon />
          </IconButton>
        </div>

        <div className='inline-flex'>
          <IconButton onClick={() => setWords([])}>
            <TbWiperWash />
          </IconButton>
        </div>

        {mode === "playground"
          ? <div className='inline-flex'>
            <AddNewWordModal onConfirm={(word: any) => createWord(word)} theme={themeString}>
              <IconButton isBig>
                <TbPencilPlus />
              </IconButton>
            </AddNewWordModal>
          </div>
          : <></>}

      </div>

      {words.map((item: IWordOnCanvas) => (
        <DraggableComponent
          key={item.canvasID}
          id={item.canvasID}
          onPositionChange={handlePositionChange}
          onDragEnd={handleDragEnd}
          onWordGenerated={handleWordGenerated}
          onImageGenerated={handleImageGenerated}
          isSelected={item.isSelected}
          startX={item.x}
          startY={item.y}
          startWordData={findInWordLibrary(item.title) != null ? findInWordLibrary(item.title).wordData : emptyWordInLibrary.wordData}
          startPrompt={item.startPrompt}
        />
      ))}

      <PhantomWord
        wordData={phantomWord.wordData}
        isVisible={phantomWord.isVisible}
      />
    </div >
  );
};
export default App;