import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

const Slider = ({ className }: { className: string }) => (
  <AwesomeSlider bullets={false} className={className}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </AwesomeSlider>
)

export default Slider
