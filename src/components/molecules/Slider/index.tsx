import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import { media } from './media'

const Slider = ({ className }: { className: string }) => {
  return (
    <AwesomeSlider
      bullets={false}
      infinite={false}
      // mobileTouch={false}
      className={className}
      media={media}
    />
  )
}

export default Slider
