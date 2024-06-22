import { useRef, useState, useEffect } from "react";
import WordInLibrary from "./WordInLibrary";
import { ViewportList } from "react-viewport-list";

const WordLibraryVirtualized = ({ wordLibrary, handleDragStartFromLibrary, handleDragEndFromLibrary, handleClickOnLibrary }: any) => {

  const ref = useRef(null);

  const [chunks, setChunks] = useState<any>([]);

  useEffect(() => {
    const chunkSize = 30
    let chunksTemp:any = [];
    for (let i = 0; i < wordLibrary.length; i += chunkSize) {
      chunksTemp.push(wordLibrary.slice(i, i + chunkSize))
    }
    setChunks([...chunksTemp])
  }, [wordLibrary])
  

  return (
    <div className="outline-1 outline absolute overflow-y-auto overflow-x-hidden p-1
    bg-neutral-200 outline-neutral-400
    dark:bg-neutral-900  dark:outline-neutral-600
    lg:h-screen lg:w-96 lg:pb-20
    h-48 w-screen bottom-0" ref={ref}>
      <ViewportList
        viewportRef={ref}
        items={chunks}
        overscan={-15}>
        {(chunk:any, i) => (
          <div className="flex flex-wrap" key={i}>
            {chunk.map((w: any) => (
              <div className='inline-flex mx-1 my-1' key={w.wordData.title}>
              <WordInLibrary
                _wordData={w.wordData}
                onDragStart={handleDragStartFromLibrary}
                onDragEnd={handleDragEndFromLibrary}
                onClickOnLibrary={handleClickOnLibrary} />
            </div>
            ))}
          </div>
        )}
      </ViewportList>
    </div>
  )
}

export default WordLibraryVirtualized;