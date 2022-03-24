import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Embaralhar = async event => {
  event.preventDefault()
  const res = await fetch(
    'http://localhost:3000/embaralhar?frase='+event.target.palavra.value, {method: 'GET'}
  )
  const resposta = await res.json();
  if(resposta === "This phrase already exists")
    alert("Essa frase já existe");
  else
    alert(resposta);
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Embaralha Palavras</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Embaralhador de Palavras
        </h1>
      </main>
      <div className={styles.grid}>
          <div>
            <form onSubmit={Embaralhar}>
                <div>
                    <label htmlFor="palavra">Palavra</label>
                    <input type="text" placeholder="Digite a Palavra" id="palavra"/> <button type="submit" className='btn btn-primary'>Enviar</button>
                </div>
            </form>
          </div>
      </div>

      <footer className={styles.footer}>
        Guilherme Gonzalez - José Junior - Gabriel Pellin
      </footer>
    </div>
  )
}
