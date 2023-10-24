import React from 'react'
import './home.css'

export default function Home(props) {


    return (
        <div class="banner-area">
            <header>
                <div class="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Serrvices</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

            </header>
            <div class="banner-text">
                <h1>HomePage Design</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic autem harum eaque aut deserunt pariatur eum
                    ea, sequi minus nam veniam atque et quisquam molestiae aperiam! Iusto, ipsum.</p>
                <a href="#">Read More</a>
                <a href="#">Watch More</a>
            </div>


        </div>
    )
}
