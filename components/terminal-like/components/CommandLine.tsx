import React from 'react'
import Line from '@/components/terminal-like/components/Line'

interface Props {
  text: string
  cursor?: boolean
  prefix?: string
}

const CommandLine: React.VFC<Props> = ({
  text,
  cursor = false,
  prefix = '$ '
}) => {
  return (
    <>
      <Line text={prefix + text}>
        {cursor ? (
          <span className="content-[''] align-middle w-1.5 h-5 inline-block bg-gray-900 animate-blink" />
        ) : (
          ''
        )}
      </Line>
    </>
  )
}

export default CommandLine
