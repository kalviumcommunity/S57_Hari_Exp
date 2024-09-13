import React, { useCallback } from 'react'

function Counter({ editor, limit }: { editor: any, limit: number }) {
  const percentage = useCallback(() => editor ? Math.round((100 / limit) * editor.storage.characterCount.characters()) : 0, [editor, limit])

  return (
    <div className={`character-count ${editor?.storage.characterCount.characters() === limit ? '' : ''}  flex justify-between items-center`}>
      <div className=' flex gap-x-1'>
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
        >
          <circle
            r="10"
            cx="10"
            cy="10"
            fill="#e9ecef"
          />
          <circle
            r="5"
            cx="10"
            cy="10"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="10"
            strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
            transform="rotate(-90) translate(-20)"
          />
          <circle
            r="6"
            cx="10"
            cy="10"
            fill="white"
          />
        </svg>

        <p className=' text-[12px] max-lg:hidden'>{editor?.storage.characterCount.characters()} / {limit}</p>
        <br />
      </div>
      <div>
      </div>

    </div>
  )
}

export default Counter
