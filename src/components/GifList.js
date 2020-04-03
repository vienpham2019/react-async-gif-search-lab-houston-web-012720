import React , {Component} from 'react'

export default class GifList extends Component {
    addGifs = () => {
        return this.props.gifs.map(gif => {
            return(
                <div>
                    <img src={`https://i.giphy.com/media/${gif}/giphy.gif`} alt="img"/>
                </div>
                )
        })
    }

    render(){
        return(
            <div>
                {this.addGifs()}
            </div>
        )
    }
}