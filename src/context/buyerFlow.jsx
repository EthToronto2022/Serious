import React from 'react'

const BuyerFlowContext = React.createContext({})

const initialState = {
  companyId: '',
  name: '',
  considerations: '',
  product: {},
  selectedActivities: new Set(),
  selectedProviders: new Set(),
}

const BuyerFlowProvider = ({ children }) => {
  const [config, setConfig] = React.useState(initialState)

  const resetConfig = () => setConfig(initialState)

  return (
    <BuyerFlowContext.Provider
      value={{
        config,
        setConfig,
        resetConfig,
      }}
    >
      {children}
    </BuyerFlowContext.Provider>
  )
}

const useBuyerFlow = () => React.useContext(BuyerFlowContext)

export { BuyerFlowProvider, useBuyerFlow }
