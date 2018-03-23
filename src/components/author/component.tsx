import * as React from 'react'

interface Props {
  username: string
  imgSrc: string
}

export const Author = (props: Props) => {
  return (
    <div className='flex items-center pt-6'>
      <div className='w-8 h-8 rounded-full overflow-hidden'>
        <img src={props.imgSrc} />
      </div>
      <div className='p-2'>
        <a
          href={`https://github.com/${props.username}/`}
          className='text-sm text-blue hover:text-blue-dark no-underline hover:underline antialiased'
        >
          @chrsgrffth
        </a>
      </div>
  </div>
  )
}
