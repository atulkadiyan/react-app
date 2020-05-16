import React from 'react';
import productList from './mock/productList.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import food from './images/food.jpeg';
import ProductModal from './ProductModal';

class ProductListPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productList: [],
            buyNowClicked: false,
            productName: '',
            productDesc: ''
        }
    }

    componentDidMount() {
        this.getProductList();
    }

    getProductList = () => {
        // console.log('productList', productList);
        this.setState({
            productList: productList.data
        });
        // API call to get
        // fetch('uri').then(res => {
        //     return res.json();
        // }).then(data => {
        //     // console.log('data', data);
        //     this.setState({
        //         productList: data
        //     });
        // })
    }
    handleBuyNow = (name, desc) => {
        this.setState({
            buyNowClicked: true,
            productName: name,
            productDesc: desc
        },()=>console.log('buynowClicked', this.state.buyNowClicked))
    }
    hideModal = () => {
        this.setState({
            buyNowClicked: false,
            productName: '',
            productDesc: ''
        })
    }
    handleCardClick = (name, availableIn, desc) => {
        localStorage.setItem('name', name);
        localStorage.setItem('availableIn', availableIn);
        localStorage.setItem('desc', desc);
        window.open('/productDetailPage');
    }

    render(){
        const { productList } = this.state;
        const cards = productList.map((product,index) => (
            <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant="top" src={food} onClick={()=>this.handleCardClick(product.name, product.availableIn, product.offerDesc)} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.offerDesc}</Card.Text>
                    <Button variant="primary" onClick={()=>this.handleBuyNow(product.name, product.offerDesc)}>Buy Now</Button>
                </Card.Body>
            </Card>
            )
        )
        return (<Container>
                    <Row>
                        <Col>{cards}</Col>
                    </Row>
                    {this.state.buyNowClicked ?
                    <ProductModal
                        show={this.state.buyNowClicked}
                        onHide={this.hideModal}
                        productName={this.state.productName}
                        productDesc={this.state.productDesc}
                    />: null}
                </Container>)
    }
}

export default ProductListPage;