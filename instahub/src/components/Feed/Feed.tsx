import styles from './Feed.module.scss'
import Header from '../Header/Header'
import AllRepos from '../AllRepos/AllRepos'
import FavRepos from '../FavRepos/FavRepos'
import { useState } from 'react'

type Props = {
  image: string,
  bio: string,
  url: string,
  login: string,
  location: string,
  followers: number,
  following: number,
  repos: number,
  repositories: any[] | undefined,
}

const Feed = ({ image, bio, url, location, login, followers, following, repos, repositories }: Props) => {
  const [changeComponent, setChangeComponent] = useState<number>(0)


  const clicked = {
    'backgroundColor': '#161619',
  }

  const notClicked = {
    'backgroundColor': 'transparent',
  }

  console.log(repositories)

  const changeRepo = () => {
    if(changeComponent === 0){
      setChangeComponent(1)
    }else{
      setChangeComponent(0)
    }
  }


  return (
    <section className={styles.content}>

      <Header
        image={image}
        bio={bio}
        followers={followers}
        following={following}
        url={url}
        login={login}
        location={location}
      />

      <div className={styles.change_btn}>
        <button onClick={changeRepo} className={styles.button} 
        style={changeComponent === 0 ? clicked : notClicked}>({repos}) Todos repositórios</button>

        <button onClick={changeRepo} className={styles.button} 
        style={changeComponent === 1 ? clicked : notClicked}>Favoritos</button>
      </div>

      {changeComponent === 0 ? 
        <AllRepos repositories={repositories}/>
        :
        <FavRepos repositories={repositories}/>
      }

    </section>
  )
}

export default Feed