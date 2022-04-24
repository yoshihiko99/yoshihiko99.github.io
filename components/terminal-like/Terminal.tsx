import React from 'react'
import RenderLines from '@/components/terminal-like/RenderLines'

interface LineProps {
  type: 'cmd' | 'res'
  text: string
}

interface Props {
  lines: Array<LineProps>
  canStart: boolean
  outerClassName?: string
  lineClassName?: string
}

const Terminal: React.VFC<Props> = (props) => {
  return (
    <div className={props.outerClassName}>
      <RenderLines
        lines={props.lines}
        canStart={props.canStart}
        lineClassName={props.lineClassName}
      />
    </div>
  )
}

export default Terminal
