import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Transition from '../utils/Transition'
import Dropdown from '../utils/Dropdown'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet'

const Injected = new InjectedConnector()

function Header() {
  const { account, activate } = useWeb3React()

  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [top, setTop] = useState(true)

  const trigger = useRef(null)
  const mobileNav = useRef(null)

  useEffect(() => {
    const provider = window.localStorage.getItem('provider')
    if (provider) activate(Injected)
    setTimeout(() => {
      if (!account) setLoadingWills(false)
    }, 500)
  }, [])

  const setProvider = (type) => {
    window.localStorage.setItem('provider', type)
  }

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-white backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <svg
                className="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="header-logo"
                  >
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#header-logo)"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center ml-36">
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Dashboard
                </Link>
              </li>
              {/* 1st level: hover */}
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <button
                  onClick={() => {
                    activate(Injected)
                    setProvider('injected')
                  }}
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 gap-2 items-center flex"
                >
                  <FontAwesomeIcon icon={faWallet} className="w-4 h-4" />
                  <span>
                    {account
                      ? account.substring(0, 6) +
                        '...' +
                        account.substring(account.length - 6, account.length)
                      : 'Connect Wallet'}
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
