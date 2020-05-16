import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Button from 'react-bootstrap/Button';

class ProductModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productDesc: ''
        }
    }
    componentDidMount() {
        this.setState({
            productName: this.props.productName,
            productDesc: this.state.productDesc
        })
    }
    render() {
        const { onHide } = this.props;
        return (
            <Modal
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Feeling Hungry!!
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>{this.props.productName}</h4>
                <p>
                  {this.props.productDesc}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          );
    } 
  }
  export default ProductModal;
  