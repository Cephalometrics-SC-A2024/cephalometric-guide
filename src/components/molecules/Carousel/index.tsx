import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { Step } from '../Slider/media'
import guideData from '../../../constants/steps.json'

const MyCarousel = () => (
  <Carousel plugins={['arrows']} className="snap-start h-screen relative">
    {guideData.map((step, idx) => (
      <Step
        key={`step-${idx + 1}`}
        description={step.title}
        image={step.image}
        innerSteps={step.steps}
        index={idx}
      />
    ))}
  </Carousel>
)

export default MyCarousel
