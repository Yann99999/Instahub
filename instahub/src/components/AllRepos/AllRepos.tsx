import Card from '../Card/Card'
import styles from './AllRepos.module.scss'

type Props = {
  repositories: any[] | undefined
}

const AllRepos = ({repositories}: Props) => {
  return (
    <article className={styles.repo_container}>
      {repositories === undefined ? 
      ( <span className='error_msg'>Nenhum repositório encontrado...</span> )
      :
      (
        repositories.map((repository) => {
          return(
            <Card 
            repositoryName={repository.name}
            language={repository.language}
            createdAt={repository.created_at}
            url={repository.html_url}
            starred={repository.stargazers_count} />
          )
        })
      )}
    </article>
  )
}

export default AllRepos