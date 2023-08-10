import React from 'react'

function CardCC({styleCC,icon,title}) {
  return (
    <div className={styleCC}>
    <div className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center">
        <i className={icon}></i>
    </div>
    <h1 class="mt-2">{title}</h1>
</div>



  )
}

export default CardCC;