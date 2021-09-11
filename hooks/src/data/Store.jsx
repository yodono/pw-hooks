import React, { useState, createContext } from 'react'

const initialContext = {
    contextName: 'User',
    contextPassword: 123456
}

export const AppContext = createContext(initialContext)

const Store = props => {
    const [context, setContext] = useState(initialContext)

    const updateContext = (key, value) => {
        setContext({
            ...context,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            contextName: context.contextName,
            contextPassword: context.contextPassword,
            setContextName: newName => updateContext('contextName', newName),
            setContextPassword: newPassword => updateContext('contextPassword', newPassword)
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store
