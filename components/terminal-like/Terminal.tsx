import React from 'react'
import RenderLines from '@/components/terminal-like/RenderLines'

interface LineProps {
  type: 'cmd' | 'res'
  text: string
}

interface Props {
  lines: Array<LineProps>
  canStart: boolean
  className?: string
}

const Terminal: React.VFC<Props> = (props) => {
  return (
    <div className={props.className}>
      <div className="min-w-max w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <RenderLines lines={props.lines} canStart={props.canStart} />
      </div>
    </div>
  )
}

export default Terminal
