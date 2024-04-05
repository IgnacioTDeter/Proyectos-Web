import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App () {
    return (

        <section className='App'>
          <TwitterFollowCard isFollowing={true} userName="midudev" user="Miguel Angel Duran" />
          <TwitterFollowCard isFollowing={true} userName="GordoDan_" user="Pablo Hernandez" />
          <TwitterFollowCard isFollowing={false} userName="elonmusk" user="Elon musk" />
          <TwitterFollowCard isFollowing={true} userName="twitter" user="Ignacio Deter" />
        </section>
        

    )
}
