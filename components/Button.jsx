import React from 'react'

export default function Button({onPress, text="", className="", children}) {
  return (
    <button className={'art_btn '+className} onClick={onPress}>
        {text}
        {children}
    </button>
  )
}
