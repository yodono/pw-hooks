import './UseEffect.css'
import React, { useState, useEffect } from 'react'

const UseEffect = props => {
    const [ finalGrade, setFinalGrade ] = useState(0)
    const [ status, setStatus ] = useState('')

    useEffect(() => {
        console.log('useEffect: executa a cada re-render.\n\n')
    })

    useEffect(() => {
        console.log('useEffect condicional ao componente:')
        console.log('Executa somente na montagem do componente.\n\n')
    }, [])

    useEffect(() => {
        setStatus(verifyStatus(finalGrade))
    }, [finalGrade])

    useEffect(() => {
        console.log('useEffect condicional:')
        console.log('Nesse caso, executa quando o state status for alterado.\n\n')
    }, [status])

    console.log('\nO componente foi renderizado.\n\n')

    const verifyStatus = (grade) => grade >= 6 ? 'Aprovado' : 'Reprovado'

    return (
        <div>
            <div className="title">
                <h1>useEffect</h1>
                <h2>Permite executar efeitos colaterais em componentes funcionais</h2>
            </div>

            <div className="content">
                <label className="field">Nota final:</label>
                <input
                    className="field"
                    type="number"
                    min={0}
                    max={10}
                    value={finalGrade}
                    onChange={e => setFinalGrade(e.target.value)}
                />

                <label className="field">Situação:</label>
                <p className="message" id={status}>{status}</p>
            </div>
        </div>
    )
}

export default UseEffect
