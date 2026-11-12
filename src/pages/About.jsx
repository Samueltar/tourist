import React from 'react'
import { ShieldCheck, Heart, Sparkles, Award, ArrowRight, Users, Compass } from 'lucide-react'
import { useMesob } from '../components/MesobTransition'
import { EthiopianDivider } from '../components/EthiopianPattern'

export default function About() {
  const { navigateWithMesob } = useMesob()

  const team = [
    {
      name: 'Abenezer Sisay',
      role: 'Founder & Experience Director',
      bio: 'Born and raised in Ethiopia with a deep passion for storytelling, Abenezer founded Ancient Path with one guiding conviction: that true luxury in travel is not gold taps, but profound human connection and flawless, thoughtful detail.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Dr. Meron Tadesse',
      role: 'Senior Historian & Cultural Scholar',
      bio: 'Specialist in Ge\'ez liturgy and medieval Christian-Islamic highland architecture. Meron provides our travelers with private, unprecedented access to sacred manuscripts, monastic treasuries, and historic guardians.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Daniel Bekele',
      role: 'Lead Naturalist & Expedition Master',
      bio: 'With over fifteen years tracking Ethiopian Wolves in the Bale alpine plateaus and guiding Simien escarpment treks, Daniel leads our wilderness expeditions with unmatched safety and naturalist depth.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
  ]

  const pillars = [
    {
      title: 'Slow, Thoughtful Travel',
      description: 'We refuse to rush through five UNESCO sites in three days. We design journeys that linger—leaving time for sunrise prayers, unexpected conversations, and quiet highland walks.',
      icon: Compass,
    },
    {
      title: 'Uncompromised Cultural Dignity',
      description: 'We do not treat living communities as human zoos. In the Omo Valley and highland villages, our exchanges are grounded in mutual respect, fair compensation, and genuine friendship.',
      icon: Heart,
    },
    {
      title: 'Local Empowerment',
      description: '100% of our team—from our drivers to our specialist historians and camp chefs—are Ethiopians. Your travel investment remains directly in the communities that welcome you.',
      icon: ShieldCheck,
    },
  ]

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#202622] pt-24 sm:pt-28 pb-20 selection:bg-[#B86B48] selection:text-white">
      {/* Editorial Header */}
      <div className="bg-[#173D32] text-[#F5F0E6] py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#C3A16A] font-semibold">
            Our Story & Heritage
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight">
            The Ethos of <span className="italic font-normal text-[#C3A16A]">Ancient Path</span>
          </h1>
          <p className="font-sans text-xs sm:text-base text-[#E9E0D1]/85 max-w-2xl mx-auto font-light leading-relaxed">
            Ancient Path is built around a simple belief: the best journeys are created by people 
            who care deeply about the place, the details, and the travelers moving through it.
          </p>
        </div>
      </div>

      {/* Founder's Story & The Brand Genesis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#C3A16A]/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B86B48] font-bold">
                The Origins
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-light leading-tight">
                Born from a love of <span className="italic font-normal text-[#C3A16A]">Ethiopia's living soul.</span>
              </h2>
              <p className="font-sans text-sm text-[#202622]/85 leading-relaxed">
                For decades, international travel to Ethiopia was characterized either by rigid bus package tours 
                rushing across northern churches, or by rough budget overland treks that lacked care and refinement. 
                There was rarely an option for travelers who sought luxury of experience—impeccable local knowledge, 
                superb boutique accommodations, and profound cultural immersion.
              </p>
              <p className="font-sans text-sm text-[#202622]/85 leading-relaxed">
                Ancient Path Ethiopia was founded by Abenezer Sisay to bridge this divide. We combine the warmth 
                of traditional Ethiopian hospitality with the exacting standards of the world’s finest bespoke 
                travel design.
              </p>
              <div className="pt-2">
                <blockquote className="border-l-2 border-[#C3A16A] pl-4 italic font-serif text-lg text-[#173D32]">
                  "We don't sell tourist itineraries. We invite you into the living memory of our homeland."
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C3A16A]/30">
                <img
                  src="https://res.cloudinary.com/dw1ohipim/image/upload/v1786286004/zmtnjnikbbfhqz06ea5j.jpg"
                  alt="Gondar Castle Architecture"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#C3A16A] font-bold">
                    Historical Grounding
                  </span>
                  <p className="font-serif text-lg text-white font-medium mt-1">
                    Gondar's 17th-century Royal Enclosure, a testament to sovereign African civilization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B86B48] font-bold">
            How We Travel
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-medium mt-1">
            Our Guiding Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-[#C3A16A]/20 shadow-sm space-y-4 hover:border-[#C3A16A] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#173D32] text-[#C3A16A] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#173D32]">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs text-[#202622]/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* The Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B86B48] font-bold">
            On the Ground
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-medium mt-1">
            The People Behind Ancient Path
          </h2>
          <p className="text-xs text-[#202622]/70 mt-2">
            A small, proactive team working closely together with shared responsibility for every guest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-[#C3A16A]/20 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="block text-[10px] uppercase tracking-wider text-[#B86B48] font-bold">
                  {member.role}
                </span>
                <h3 className="font-serif text-2xl text-[#173D32] font-medium">
                  {member.name}
                </h3>
                <p className="font-sans text-xs text-[#202622]/75 leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="bg-[#173D32] text-[#F5F0E6] rounded-3xl p-10 sm:p-14 shadow-xl border border-[#C3A16A]/30 space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl font-light">
            Ready to discover Ethiopia with us?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#E9E0D1]/85 max-w-xl mx-auto leading-relaxed">
            Let us begin crafting your itinerary. We respond to all inquiries within 24 hours with a thoughtful, personalized preliminary design.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigateWithMesob('/book')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#B86B48] hover:bg-[#a35c3b] text-white text-xs font-bold uppercase tracking-widest shadow transition-all"
            >
              Curate Your Journey
            </button>
            <button
              onClick={() => navigateWithMesob('/contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#C3A16A]/40 text-[#F5F0E6] text-xs font-semibold uppercase tracking-widest hover:bg-[#284D3C] transition-all"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
