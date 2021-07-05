
import React, { Component } from 'react'
import axios from 'axios';
import DataFromApi from './DataFromApi'

export class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Url: process.env.REACT_APP_SERVER_URL,
            DataFromApi:[],
            showComponentData:false,
            showMessageItem:false,
            MessageItem:''
        };

   

    }
    favoriteItem=async(dataobj)=>{
        const messageRequest= await axios.post(`${this.state.Url}/art/fav`,dataobj);
        this.setState({
            MessageItem:messageRequest.data,
            showMessageItem:true
        })
    }
    
    componentDidMount = async () => {
        const request = await axios.get(`${this.state.Url}/art`);
        this.setState({
            DataFromApi: request.data,
            showComponentData: true
})




}
    render() {
        return (
          <>
{this.state.showMessageItem&&
<h3>
    {this.state.MessageItem}
</h3>
}

          {this.state.showComponentData&&
          <DataFromApi
          DataFromApi={this.state.DataFromApi}
          favoriteItem={this.favoriteItem}
          />
          
          }

          </>
        )
    }
}

export default Main
