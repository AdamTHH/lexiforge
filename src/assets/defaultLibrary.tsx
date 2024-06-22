import { IWord } from "../Interfaces";
import {earthImg, fireImg, humanImg, waterImg} from "./defaultImages";

const defaultWords:IWord[] = [
  {
    "wordData": {
      "title": "human",
      "isARealWord": true,
      "description": "a human being",
      "img": humanImg,
    },
    "combinationOf": [["earth", "life"]]
  },
  {
    "wordData": {
      "title": "earth",
      "isARealWord": true,
      "description": "planet earth",
      "img": earthImg
    },
    "combinationOf": [[]]
  },
  {
    "wordData": {
      "title": "fire",
      "isARealWord": true,
      "description": "",
      "img": fireImg
    },
    "combinationOf": [[]]
  },
  {
    "wordData": {
      "title": "water",
      "isARealWord": true,
      "description": "",
      "img": waterImg
    },
    "combinationOf": [[]]
  },
  /*{
    "wordData": {
      "title": "water",
      "isARealWord": true,
      "description": "fire",
      "img": fireImg
    },
    "combinationOf": []
  }*/
]

export default defaultWords;

const emptyWordInLibrary:IWord = {
  wordData: {
    title: "",
    isARealWord: true,
    description: "",
    img: ""
  },
  combinationOf: [[]]
}

export {emptyWordInLibrary}