import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'

class Home extends Component{
    render(){
        return(
            <div className='main-home-container'>
                <Header />
                <div id="MyCarousel" class="carousel slide" data-ride="carousel">
                    <ol class='carousel-indicators'>
                        <li data-target='#MyCarousel' data-slide-to='0' class='active'></li>
                        <li data-target='#MyCarousel' data-slide-to='1'></li>
                        <li data-target='#MyCarousel' data-slide-to='2'></li>
                        <li data-target='#MyCarousel' data-slide-to='3'></li>
                        <li data-target='#MyCarousel' data-slide-to='4'></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class='carousel-item active'>
                            <img class='d-block w-100' src='https://media.playstation.com/is/image/SCEA/tom-clancys-ghost-recon-breakpoint-hero-banner-01-ps4-us-03may19?$native_nt$' alt='First Slide'/>
                            <div class='carousel-caption'>
                                    <h3>Test</h3>
                                    <p>(first slide)</p>
                                </div>
                        </div>
                        <div class='carousel-item'>
                            <img class='d-block w-100' src='https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/04/the-last-of-us-part-2-4406.jpg?quality=90&strip=all&zoom=1&resize=644%2C362&ssl=1' alt='Second Slide'/>
                            <div class='carousel-caption'>
                                <h3>Test</h3>
                                <p>(second slide)</p>
                            </div>
                        </div>
                        <div class='carousel-item'>
                            <img class='d-block w-100' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYn4o_Z_1ruXPUKEN-qA6SGmqJyUhmJ6jQNL6SayFHG_SB7gH' alt='Third Slide'/>
                            <div class='carousel-caption'>
                                <h3>Test</h3>
                                <p>(third slide)</p>
                            </div>
                        </div>
                        <div class='carousel-item'>
                            <img class='d-block w-100' src='https://media.gamestop.com/i/gamestop/ForceFriday_Logo/triple-force-friday-star-wars.png' alt='Fourth Slide'/>
                            <div class='carousel-caption'>
                                <h3>Test</h3>
                                <p>(fourth slide)</p>
                            </div>
                        </div>
                        <div class='carousel-item'>
                            <img class='d-block w-100' src='https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fmint%2Fhome%2FGhostbustersRemastered_GamePagePromo-1920x1080-60c14b012afd9440f08a5d7e91fa11101df91630.jpg' alt='Fifth Slide'/>
                            <div class='carousel-caption'>
                                <h3>Test</h3>
                                <p>(fifth slide)</p>
                            </div>
                        </div>
                        <a class='carousel-control-prev' href='#MyCarousel' role='button' data-slide='prev'>
                            <span class='carousel-control-prev-icon'></span>
                            <span class='sr-only'>Previous</span>
                        </a>
                        <a class='carousel-control-next' href='#MyCarousel' role='button' data-slide='next'>
                            <span class='carousel-control-next-icon'></span>
                            <span class='sr-only'>Next</span>
                        </a>
                    </div>
                </div>
                <div className='Lower-Home-Container'>
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
export default Home