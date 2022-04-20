import React, {useEffect} from 'react'
import CommandLine from "@/components/terminal-like/components/CommandLine";
import ResponseLine from "@/components/terminal-like/components/ResponseLine";

interface LineProps {
    type: "cmd" | "res";
    text: string;
    cursor?: boolean;
}

interface Props {
    lines: Array<LineProps>;
    canStart: boolean;
    typingInterval?: number;
    ComputerInterval?: number;
    UserInterval?: number;
}

const RenderLines: React.VFC<Props> = ({
                                           lines,
                                           canStart,
                                           typingInterval = 50,
                                           ComputerInterval = 200,
                                           UserInterval = 1000
                                       }) => {
    const [typedLines, setTypedLines] = React.useState<Array<LineProps>>([])

    const type = () => {
        if (canStart && typedLines.length <= lines.length) {
            const currentLine = typedLines[typedLines.length - 1]
            if (typedLines.length !== 0 && currentLine.text.length < lines[typedLines.length - 1].text.length) {
                if (currentLine.type === "cmd") {
                    let timerId: NodeJS.Timeout
                    const nextChar = lines[typedLines.length - 1].text[currentLine.text.length]

                    const type = () => {
                        const newTypingLines = [...typedLines]
                        newTypingLines[newTypingLines.length - 1] = {
                            ...typedLines[newTypingLines.length - 1],
                            text: currentLine.text.concat(nextChar)
                        }
                        setTypedLines(newTypingLines)
                        clearTimeout(timerId)
                    }
                    const isNewLine = currentLine.text.length === 0
                    timerId = setTimeout(type, isNewLine ? UserInterval : typingInterval)
                } else if (typedLines[typedLines.length - 1].type === "res") {
                    const newTypingLines = [...typedLines]
                    newTypingLines[newTypingLines.length - 1] = {
                        ...typedLines[newTypingLines.length - 1],
                        text: lines[typedLines.length - 1].text
                    }
                    setTypedLines(newTypingLines)
                }
            } else {
                if (typedLines.length < lines.length) {
                    let timerId: NodeJS.Timeout

                    const newLine = () => {
                        const newTypingLines = [...typedLines, {
                            "type": lines[typedLines.length].type,
                            "text": "",
                            "cursor": true
                        }]
                        if (newTypingLines.length > 1) {
                            newTypingLines[newTypingLines.length - 2] = {
                                ...typedLines[newTypingLines.length - 2],
                                cursor: false
                            }
                        }
                        setTypedLines(newTypingLines)
                        clearTimeout(timerId)
                    }

                    timerId = setTimeout(newLine, ComputerInterval)
                } else {
                    return
                }
            }
        }
    }

    // useEffect(type, [])
    useEffect(type, [canStart, typedLines])

    const parser = (line: LineProps) => {
        if (line.type === "cmd") {
            return <CommandLine text={line.text} cursor={line.cursor}/>
        } else if (line.type === "res") {
            return <ResponseLine text={line.text}/>
        }
    }

    return (
        <>
            {typedLines.map(parser)}
        </>
    )
}

export default RenderLines
