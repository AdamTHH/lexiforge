export interface IWordOnCanvas {
    title: string,
    startPrompt: string;
    canvasID: string;
    x: number;
    y: number;
    isSelected: boolean;
}

export interface IWordData {
    title: string,
    isARealWord: boolean,
    description: string,
    img: string,
}

export interface IWord {
    wordData: IWordData,
    combinationOf: string[][]
}