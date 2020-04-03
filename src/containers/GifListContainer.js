import React , {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let value = e.target[0].value
        fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(gifs => this.setState({gifs: gifs.data.map(data => data.id)}))
        e.target.reset()
    }  

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/> 
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}