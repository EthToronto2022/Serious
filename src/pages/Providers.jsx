import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet'

const Injected = new InjectedConnector()

function Providers() {
  const { account, activate } = useWeb3React();
  const navigate = useNavigate();

  useEffect(() => {
    if (account) {
      console.log('ddd')
      navigate('/providers-registration')
    }
  }, [account, navigate]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <div className="flex justify-center items-center mt-72 flex-col">
          <p className='text-3xl'>Provider Portal</p>
          <p className="mb-12 text-lg">Connect your wallet to access registration or dashboard</p>
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
        </div>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  )
}

export default Providers
