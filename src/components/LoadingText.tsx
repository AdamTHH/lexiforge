import { useEffect, useState } from "react"

const LoadingText = () => {
    const [text, setText] = useState("‎")

    useEffect(() => {
        nextState()
    }, [text])

    async function nextState() {
        await new Promise((resolve) => setTimeout(resolve, 500));
        switch (text) {
            case "‎":
                setText(".")
                break;
            case ".":
                setText("..")
                break;
            case "..":
                setText("...")
                break;
            case "...":
                setText("‎")
                break;
        }
    }

    return <>{text}</>
}

export default LoadingText;