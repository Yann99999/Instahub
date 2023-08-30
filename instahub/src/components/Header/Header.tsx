import React from 'react'
import styles from './Header.module.scss'

type Props = {
    image: string,
    bio: string,
    url: string,
    login: string,
    location: string,
    followers: number,
    following: number
}

const Header = ({ image, login, bio, location, followers, following, url }: Props) => {

    return (
        <div className={styles.header}>
            <div>
                <img src={image} alt="foto de perfil do github" />
                <h2>{login}</h2>
                <p>{bio}</p>
            </div>

            <div>
                <span>Seguidores: {followers}</span>
                <span>Seguindo: {following}</span>
                <span>Localização: {location}</span>
                <span><a href={url}>{url}</a></span>
            </div>
        </div>
    )
}

export default Header
