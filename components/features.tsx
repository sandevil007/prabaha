import AdvancedTraining from '@/images/advanced.png'
import BasicTraining from '@/images/basic.png'
import Daycare from '@/images/daycare.png'
import GroupClasses from '@/images/group-classes.png'
import HomeTraining from '@/images/in-home.png'
import PuppyTraining from '@/images/puppy.png'
import Image from 'next/image'

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Prabaha's Services</h2>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-800 bg-yellow-400 rounded-full mb-4">Reach goals that matter</div>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Image className="rounded-full mb-4" src={PuppyTraining} width={64} height={64} alt="Puppy Training" />
              <h4 className="h4 mb-2 text-center">Puppy Training</h4>
              <p className="text-lg text-gray-400 text-center">Training methods that will help your puppy learn the basic skills and manners they need to become a well-behaved and happy dog. We will also teach you how to communicate with your puppy, prevent common behavior problems, and bond with your new best friend.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Image className="rounded-full mb-4" src={BasicTraining} width={64} height={64} alt="Basic Obedience Training" />
              <h4 className="h4 mb-2 text-center">Basic Obedience Training</h4>
              <p className="text-lg text-gray-400 text-center">A comprehensive and effective training program that will help your dog learn how to sit, stay, come, heel, leave it, and more. We use reinforcement and fun games to make the training enjoyable and rewarding for both you and your dog.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <Image className="rounded-full mb-4" src={AdvancedTraining} width={64} height={64} alt="Advanced Obedience Training" />
              <h4 className="h4 mb-2 text-center">Advanced Obedience Training</h4>
              <p className="text-lg text-gray-400 text-center">A challenging and rewarding training program that will help your dog learn how to perform complex commands, such as off-leash recall, emergency stop, directional control, and more.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <Image className="rounded-full mb-4" src={HomeTraining} width={64} height={64} alt="Advanced Obedience Training" />
              <h4 className="h4 mb-2">In-Home Training</h4>
              <p className="text-lg text-gray-400 text-center">Customized and professional training sessions right at the comfort of your home. Whether you want to teach your dog basic manners, solve behavior problems, or prepare for a special event, we have the expertise and experience to help you and your dog succeed.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <Image className="rounded-full mb-4" src={GroupClasses} width={64} height={64} alt="Group Classes" />
              <h4 className="h4 mb-2">Group Classes</h4>
              <p className="text-lg text-gray-400 text-center">Small and interactive classes for dogs of all levels, from puppies to seniors, covering topics such as obedience, agility, protection, and more.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <Image className="rounded-full mb-4" src={Daycare} width={64} height={64} alt="Daycare" />
              <h4 className="h4 mb-2">Daycare</h4>
              <p className="text-lg text-gray-400 text-center">Spacious and clean facility with indoor and outdoor areas, where your dog can play, socialize, and relax with other dogs and our caring staff. We also provide enrichment activities, such as games, puzzles, and toys, to keep your dog mentally and physically engaged.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
