import React, { useState } from 'react'

export const { Provider, Consumer } = React.createContext();


export default function NPContext({children}) {
  const [current, setCurrent] = useState("");

  const updateCurrent =(url) => {
    setCurrent(url)
  }

  const context = { current, updateCurrent };

  return (
    <Provider value={{ ...context }}>
      { children }
    </Provider>
  )
}
