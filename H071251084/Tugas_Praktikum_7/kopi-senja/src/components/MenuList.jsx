import React from 'react'
import MenuCard from './MenuCard.jsx'

function MenuList({ menuList, onTambah }) {
  return (
    <div>
      {menuList.map((item) => (
        <MenuCard key={item.id} item={item} onTambah={onTambah} />
      ))}
    </div>
  )
}

export default MenuList
