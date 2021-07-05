import axios from 'axios';
import React, { Component } from 'react'
import DataFromApiCrud from './DataFromApiCrud';
export class Favorite extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Url: process.env.REACT_APP_SERVER_URL,
            dataFromApiCrud: [],
            showCrudComponentData: false,
            showCrudMessageItem: false,
            MessageItem: '',
            description: '',
            slugName: '',
            showUpdateCrudData: false,
        };

    }

    componentDidMount = async () => {
        const request = await axios.get(`${this.state.Url}/art/fav`);
        this.setState({
            dataFromApiCrud: request.data,
            showCrudComponentData: true
        })

    }

    showUpdateForm = async (desc, slug) => {
        this.setState({
            description: desc,
            slugName: slug,
            showUpdateCrudData: true
        })
    }


    deleteItem = async (slug) => {
        const request = await axios.delete(`${this.state.Url}/art/fav/${slug}`);
        this.setState({
            dataFromApiCrud: request.data

        });
    }
    render() {
        return (
            <>
                {this.state.showCrudMessageItem &&
                    <h3>
                        {this.state.MessageItem}
                    </h3>

                }

                {this.state.showCrudComponentData &&
                    <DataFromApiCrud
                    dataFromApiCrud={this.state.dataFromApiCrud}
                        deleteItem={this.deleteItem}
                        showUpdateForm={this.showUpdateForm}
                    />

                }


            </>
        )
    }
}

export default Favorite
