import React from 'react'
import { FaBalanceScale, FaHome } from 'react-icons/fa'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { MdSavings } from 'react-icons/md'
import SidebarItem from './SidebarItem'

const items = [
  { name: 'Account balances', icon: <FaBalanceScale size={24} /> },
  { name: 'Expense', icon: <AiOutlineMinusCircle size={24} /> },
  { name: 'Income', icon: <AiOutlinePlusCircle size={24} /> },
  { name: 'Savings', icon: <MdSavings size={24} /> }
]

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen p-3
                        bg-primary text-neutral-300 shadow-md"
    >
      <div className="flex justify-center mt-6 items-center">
        <div className="mr-3">
          <FaHome size={36} />
        </div>
        <h3>Fintrack</h3>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-background"></hr>
      <div className="flex flex-col justify-center">
        <ul>
          {items.map((item) => (
            <li key={item.name} className="m-3">
              <SidebarItem icon={item.icon} title={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
