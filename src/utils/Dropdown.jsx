import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Transition from '../utils/Transition'

function Dropdown({ children, title, onPress, isSelected }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="relative flex flex-col justify-center items-center">
      <div
        className={`flex text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 items-center transition duration-150 ease-in-out border-2 rounded-md w-64 justify-between ${
          isSelected && 'border-teal-400'
        }`}
        aria-expanded={dropdownOpen}
      >
        <span className="fill-current" onClick={onPress}>
          {title}
        </span>
        <svg
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="h-3 text-gray-500 cursor-pointer pl-2 shrink-0"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
        </svg>
      </div>
      <Transition
        show={dropdownOpen}
        tag="ul"
        className="relative top-full w-128 bg-transparent py-2 rounded justify-center items-center"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        {children}
      </Transition>
    </div>
  )
}

export default Dropdown

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  title: PropTypes.string.isRequired,
}
