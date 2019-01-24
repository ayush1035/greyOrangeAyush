import React from 'react';
export default class MyImage extends React.Component {

    constructor(props){
        super(props);
        this.state={
            noOfLikes:'',
            isLiked:false
        }
        this.incrementLikes = this.incrementLikes.bind(this);
        this.decrementLikes = this.decrementLikes.bind(this);
    }

    componentWillMount(){
        this.setState({
            noOfLikes:this.props.obj.noOfLikes
        })
    }

    incrementLikes(){
        let count  = this.state.noOfLikes;
        this.setState({
            isLiked:true,
            noOfLikes:count+1
        });
    }

    decrementLikes(id){
        let count  = this.state.noOfLikes;
        this.setState({
            isLiked:false,
            noOfLikes:count-1
        });
    }


    render() {
        return (
           
                <div className="card" style={{width: '400px'}}>
                    <img className="card-img-top" src={this.props.obj.imageUrl} alt="Card image" style={{width:"100%"}} />
                    <div className="card-body">
                        {this.state.isLiked && <h4 className="card-title"><button className="btn btn-primary" onClick={this.decrementLikes} style={{color:'red'}}>Likes {this.state.noOfLikes}</button> </h4>}
                        {this.state.isLiked == false && <h4 className="card-title"  style={{color:'red'}}><button className="btn btn-primary" onClick={this.incrementLikes}>Likes {this.state.noOfLikes}</button> </h4>}
                        <p className="card-text">{this.props.obj.comments.map((item,index) => <p>User{index+1}=>{item}</p>)}</p>
                    </div>
                </div>
            
        ); 
    }

} 
