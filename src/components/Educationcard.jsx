import React,{useState} from 'react'

const Educationcard = ({imgsrc, level, collegeName, subject,cg}) => {
    const [isHover,setisHover] = useState(false);

  return (
    <div
      className='card-container'
      onMouseEnter={()=>setisHover(true)}
      onMouseLeave={()=>setisHover(false)}
    >
        <img src={imgsrc} alt={level} className='card-image' />
        <div
         className={`card-details ${isHover ? "hovered" : ""}`}
        >
         <h3>{collegeName}</h3>
        <p>{subject}</p>
        <p>{cg}</p>
        </div>
        <div className="card-level">{level}</div>
    </div>
  )
}

export default Educationcard
