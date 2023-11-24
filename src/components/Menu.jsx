import React from 'react'
import MenuItem from './MenuItem'
import dataArray from '../data/items.json'
import { VscArrowUp } from 'react-icons/vsc'

const Menu = () => {
  return (
    // overflow hidden removes the additional scroll bar for internal menus
    <div className='overflow-hidden px-7 bg-black'>
      {/* iterating through the data.json and creating components using the MenuItem component */}
      <div  className='relative min-w-full grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3'>
            {dataArray.map((item, index) => (
            <MenuItem
              id={`${item.id}`}
              key={index}
              imgUrl={item.imgUrl}
              name={item.name}
              bread={item.bread}
              ingredients={item.ingredients}
              directions={item.directions}
              instructions={item.instructions}
              
            />
          ))}
        </div>
        {/* adding a fixed up arrow at the bottom right side of the screen */}
        <a className='text-[#00df9a] flex justify-end ms-9' href="#navbar">
          <VscArrowUp className='fixed bottom-2 right-2 z-[999] hover:scale-[120%] ease-in duration-200' size={30} />
        </a>
    </div>
  )
}
export default Menu