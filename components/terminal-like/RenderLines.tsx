import React, { useEffect } from 'react'
import CommandLine from '@/components/terminal-like/components/CommandLine'
import ResponseLine from '@/components/terminal-like/components/ResponseLine'

interface LineProps {
  type: 'cmd' | 'res'
  text: string
  cursor?: boolean
}

interface Props {
  lines: Array<LineProps>
  canStart: boolean
  lineClassName?: string
  typingInterval?: number
  ComputerInterval?: number
  UserInterval?: number
}

const RenderLines: React.VFC<Props> = ({
  lines,
  canStart,
  lineClassName,
  typingInterval = 50,
  ComputerInterval = 200,
  UserInterval = 1500
}) => {
  const [typedLines, setTypedLines] = React.useState<Array<LineProps>>([])

  const type = () => {
    if (canStart && typedLines.length <= lines.length) {
      const typedLine = typedLines[typedLines.length - 1]
      const line = lines[typedLines.length - 1]
      if (typedLines.length !== 0 && typedLine.text.length < line.text.length) {
        if (typedLine.type === 'cmd') {
          // eslint-disable-next-line prefer-const
          let timerId: NodeJS.Timeout
          const nextChar = line.text[typedLine.text.length]

          // type a char
          const type = () => {
            const newTypedLines = [...typedLines]
            newTypedLines[newTypedLines.length - 1] = {
              ...typedLine,
              text: typedLine.text.concat(nextChar)
            }
            setTypedLines(newTypedLines)
            clearTimeout(timerId)
          }

          const isNewLine = typedLine.text.length === 0
          timerId = setTimeout(type, isNewLine ? UserInterval : typingInterval)
        } else if (typedLines[typedLines.length - 1].type === 'res') {
          const newTypedLines = [...typedLines]
          newTypedLines[newTypedLines.length - 1] = {
            ...typedLine,
            text: lines[typedLines.length - 1].text
          }
          setTypedLines(newTypedLines)

          // } else if (typedLines[typedLines.length - 1].type === 'loading') {
          // // eslint-disable-next-line prefer-const
          // let timerId: NodeJS.Timeout
          // const nextChar = line.text[typedLine.text.length]
          //
          // // type a char
          // const type = () => {
          //   const newTypedLines = [...typedLines]
          //   newTypedLines[newTypedLines.length - 1] = {
          //     ...typedLine,
          //     text: typedLine.text.concat(nextChar)
          //   }
          //   setTypedLines(newTypedLines)
          //   clearTimeout(timerId)
          // }
          //
          // const isNewLine = typedLine.text.length === 0
          // timerId = setTimeout(type, isNewLine ? UserInterval : typingInterval)
          // }
        }
      } else {
        // create new line
        if (typedLines.length < lines.length) {
          // eslint-disable-next-line prefer-const
          let timerId: NodeJS.Timeout

          const newLine = () => {
            const newTypingLines = [
              ...typedLines,
              {
                type: lines[typedLines.length].type,
                text: '',
                cursor: true
              }
            ]
            // The cursor is only on the last line.
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
        }
      }
    }
  }

  useEffect(type, [canStart, typedLines])

  // parse LineProps to Line component
  const parser = (line: LineProps) => {
    if (line.type === 'cmd') {
      return (
        <CommandLine
          text={line.text}
          cursor={line.cursor}
          className={lineClassName}
        />
      )
    } else if (line.type === 'res') {
      return <ResponseLine text={line.text} className={lineClassName} />
    }
  }

  return <>{typedLines.map(parser)}</>
}

export default RenderLines
