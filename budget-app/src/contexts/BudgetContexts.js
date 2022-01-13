import React, { useContext } from "react"
 
const BudgetsContexts = React.createContext()

export const useBudgets = () => {
   return useContext(BudgetsContexts)
}

export const BudgetsProvider = ({ children }) => {
return <BudgetsContexts.Provider value={{
  budgets,
  expenses
}}>
  {children}
  </BudgetsContexts.Provider>
}