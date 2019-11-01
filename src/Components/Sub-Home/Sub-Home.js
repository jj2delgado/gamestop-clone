import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Sub-Home.css'

class SubHome extends Component{
    render(){
        return(
            <div className='Lower-Home-Container'>
                <div>
                <h1>FEATURED PRODUCTS & OFFERS</h1>
                <span className="Featured-Container">
                    <img src="https://cdn.images.express.co.uk/img/dynamic/143/590x/Luigi-s-Mansion-3-on-Nintendo-Switch-1198156.jpg?r=1572554132295" />
                    <img src='https://store-images.s-microsoft.com/image/apps.1926.68332208580498659.9222b095-8101-4531-b386-33547ee9944f.9fe84d5d-ef45-4807-98c3-d0978ab24399?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF'/>
                    <img src='https://cdn.wccftech.com/wp-content/uploads/2019/05/WCCFghostreconbreakpoint1.jpg'/>
                    <img src='https://media.gamestop.com/i/gamestop/11051548/The-Nightmare-Before-Christmas-Series-3-Blind-Box-Domez-Only-at-GameStop'/>
                </span>
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