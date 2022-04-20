import React from 'react'

interface Props {
  text: string
  className?: string
  children?: React.ReactNode
}

const ResponseLine: React.VFC<Props> = (props) => {
  return (
    <div className={`font-ubuntu ` + props.className}>
      {props.text}
      {props.children}
    </div>
  )
}

export default ResponseLine
