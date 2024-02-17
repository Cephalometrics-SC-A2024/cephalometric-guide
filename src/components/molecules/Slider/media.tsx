import React from 'react'

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
    <div className="flex flex-col w-screen h-screen overflow-y-scroll snap-y snap-mandatory overscroll-y-contain overflow-x-hidden hide-scroll">
      <section className="snap-start h-screen w-screen flex flex-col md:flex-row items-center justify-center relative">
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
        <div className="text-white text-xl md:text-4xl w-1/3">
          {description}
        </div>
        <img src={image} alt="rx" className="w-1/2" />
      </section>
      {innerSteps?.map((innerStep, idx) => (
        <section
          className="snap-start h-screen w-screen flex flex-col md:flex-row items-center justify-center"
          key={`inner-step-${index + 1}-${idx + 1}`}
        >
          <div className="text-white text-xl md:text-4xl w-1/3">
            {innerStep.title}
          </div>
          <img src={innerStep.image} alt="rx" className="w-1/2" />
        </section>
      ))}
    </div>
  )
}
