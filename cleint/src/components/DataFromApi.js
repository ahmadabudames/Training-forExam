import React, { Component } from 'react'

export class DataFromApi extends Component {
    render() {
        return (
          this.props.DataFromApi.map((obj,idx)=>{
              return(
                <div key={idx}>
                <h1>
                    {obj.title}
                </h1>
                <h2>
                    {obj.artist_title}
                </h2>

                <img src={obj.thumbnail} alt=""></img>


                <p>
                    {obj.description}
                </p>
                <button onClick={e => this.props.favoriteItem(obj)}>add form</button>
                </div>
              )
            
          })
        )
    }
}

export default DataFromApi
