import React from 'react'
import Line from '@/components/terminal-like/components/Line'

interface Props {
  text: string
}

const ResponseLine: React.VFC<Props> = (props) => {
  return <Line text={props.text} />
}

export default ResponseLine
