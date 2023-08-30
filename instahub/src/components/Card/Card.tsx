import styles from './Card.module.scss'


type Props = {
  repositoryName: string,
  language: string,
  createdAt: string,
  url: string,
  starred: number
}

const Card = ({repositoryName, language, createdAt, url, starred}: Props) => {

  let date = new Date(createdAt)
  const formattedDate = date.toLocaleDateString('pt-br')

  return (
    <div className={styles.card}>
        <h1>{repositoryName}</h1>
        {starred === 1 ? <i className="bi bi-star-fill"></i> : <span></span>}
        <span>{language ? `Tecnologia mais usada: ${language}` : 'Nenhuma'}</span>
        <span>Data de criação: {formattedDate}</span>
        <a href={url}>Visite este repositório <i className="bi bi-chevron-double-right"></i></a>
    </div>
  )
}

export default Card