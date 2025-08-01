'use client'
import React from "react"
import clsx from "clsx"

export default function Button( {text, bgColor="bg-[#f9f9f9]", textColor="text-white"} ){
  return (
    <>
      <button className={clsx("px-5 py-5 rounded-xl transition-transform duration-100 ease-in shadow-[4px_4px_2px_rgba(0,0,0,0.25)] hover:scale-[0.95] hover:!shadow-none", bgColor, textColor)}>
        {text}
      </button>
    </>
  )
}