import React from 'react';
import { decode } from 'blurhash';

export class Poster extends React.Component {
  static defaultProps = {
    height: 128,
    width: 128,
  }
  canvas = null
  render() {
    const { hash, height, width, ...rest } = this.props;

    return <canvas {...rest} height={height} width={width} ref={this.handleRef} />;
  }
  handleRef = (canvas) => {
    this.canvas = canvas
    this.draw()
  }
  componentDidUpdate() {
    this.draw()
  }
  draw = () => {
    const { hash, height, width } = this.props;

    if (this.canvas) {
      const pixels = decode(hash, width, height);
      const ctx = this.canvas.getContext('2d');
      const imageData = ctx.createImageData(width, height);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
    }
  }
}