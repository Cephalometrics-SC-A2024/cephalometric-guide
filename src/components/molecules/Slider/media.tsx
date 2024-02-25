import React from 'react'
import './mouse.scss'

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
    <div className="flex flex-col w-full h-screen overflow-y-scroll snap-y snap-mandatory overscroll-y-contain hide-scroll">
      <section className="snap-start h-screen w-full">
        {index === 0 && (
          <button
            type="button"
            onClick={() => {
              const element = document.getElementById('home')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2"
          >
            Go back
          </button>
        )}
        <div className="h-screen w-full md:gap-16 flex flex-col md:flex-row items-center justify-center">
          <div className="text-white text-xl md:text-4xl w-4/5 md:w-1/3">
            {description}
          </div>
          <img src={image} alt="rx" className="w-full mt-4 md:mt-0 md:w-2/5" />
        </div>
        <div className="flex flex-row items-center justify-center mb-4">
          <div className="absolute flex flex-row items-center gap-2 bottom-0 font-thin text-xs md:text-sm ml-2 mb-4">
            <button className="scroll">
              <span />
            </button>
            Scroll for more on step {index + 1}
          </div>
        </div>
      </section>
      {innerSteps?.map((innerStep, idx) => (
        <section
          className="snap-start h-screen w-full"
          key={`inner-step-${index + 1}-${idx + 1}`}
        >
          <div className="h-screen w-full md:gap-16 flex flex-col md:flex-row items-center justify-center">
            <div className="text-white text-xl md:text-4xl w-4/5 md:w-1/3">
              {innerStep.title}
            </div>
            <img
              src={innerStep.image}
              alt="rx"
              className="w-full mt-4 md:mt-0 md:w-2/5"
            />
          </div>
        </section>
      ))}
    </div>
  )
}
