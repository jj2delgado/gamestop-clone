import React, {Component} from 'react'
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div className='Header-Container'>
                <div className='black-bar'>

                    <span>
                    <i class="fas fa-map-marker-alt" style={{color:'white'}}></i>
                    <h1>Location Services Coming Soon</h1>
                    </span>

                    <span>
                    <i class="fas fa-clipboard-list" style={{color:'white'}}></i>
                    <h1>Check an Order</h1>
                    </span>

                    <span>
                    <i class="far fa-question-circle" style={{color:'white'}}></i>
                    <h1>Help</h1>
                    </span>

                    <div className='black-filler'/>
                </div>
                <div className='Header-Top'>
                    <img src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dwb103fa93/images/svg-icons/logo-1280.svg"/>
                        <div>
                        <span className='Search-Bar'>
                         <i class="fas fa-search"></i>
                         <input placeholder='Find games, consoles, tablets, and more' className='Header-Search-Bar'/>
                         <button className='Header-Search'>SEARCH</button>
                         </span>
                        </div>
                    <div className='Header-Links-Top-Container'>
                        <span>
                        <i class="fas fa-sync-alt" style={{color:'red'}}></i>
                        <h6>Trade-Ins</h6>
                        </span>

                        <span>
                        <i class="fas fa-power-off"></i>
                        <h6>PowerUp Rewards</h6>
                        </span>

                        <span>
                        <i class="far fa-user"></i>
                        <h6>Account</h6>
                        </span>

                        <span id="Last-Link">
                        <i class="fas fa-shopping-cart"></i>
                        <h6>Cart</h6>
                        </span>
                    </div>
                    
                </div>

                <div className='Header-Bottom-Wrapper'>
                    <div className='Header-Bottom'>
                        <div>
                        <h1>VIDEO GAMES</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>ACCESSORIES</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>TOYS & COLLECTIBLES</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>ELECTRONICS</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>CLOTHING</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>DEALS</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>WEEKLY AD</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>GIFT CARDS</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Header