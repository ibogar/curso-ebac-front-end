
import { useState } from 'react'
import './index.css'

import Form from './components/form/Form'
import Header from './components/header/Header'
import Table from './components/table/Table'

function App() {
    const [imc, setImc] = useState(null)
    let roundImc = 0; 
    try{
        roundImc = imc.toFixed(2)
    }finally {

        return (
            <div class="container">
                <header>
                    < Header />
                </header>
                    < Form calcImc={ setImc } />
                    {imc && 
                    < Table imc={ roundImc } />
                    }
            </div>
        )
    }

}

export default App
