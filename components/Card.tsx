import React from 'react'

type Props = {
  ImageSrc: string
  ImageAlt: string
  leading: string
  content: string
  tags: Array<string>
  link: string
}

const Card: React.FC<Props> = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div className="rounded overflow-hidden shadow-lg grid md:grid-cols-2 transform transition duration-500 hover:scale-95 hover:opacity-50">
        <div className="flex">
          <img
            className="w-full h-auto my-auto"
            src={props.ImageSrc}
            alt={props.ImageAlt}
          />
        </div>
        <div className="grid mx-3 mt-6">
          <div className="mb-6">
            <h3 className="font-bold text-3xl mb-6">{props.leading}</h3>
            <p className="text-gray-700 text-base">{props.content}</p>
          </div>
          <div className="mb-3">
            {props.tags.map((tag) => (
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card
