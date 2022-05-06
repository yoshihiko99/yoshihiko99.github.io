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
    <div className="rounded overflow-hidden shadow-lg grid md:grid-cols-2">
      <div className="flex">
        <img
          className="w-full h-auto my-auto"
          src={props.ImageSrc}
          alt={props.ImageAlt}
        />
      </div>
      <div>
        <div className="m-6">
          <h3 className="font-bold text-xl mb-2">{props.leading}</h3>
          <p className="text-gray-700 text-base">{props.content}</p>
        </div>
        <div className="m-3">
          {props.tags.map((tag) => (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="m-3 text-right">
          <a
            className="transition duration-500 ease-in-out underline text-gray-600 hover:text-gray-400"
            href={props.link}
            target="_blank"
            rel="noreferrer">
            Click here
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
