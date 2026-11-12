import React from 'react'
import { ShieldCheck, Heart, Sparkles, Award, ArrowRight, Users, Compass } from 'lucide-react'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { TiletBorderPrimary, TiletDivider, TiletCorner } from '../components/TiletPatterns'

export default function About() {
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()

  const team = [
    {
      name: language === 'am' ? 'አበነዘር ሲሳይ' : 'Abenezer Sisay',
      role: language === 'am' ? 'መሥራችና የጉዞዎች ዳይሬክተር' : 'Founder & Experience Director',
      bio: language === 'am'
        ? 'በኢትዮጵያ ተወልዶ ያደገ፣ ሀገሩንና ታሪኳን በጥልቅ የሚወድ። እውነተኛ የቅንጦት ጉዞ ማለት ውድ ቁሳቁስ ሳይሆን ከሰዎች ጋር የሚፈጠር ጥልቅ ግንኙነትና እንከን የለሽ አገልግሎት ነው ብሎ ያምናል።'
        : 'Born and raised in Ethiopia with a deep passion for storytelling, Abenezer founded Ancient Path with one guiding conviction: that true luxury in travel is not gold taps, but profound human connection and flawless, thoughtful detail.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: language === 'am' ? 'ዶ/ር ሜሮን ታደሰ' : 'Dr. Meron Tadesse',
      role: language === 'am' ? 'ከፍተኛ የታሪክና የባህል ተመራማሪ' : 'Senior Historian & Cultural Scholar',
      bio: language === 'am'
        ? 'የግዕዝ ሥነ-ጽሑፍ እና የመካከለኛው ዘመን የክርስትናና የእስልምና ሥነ-ሕንጻ ባለሙያ። ለተጓዦቻችን በዋጋ የማይተመኑ ጥንታዊ ብራናዎችና የገዳማት ቅርሶችን በግል የመጎብኘት ልዩ ዕድል ያመቻቻሉ።'
        : 'Specialist in Ge\'ez liturgy and medieval Christian-Islamic highland architecture. Meron provides our travelers with private, unprecedented access to sacred manuscripts, monastic treasuries, and historic guardians.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: language === 'am' ? 'ዳንኤል በቀለ' : 'Daniel Bekele',
      role: language === 'am' ? 'የዱር አራዊትና የተፈጥሮ ጉዞ መሪ' : 'Lead Naturalist & Expedition Master',
      bio: language === 'am'
        ? 'በስሜንና በባሌ ተራሮች ውስጥ የኢትዮጵያ ቀይ ቀበሮዎችንና ብርቅዬ እንስሳትን በማሰስ ከ15 ዓመታት በላይ ልምድ ያለው። የተፈጥሮ ጉዞዎቻችንን በከፍተኛ ጥንቃቄ ይመራል።'
        : 'With over fifteen years tracking Ethiopian Wolves in the Bale alpine plateaus and guiding Simien escarpment treks, Daniel leads our wilderness expeditions with unmatched safety and naturalist depth.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
  ]

  const pillars = [
    {
      title: language === 'am' ? 'የረጋና ጥንቃቄ የተሞላበት ጉዞ' : 'Slow, Thoughtful Travel',
      description: language === 'am'
        ? 'በጥቂት ቀናት ውስጥ በርካታ ቦታዎችን ለማዳረስ አንጣደፍም። በቂ ጊዜ ወስደው የንጋት ጸሎት እንዲያደምጡ፣ ከሰዎች ጋር እንዲነጋገሩና በተረጋጋ መንፈስ እንዲጎበኙ እናደርጋለን።'
        : 'We refuse to rush through five UNESCO sites in three days. We design journeys that linger—leaving time for sunrise prayers, unexpected conversations, and quiet highland walks.',
      icon: Compass,
    },
    {
      title: language === 'am' ? 'የማይደፈር የባህል ክብር' : 'Uncompromised Cultural Dignity',
      description: language === 'am'
        ? 'ሕያው ማህበረሰቦችን እንደ ሙዚየም አንመለከታቸውም። በኦሞ ሸለቆም ሆነ በደጋማ መንደሮች ግንኙነታችን በእውነተኛ አክብሮት፣ ፍትሃዊ ክፍያና ወዳጅነት ላይ የተመሠረተ ነው።'
        : 'We do not treat living communities as human zoos. In the Omo Valley and highland villages, our exchanges are grounded in mutual respect, fair compensation, and genuine friendship.',
      icon: Heart,
    },
    {
      title: language === 'am' ? 'የአገር ውስጥ ማህበረሰብ ተጠቃሚነት' : 'Local Empowerment',
      description: language === 'am'
        ? 'ከአሽከርካሪዎች እስከ ታሪክ ምሁራን ድረስ 100% የቡድን አባሎቻችን ኢትዮጵያውያን ናቸው። የጉዞ ወጪዎ እንግዳ ተቀባይ የሆኑ የአካባቢ ማህበረሰቦችን በቀጥታ ይጠቅማል።'
        : '100% of our team—from our drivers to our specialist historians and camp chefs—are Ethiopians. Your travel investment remains directly in the communities that welcome you.',
      icon: ShieldCheck,
    },
  ]

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1713] pt-24 sm:pt-28 pb-20 selection:bg-[#B58A43] selection:text-white">
      {/* Editorial Header with Ethiopian Tilet Accents */}
      <div className="relative bg-gradient-to-b from-[#F3EEE5] to-[#FAF8F5] border-b border-[#B58A43]/20 py-16 sm:py-24 overflow-hidden">
        <TiletBorderPrimary className="absolute top-0 left-0 right-0 w-full text-[#B58A43] opacity-60" height={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#B58A43]/30 text-[#B58A43] text-[11px] font-sans font-bold uppercase tracking-[0.25em] shadow-sm">
            <span>{t('aboutHeaderEyebrow')}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1A1713] tracking-tight">
            {language === 'am' ? 'የጥንታዊ ጎዳና' : 'The Ethos of'}{' '}
            <span className="italic font-light text-[#B58A43]">
              {language === 'am' ? 'ፍልስፍና' : 'Ancient Path'}
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-base text-[#302B24]/80 max-w-2xl mx-auto font-light leading-relaxed">
            {language === 'am'
              ? 'ጥንታዊ ጎዳና የተመሠረተው በአንድ ቀላል እምነት ላይ ነው፡ ምርጥ ጉዞዎች የሚፈጠሩት ስለ ሀገራቸው፣ ስለ ዝርዝር ጉዳዮች እና ስለ ተጓዦቻቸው በጥልቅ በሚጨነቁ ሰዎች ነው።'
              : 'Ancient Path is built around a simple belief: the best journeys are created by people who care deeply about the place, the details, and the travelers moving through it.'}
          </p>

          <TiletDivider className="w-56 mx-auto text-[#B58A43] pt-2 opacity-75" />
        </div>
      </div>

      {/* Founder's Story & The Brand Genesis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#B58A43]/25 shadow-xl relative overflow-hidden">
          <TiletCorner position="top-right" className="text-[#B58A43]/30 pointer-events-none" size={32} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                {t('aboutFoundersNote')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1713] font-normal leading-tight">
                {language === 'am' ? 'ከኢትዮጵያ ሕያው ነፍስ ፍቅር' : 'Born from a love of'}{' '}
                <span className="italic font-light text-[#B58A43]">
                  {language === 'am' ? 'የተወለደ' : "Ethiopia's living soul."}
                </span>
              </h2>
              <p className="font-sans text-sm text-[#302B24]/85 leading-relaxed font-light">
                {language === 'am'
                  ? 'ለአያሌ ዓመታት ወደ ኢትዮጵያ የሚደረግ ጉዞ በሁለት ይከፈል ነበር፡ በችኮላ የተሞላ የቡድን አውቶቡስ ጉዞ፣ ወይም ምቾት የሌለው የወጣቶች ጉዞ። ጥልቅ ዕውቀት፣ ምርጥ ደረጃቸውን የጠበቁ ማረፊያዎችና እውነተኛ ባህላዊ ትስስር ለሚፈልጉ ተጓዦች ምቹ አማራጭ አልነበረም።'
                  : 'For decades, international travel to Ethiopia was characterized either by rigid bus package tours rushing across northern churches, or by rough budget overland treks that lacked care and refinement. There was rarely an option for travelers who sought luxury of experience—impeccable local knowledge, superb boutique accommodations, and profound cultural immersion.'}
              </p>
              <p className="font-sans text-sm text-[#302B24]/85 leading-relaxed font-light">
                {language === 'am'
                  ? 'ጥንታዊ ጎዳና ኢትዮጵያ ይህንን ክፍተት ለመሙላት በአበነዘር ሲሳይ ተመሠረተ። የኢትዮጵያን ባህላዊ የእንግዳ ተቀባይነት ሙቀት ከዓለም አቀፍ የቅንጦት ጉዞ ደረጃዎች ጋር በማጣመር ልዩ ተሞክሮ እናቀርባለን።'
                  : 'Ancient Path Ethiopia was founded by Abenezer Sisay to bridge this divide. We combine the warmth of traditional Ethiopian hospitality with the exacting standards of the world’s finest bespoke travel design.'}
              </p>
              <div className="pt-2">
                <blockquote className="border-l-2 border-[#B58A43] pl-4 italic font-serif text-lg text-[#1A1713]">
                  {language === 'am'
                    ? '"የምንሸጠው የቱሪስት ፕሮግራም አይደለም። የምንጋብዝዎት ወደ ሀገራችን ሕያው ትውስታ ውስጥ ነው።"'
                    : '"We don\'t sell tourist itineraries. We invite you into the living memory of our homeland."'}
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#B58A43]/30">
                <img
                  src="https://res.cloudinary.com/dw1ohipim/image/upload/v1786286004/zmtnjnikbbfhqz06ea5j.jpg"
                  alt="Gondar Castle Architecture"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#DDC28D] font-bold">
                    {language === 'am' ? 'ታሪካዊ መሠረት' : 'Historical Grounding'}
                  </span>
                  <p className="font-serif text-lg text-white font-medium mt-1">
                    {language === 'am'
                      ? 'የ17ኛው ክፍለ ዘመን የጎንደር ፋሲል ግቢ — የአፍሪካ ሉዓላዊ ሥልጣኔ ሕያው ምስክር።'
                      : "Gondar's 17th-century Royal Enclosure, a testament to sovereign African civilization."}
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
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
            {language === 'am' ? 'እንዴት እንጓዛለን' : 'How We Travel'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1713] font-normal mt-1">
            {language === 'am' ? 'መሠረታዊ መርሆዎቻችን' : 'Our Guiding Pillars'}
          </h2>
          <TiletDivider className="w-48 mx-auto text-[#B58A43] pt-2 opacity-60" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-[#B58A43]/20 shadow-sm space-y-4 hover:border-[#B58A43] transition-all relative overflow-hidden"
              >
                <TiletCorner position="top-right" className="text-[#B58A43]/20 pointer-events-none" size={24} />
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#B58A43]/40 text-[#B58A43] flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1A1713]">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs text-[#302B24]/80 leading-relaxed font-light">
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
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
            {language === 'am' ? 'በተግባር ላይ' : 'On the Ground'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1713] font-normal mt-1">
            {language === 'am' ? 'ከጥንታዊ ጎዳና ጀርባ ያሉ ባለሙያዎች' : 'The People Behind Ancient Path'}
          </h2>
          <p className="text-xs text-[#302B24]/70 mt-2 font-light">
            {language === 'am'
              ? 'ለእያንዳንዱ እንግዳ ጥንቃቄ የተሞላበት አገልግሎት የሚሰጡ የወሰኑ ባለሙያዎች።'
              : 'A small, proactive team working closely together with shared responsibility for every guest.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-[#B58A43]/20 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="block text-[10px] uppercase tracking-wider text-[#B58A43] font-bold">
                  {member.role}
                </span>
                <h3 className="font-serif text-2xl text-[#1A1713] font-medium">
                  {member.name}
                </h3>
                <p className="font-sans text-xs text-[#302B24]/75 leading-relaxed pt-1 font-light">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="bg-white text-[#1A1713] rounded-3xl p-10 sm:p-14 shadow-xl border border-[#B58A43]/30 space-y-6 relative overflow-hidden">
          <TiletCorner position="top-left" className="text-[#B58A43]/30 pointer-events-none" size={36} />
          <TiletCorner position="bottom-right" className="text-[#B58A43]/30 pointer-events-none" size={36} />

          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1713]">
            {language === 'am' ? 'ኢትዮጵያን ከእኛ ጋር ለማሰስ ዝግጁ ነዎት?' : 'Ready to discover Ethiopia with us?'}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#302B24]/80 max-w-xl mx-auto leading-relaxed font-light">
            {language === 'am'
              ? 'የጉዞ ፕሮግራምዎን ማዘጋጀት እንጀምር። ለሁሉም ጥያቄዎች በ24 ሰዓት ውስጥ ግላዊ ምላሽ እንሰጣለን።'
              : 'Let us begin crafting your itinerary. We respond to all inquiries within 24 hours with a thoughtful, personalized preliminary design.'}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigateWithMesob('/book')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B58A43] to-[#916B2D] hover:from-[#C49A50] hover:to-[#B58A43] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>{t('curateJourney')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateWithMesob('/contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#B58A43]/50 text-[#1A1713] text-xs font-semibold uppercase tracking-widest hover:bg-[#FAF8F5] transition-all"
            >
              {language === 'am' ? 'ቡድናችንን ያነጋግሩ' : 'Contact Our Team'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
