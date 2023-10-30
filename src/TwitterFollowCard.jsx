
import { useState } from 'react'

export function TwitterFollowCard ({ children, userName }){

    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir' 
    const buttonClassName = isFollowing
    ? 'tw-button is-following'
    : 'tw-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    return (
        <article className='tw-article'>
            <header className='tw-header'>
                <img 
                src={ `https://unavatar.io/${userName}` }  
                alt="avatar" />
                <div className='tw-div'>
                    <strong>{children}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside className='tw-aside'>
               <button className={buttonClassName} onClick={handleClick}>
                {text}
                </button>
            </aside>

        </article>
    )
}

