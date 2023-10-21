import Image from 'next/image'

import ExpertTrainingServices from './../images/expert-training-services.jpg'
import IndivdualisedTrainingPlan from './../images/individualised-training-plan.jpg'
import ScienceBasedTraining from './../images/science-based-training.jpg'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">About Prabaha</h1>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-800 bg-yellow-400 rounded-full mb-4">The Science of Dog Training, The Art of Dog Happiness</div>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={ExpertTrainingServices} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-yellow-400 mb-2">Good Dogs. Great Training</div>
                  <h4 className="h4 mb-4">Expert Dog Training Services</h4>
                  <p className="text-lg text-gray-400 mb-5">At Prabaha, we offer expert dog training services that are designed to help dogs of all breeds and ages become well-behaved and obedient companions. Our trainers use various reinforcement techniques to teach dogs new skills and correct unwanted behaviors.</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={ScienceBasedTraining} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-yellow-400 mb-2">Science Works. Dogs Learn.</div>
                  <h4 className="h4 mb-4">Science-Based Training Techniques</h4>
                  <p className="text-lg text-gray-400 mb-5">Our trainers use science-based training techniques that have been proven to be effective in modifying dog behavior. We believe in using methods that are based on the latest research in animal behavior and psychology to help dogs learn and thrive.</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={IndivdualisedTrainingPlan} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-yellow-400 mb-2">Unique Dogs. Individualized Plans.</div>
                  <h4 className="h4 mb-4">Individualized Training Plans</h4>
                  <p className="text-lg text-gray-400 mb-5">We understand that every dog is unique, which is why we offer individualized training plans that are tailored to meet the specific needs of each dog and their owner. Our trainers work closely with you to develop a training plan that works for you and your dog.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
