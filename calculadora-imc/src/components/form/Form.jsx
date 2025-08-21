import { useState } from "react"

import styles from './form.module.css'

const Form = ({ calcImc }) => {
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();

    return (

        <div>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="altura">Insira sua altura:</label>
                <input className={styles.input} placeholder="altura (m)" type="number" id="altura" value={ altura } onChange={ (e) => setAltura(Number(e.target.value)) }/>
                <label htmlFor="peso">Insira seu peso:</label>
                <input className={styles.input} placeholder="peso (kg)" type="number" id="peso" value={ peso } onChange={ (e) => setPeso(Number(e.target.value))}/>
                <button className={styles.formBtn} type="submit" onClick={() => calcImc(peso / altura ** 2)} >Calcular</button>
            </form>
        </div>
    )
}

export default Form