import React from 'react'
import guideData from '../../../constants/steps.json'

export function Step({
  description,
  image,
  innerSteps,
  index,
}: {
  description: string
  image: string
  index: number
  innerSteps: {
    title: string
    image: string
  }[]
}) {
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-scroll snap-y snap-mandatory overscroll-y-contain">
      <section className="snap-start h-screen w-screen flex flex-row items-center justify-center relative">
        {index === 0 && (
          <button
            type="button"
            onClick={() => {
              const element = document.getElementById('home')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="absolute top-12 left-1/2 -translate-x-1/2"
          >
            Go back
          </button>
        )}
        <div className="text-white text-4xl w-1/3">{description}</div>
        <img src={image} alt="rx" className="w-1/2" />
      </section>
      {innerSteps?.map((innerStep, idx) => (
        <section
          className="snap-start h-screen w-screen flex flex-row items-center justify-center relative"
          key={`inner-step-${index + 1}-${idx + 1}`}
        >
          <div className="text-white text-4xl w-1/3">{innerStep.title}</div>
          <img src={innerStep.image} alt="rx" className="w-1/2" />
        </section>
      ))}
    </div>
  )
}

export const media = guideData.map((step, idx) => ({
  slug: `page-${idx + 1}`,
  children: (
    <Step
      description={step.title}
      image={step.image}
      innerSteps={step.steps}
      index={idx}
    />
  ),
}))
