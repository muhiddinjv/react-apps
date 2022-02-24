import React, { Component } from 'react'

export default class ImgCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans)
  }
  
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10); // 150 = grid.auto.rows in ImgList.css
    this.setState({spans})
  }

  render() {
      const {description, urls} = this.props.image;
    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
          <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    )
  }
}
