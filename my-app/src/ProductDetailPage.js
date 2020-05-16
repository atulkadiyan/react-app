import React from 'react';

class ProductDetailPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            availableIn:'',
            desc:''
        }
    }
    componentDidMount(){
        if(localStorage.name) {
            this.setState({
                name: localStorage.getItem('name'),
                availableIn: localStorage.getItem('availableIn'),
                desc: localStorage.getItem('desc')
            })
        }
    }
    render(){
        return (<div>
            <h1>{this.state.name}</h1>
            <h4>Available In:</h4>
            <div>{this.state.availableIn}</div>
            <p>{this.state.desc}</p>
        </div>)
    }
}

export default ProductDetailPage;