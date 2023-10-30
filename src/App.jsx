import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    return(
        <>
            <TwitterFollowCard userName="midudev">
            Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard userName="pheralb">
            Pablo
            </TwitterFollowCard>

            <TwitterFollowCard  userName="unknown"  >
            Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard  userName="tapichus" >
            Gerardo Cara
            </TwitterFollowCard>

            <TwitterFollowCard  userName="alan">
            Alan gato
            </TwitterFollowCard>

        </>
    )
}


/*
Dentro de la funcion:
    const midudev = { name: 'Miguel Angel Duran', userName: 'midudev', isFollowing: 'false' }
    const pheralb = { name: 'pheralb', userName: 'pheralb' }
    const unknown = { name: 'unknown', userName: 'unknown' }

Dentro del return


        <TwitterFollowCard { ... midudev }/>
        <TwitterFollowCard { ... pheralb }/>
        <TwitterFollowCard { ... unknown }/>
*/