import React from 'react'
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { Step } from './media'
import guideData from '../../../constants/steps.json'
import { ReactComponent as ArrowLeft } from '../../../assets/ArrowLeft.svg'
import { ReactComponent as ArrowRight } from '../../../assets/ArrowRight.svg'

const MyCarousel = () => (
  <Carousel
    draggable={false}
    plugins={[
      {
        resolve: arrowsPlugin,
        options: {
          arrowLeft: <ArrowLeft className="cursor-pointer mx-4" />,
          arrowLeftDisabled: <ArrowLeft className="hidden" />,
          arrowRight: <ArrowRight className="cursor-pointer mx-4" />,
          arrowRightDisabled: <ArrowRight className="hidden" />,
          addArrowClickHandler: true,
        },
      },
    ]}
    className="h-screen"
  >
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
