import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import styles from './SearchScreen.module.scss'

import Feed from '../Feed/Feed'

const SearchScreen = React.memo(() => {
    const [inputValue, setInputValue] = useState<string>('')
    const [user, setUser] = useState<any>()
    const [repos, setRepos] = useState<any[] | undefined>()

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = () => {
        api.get(`/users/${inputValue}`)
            .then((res) => {
                setUser(res.data)
                api.get(`/users/${inputValue}/repos`)
                .then((res)=>{
                    setRepos(res.data)
                })
            })
            .catch((err) => {
                console.log(err)
                setUser(undefined)
            })
    }

    
    return (
        <>
            <h1>InstaHub</h1>
            <div className={styles.search}>
                <input type='text' placeholder='Digite o Username...'
                    value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={getUserData} className={styles.search_button}>
                    <i className="bi bi-search"></i>
                </button>
            </div>

            {user === undefined ?
                <span className='error_msg'>Nenhum usuário encontrado...</span>
                :
                <>
                    <Feed 
                     image={user.avatar_url}
                     bio={user.bio}
                     followers={user.followers}
                     following={user.following}
                     url={user.html_url}
                     login={user.login}
                     location={user.location}
                     repos={user.public_repos}
                     repositories={repos}
                     />
                </>
            }
        </>
    )
})

export default SearchScreen