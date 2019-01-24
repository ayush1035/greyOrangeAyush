import React from 'react';
import MyImage from './common/imageContainer';
import jsonData from "../data/data.json";
export default class HomeFeed extends React.Component {

    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        let url = "http://localhost:3009/getData";
        return fetch(url, {
            method: 'get'
        }).then((response) => {
            return response.json();
        }).catch(()=>{
            this.setState({
                posts:jsonData
            })
        })

    }
    render() {
        return (
           
            <div className="container">
                {this.state.posts.map(item => <MyImage key={item.id} obj={item} />)}
            </div>
        ); 
    }

} 
