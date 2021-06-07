import './UseState.css'
import React, { useState } from 'react'

const UseState = props => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div>
            <div className="title">
                <h1>useState</h1>
                <h3>Manipula Estados em componentes funcionais</h3>
            </div>

            <div className="content">
                <input 
                    className="field"
                    type="text" value={name}
                    placeholder="Digite seu nome"
                    onChange={e => setName(e.target.value)}
                />
                <input
                    className="field"
                    type="text"
                    value={lastName}
                    placeholder="Digite seu sobrenome"
                    onChange={e => setLastName(e.target.value)}
                />
                <button
                    className="button"
                    onClick={() => {
                        if (name === '' || lastName === '') {
                            alert('Preencha todos os campos!')
                        } else {
                           setMessage(`Olá ${name} ${lastName}, seja bem-vindo!`)
                        }
                        }
                    }
                >OK</button>

                <p className="field">{message}</p>
            </div>
        </div>
    )
}

export default UseState
