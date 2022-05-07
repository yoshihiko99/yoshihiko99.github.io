import React from 'react'

type Props = {
  title: string
  link: string
}

const MiniCard: React.FC<Props> = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div className="rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-95 hover:opacity-50">
        <p className="text-gray-700 text-base p-6">{props.title}</p>
      </div>
    </a>
  )
}

export default MiniCard
