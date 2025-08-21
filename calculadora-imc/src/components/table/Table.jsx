import styles from './table.module.css'

const Table = ({ imc }) => {
    const classificacao = [
        { label: "Magreza", min: 0, max: 18.5 },
        { label: "Normal", min: 18.5, max: 24.9 },
        { label: "Sobrepeso", min: 25, max: 29.9 },
        { label: "Obesidade", min: 30, max: 39.9 },
        { label: "Obesidade grave", min: 40, max: Infinity },
    ];

    return (
        <div className={styles.resultado}>
            <h3>Resultado</h3>
            <p>Seu IMC é { imc }</p>
            <table>
                <thead>
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody>
                    {classificacao.map((c) => {
                        const estaAtivo = imc >= c.min && imc <= c.max;
                        return (
                        <tr
                            key={c.label}
                            className={estaAtivo ? styles.ativo : ""}
                        >
                            <td>{c.label}</td>
                            <td>{c.min} - {c.max === Infinity ? "∞" : c.max}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table