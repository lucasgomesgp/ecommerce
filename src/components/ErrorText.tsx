import React from 'react'

export function ErrorText({ text }: { text?: string }) {
    return (
        <>
            {text && <p role="alert" className="text-red-700 font-coreSans">{text}</p>}
        </>
    )
}
