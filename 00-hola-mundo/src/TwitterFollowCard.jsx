import React, { useState } from 'react';

export function TwitterFollowCard({ userName, user, isFollowing }) {

    const [following, setFollowing] = useState(isFollowing); //Estado inicial de isFollowing es pasado a "following" (True o false)

    function changeFollowing() {
        setFollowing(!following); //Following cambiara de estado
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt={`Avatar de ${user}`}
                    src={`https://unavatar.io/twitter/${userName}`}
                />
                <div className='tw-followCard-name'>
                    <strong>{user}</strong>
                    <span className='tw-followCard-name-span'>@{userName}</span>
                </div>
            </header>

            <aside>                                       
                <button className={`tw-followCard-button${following ? ' following' : ''}`} onClick={changeFollowing}>
                    {/* Si following es true, aparece "following" en el className */}
                    {following ? 'Siguiendo' : 'Seguir' /* Si following es true, "Siguiendo". Si es false, "Seguir" */ }
                </button>
            </aside>
        </article>
    );
}
