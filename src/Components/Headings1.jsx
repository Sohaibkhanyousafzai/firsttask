import React from 'react'

const Headings1 = ({blueTextStart, cyanTextMid, blueTextEnd}) => {
  
  return (
    <>
      <h2 className="title">
        {blueTextStart && <span className="blue">{blueTextStart}</span>}
        {cyanTextMid && <span className="cyan">{cyanTextMid}</span>}
        {blueTextEnd && <span className="blue">{blueTextEnd}</span> }
      </h2>
    </>
  )
}

export default Headings1
