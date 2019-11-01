import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Sub-Home.css'

class SubHome extends Component{
    render(){
        return(
            <div className='Lower-Home-Container'>
                <div>
                <h1>FEATURED PRODUCTS & OFFERS</h1>
                </div>
                
                <div>
                    <h1>SAVE BIG WITH PRE-OWNED</h1>
                </div>
                <div>
                    <h1>TOYS & COLLECTIBLES</h1>
                </div>
                <div>
                    <h1>RECENTLY RELEASED VIDEO GAMES</h1>
                    <button>
                        <Link to='/test'>
                            VIEW ALL RECENTLY RELEASED VIDEO GAMES
                        </Link>
                    </button>
                </div>
                <div>
                    <h1>VIDEO GAMES COMING SOON</h1>
                    <button>
                        <Link>
                            VIEW ALL VIDEO GAMES COMING SOON
                        </Link>
                    </button>
                </div>
                <div>
                    <h1>TOP CATEGORIES</h1>
                </div>
                <div>
                    <h1>RECOMMENDED FOR YOU</h1>
                </div>
                </div>
        )
    }
}
export default SubHome