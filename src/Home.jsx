import React, { Component } from 'react'
import axios from 'axios'
import Hoth from './images/Hoth.png'


class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://swapi.co/api/planets/')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.results.slice(0, 4)
                })
            })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card col l6" key={post.id}>
                        <div className="card-content">
                            <img src={Hoth} alt="The planet Hoth"/>
                            <span className="card-title blue-text">{post.name}</span>
                            <p><b>Diameter:</b> {post.diameter}</p>
                            <p><b>Rotation period:</b> {post.rotation_period}</p>
                            <p><b>Climate:</b> {post.climate}</p>
                            <p><b>Orbital period:</b> {post.orbital_period}</p>
                            <p><b>Gravity:</b> {post.gravity}</p>
                            <p><b>Terrain:</b> {post.terrain}</p>
                            <p><b>Surface water:</b> {post.surface_water}</p>
                            <p><b>Population:</b> {post.population}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center white-text">No posts yet, please wait while we figure it out...</div>
            );
        return (
            <div className="container home">
                <div className="row">
                    <h1 className="center white-text">Home</h1>
                    <div className="cards">
                            {postList}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;