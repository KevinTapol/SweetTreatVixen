import React from 'react'

const ItemCartModal = (props) => {
    const {id, name, imgUrl, small, medium, large} = props
  return (
    <div id={props.id} className='flex'>
        <img className='max-w-[200px] block mx-auto' src={props.imgUrl} alt="" />
        <h3>{props.name}</h3>
    </div>
  )
}

export default ItemCartModal