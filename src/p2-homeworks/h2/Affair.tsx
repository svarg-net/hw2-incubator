import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {}// need to fix
console.log('Affair',props)
    return (
        <div>
            {props.affair.name}

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
