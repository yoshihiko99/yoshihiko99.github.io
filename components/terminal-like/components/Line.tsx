import React from 'react'

interface Props {
  text: string
  className?: string
  children?: React.ReactNode
}

const Line: React.VFC<Props> = (props) => {
  return (
    <div className={`font-ubuntu ` + props.className}>
      {props.text}
      {props.children}
    </div>
  )
}

export default Line
