import styles from '../AllRepos/AllRepos.module.scss'
import Card from '../Card/Card'

type Props = {
  repositories: any[] | undefined
}
const FavRepos = ({ repositories }: Props) => {
  const starredRepos = repositories!.filter((repository) => repository.stargazers_count > 0)

  console.log(starredRepos)
  return (
    <article className={styles.repo_container}>
      {starredRepos.length === 0 ?
        ( <span className='error_msg'>Este usuário não tem nenhum repositório favoeitado</span> )
        :
        (
          starredRepos.map((repository) => {
            return (
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

export default FavRepos

