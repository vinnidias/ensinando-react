//função
//variável
//estado
//ciclo de vida 
import {useState} from 'react'
const count = 1

function NomeDaFunc(){
    const [count, setCount] = useState(0)
    const [string,  setString] = useState("")

    return(
        <div>
            <h1>Olá Mundo</h1>
            <p>Contador</p>
        </div>
    )
}
