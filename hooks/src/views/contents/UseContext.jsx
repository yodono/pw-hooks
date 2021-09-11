import './UseContext.css'
import React, { useContext } from 'react'

import { AppContext } from '../../data/Store'

const UseContext = props => {
    const { contextName, setContextName } = useContext(AppContext)
    const { contextPassword, setContextPassword } = useContext(AppContext)

    return (
        <div>
            <div className="title">
                <h1>useContext</h1>
                <h2>Aceita um objeto de contexto e retorna o valor atual do contexto</h2>
            </div>

            <div className="content">
                <label className="field">Acesso encapsulado ao Contexto (Store)</label>
                <p className="message">Nome: { contextName }</p>
                <p className="message">Senha: { contextPassword }</p>
            </div>
        </div>
    )
}

export default UseContext
