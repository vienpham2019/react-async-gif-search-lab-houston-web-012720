import React , {Component} from 'react'

export default class GifSearch extends Component {
    render(){
        return(
            <div> 
                <form onSubmit={(e) => this.props.handleSubmit(e)}>
                    <label>Enter a Search Term:</label><br/>
                    <input type = "text" /><br/>
                    <input type= "submit" value = "Find Gifs" />
                </form>
            </div>
        )
    }
}