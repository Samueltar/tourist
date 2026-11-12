import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key) => key,
})

export const useLanguage = () => useContext(LanguageContext)

export const translations = {
  en: {
    // Header & Nav - Clean, Direct, Industry-Standard
    brandName: 'THE TOURIST',
    brandTagline: 'CULTURAL TOURS IN ETHIOPIA',
    navTours: 'Tours',
    navDestinations: 'Destinations',
    navAbout: 'About Us',
    navJournal: 'Travel Journal',
    navGuide: 'Travel Guide',
    navContact: 'Contact Us',
    // Aliases
    navCulturalTours: 'Tours',
    navJourneys: 'Tours',
    navLivingCulture: 'About Us',
    navEthos: 'About Us',
    navStories: 'Travel Journal',
    navPracticalities: 'Travel Guide',
    curateJourney: 'Book a Tour',
    saved: 'Saved Tours',

    // Hero - Clean, Punchy, High Impact
    liveIndicator: 'Addis Ababa • Gateway to 3,000 Years of Living Culture',
    heroEyebrow: 'Cultural Tours in Ethiopia',
    heroTitle1: 'Beyond the',
    heroTitle2: 'Expected.',
    heroSubtitle:
      'Private, thoughtfully paced cultural journeys across Ethiopia’s ancient rock churches, sacred festivals, and alpine highlands.',
    exploreJourneysBtn: 'Explore Tours',
    discoverRegionsBtn: 'Discover Destinations',
    signatureRoutes: 'Signature Routes:',

    // Ethos / Living Culture - Shortened & Precise
    ethosEyebrow: 'Living Civilization',
    ethosTitle1: 'Not a museum of ruins.',
    ethosTitle2: 'An unbroken, living heritage.',
    ethosBody:
      'The only uncolonized nation in Africa—preserving ancient indigenous scripts, a distinct calendar, and three millennia of living Christian, Islamic, and highland traditions.',
    ethosQuote:
      '"In Lalibela, the dawn prayers you hear are the same Ge\'ez hymns chanted eight hundred years ago. The flame was never extinguished."',
    ethosAuthor: 'Abenezer Sisay',
    ethosRole: 'Founder, The Tourist (ጎብኚው)',
    thoughtfulBadge: 'Thoughtful Travel',
    thoughtfulBadgeDesc:
      'Every tour directly supports local heritage conservation and family-run micro-enterprises.',

    // Tours Grid
    curatedEyebrow: 'Featured Expeditions',
    curatedTitle: 'Journeys Crafted for',
    curatedTitleHighlight: 'Depth',
    allJourneys: 'All Tours',
    historical: 'Historical',
    wildlife: 'Wildlife',
    cultural: 'Cultural',
    spiritual: 'Spiritual',
    viewAllJourneys: 'View All 9 Tours',
    exploreItinerary: 'Explore Itinerary',
    explore: 'Explore',

    // Destinations - Shortened & Precise
    destEyebrow: 'Destinations',
    destTitle: 'Ten Distinct Landscapes of',
    destTitleHighlight: 'Ethiopia',
    destSubtitle:
      'From 4,500m afro-alpine peaks to salt depressions below sea level—discover Ethiopia’s diverse geographical and cultural circuits.',
    allRegions: 'All Regions',
    theNorth: 'The North',
    theSouth: 'The South',
    theEast: 'The East',
    central: 'Central',
    exploreAllDestinations: 'Explore All 10 Destinations & Regional Maps',

    // Living Rituals (Buna & Mesob) - Clean & Concise
    bunaEyebrow: 'Living Traditions',
    bunaTitle: 'The Mesob: Travel as a',
    bunaTitleHighlight: 'shared table.',
    bunaBody:
      'In Ethiopian tradition, meals are communal. Traditional dishes are served inside a handwoven Mesob basket, inviting travelers to gather around a single shared platter.',
    gurshaTitle: 'The Gursha',
    gurshaDesc:
      'A warm gesture of hospitality, offering food by hand to honor a guest.',
    threeRoundsTitle: 'Three Cups of Buna',
    threeRoundsDesc:
      'Awel, Kalei, and Bereka—the three deliberate brews of the traditional coffee ceremony.',
    readBunaEssay: 'Read the Buna Ritual Guide',

    // Journal
    journalEyebrow: 'Field Journal',
    journalTitle: 'Dispatches from the',
    journalTitleHighlight: 'Field',
    exploreAllEssays: 'Explore All Articles',
    readFullEssay: 'Read Article',

    // Guest Perspectives
    guestEyebrow: 'Guest Perspectives',
    guestTitle: 'Voices from',
    guestTitleHighlight: 'Our Travelers',
    guestSubtitle:
      'Reflections from travelers who explored Ethiopia on private journeys with The Tourist (ጎብኚው).',

    // Tailor-Made CTA - Crisp & Actionable
    ctaEyebrow: 'Tailor-Made Expeditions',
    ctaTitle: 'No two journeys should ever be identical.',
    ctaTitleHighlight: 'Let us design yours.',
    ctaSubtitle:
      'Every expedition is 100% private and tailored to your dates, party size, and interests. Share your travel vision with our Addis Ababa team.',
    startPlanBtn: 'Start Your Custom Plan',
    speakConciergeBtn: 'Speak with a Concierge',

    // Common Specs
    altitude: 'Altitude',
    bestSeason: 'Best Season',
    pricingGuidance: 'Custom Private Quotation',
    privateTailorMade: '100% Private',
    bookThisJourney: 'Book This Tour',

    // Wishlist Drawer
    wishlistTitle: 'Saved Tours',
    shortlistEmpty: 'Your shortlist is empty',
    shortlistEmptyDesc: 'Click the heart icon on any tour card to save and compare your favorite routes.',
    browseAllJourneys: 'Browse All Tours',
    planWithSaved: 'Plan Tour With Saved',
    bespokeSummary: 'Our team will combine your selected routes into a seamless custom itinerary.',

    // Tours Page
    toursHeaderEyebrow: 'Cultural Expeditions',
    toursHeaderTitle: 'Curated Tours of Ethiopia',
    toursHeaderDesc: 'Privately guided, thoughtfully paced itineraries across Ethiopia’s historical and natural wonders.',
    searchPlaceholder: 'Search by region, duration, or highlight...',
    allStyles: 'All Styles',
    anyDuration: 'Any Duration',
    noToursFound: 'No tours match your search',
    resetFilters: 'Reset Filters',

    // Destinations Page
    destHeaderEyebrow: 'Geographical Circuits',
    destHeaderTitle: 'Ten Iconic Regions',
    destHeaderDesc: 'From high afro-alpine ridges to ancient walled citadels and volcanic salt plains.',

    // About Page
    aboutHeaderEyebrow: 'About Us',
    aboutHeaderTitle: 'Stewards of Ethiopia’s Living Heritage',
    aboutFoundersNote: "Founder's Note",

    // Journal Page
    journalHeaderEyebrow: 'Field Dispatches',
    journalHeaderTitle: 'Essays & Cultural Guides',

    // FAQs Page
    faqsHeaderEyebrow: 'Travel Guide & FAQs',
    faqsHeaderTitle: 'Practical Information for Traveling in Ethiopia',

    // Contact & Book
    contactHeaderEyebrow: 'Contact Us',
    contactHeaderTitle: 'Connect with Our Addis Ababa Team',
    bookHeaderEyebrow: 'Bespoke Tour Planning',
    bookHeaderTitle: 'Design Your Custom Ethiopian Tour',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number (Optional)',
    preferredDates: 'Preferred Travel Dates',
    travelerCount: 'Number of Travelers',
    travelStyle: 'Travel Style / Desired Focus',
    additionalNotes: 'Tell us about your interests, preferred pace, or special requests...',
    submitInquiry: 'Submit Tour Inquiry',
    inquirySuccess: 'Thank you. Our travel concierge will reach out within 24 hours.',
  },

  am: {
    // Header & Nav - Clean, Clear Amharic Names
    brandName: 'ጎብኚው',
    brandTagline: 'የኢትዮጵያ ባህላዊ ጉዞዎች',
    navTours: 'ጉዞዎች',
    navDestinations: 'መዳረሻዎች',
    navAbout: 'ስለ እኛ',
    navJournal: 'የጉዞ ማስታወሻ',
    navGuide: 'የጉዞ መመሪያ',
    navContact: 'ያግኙን',
    // Aliases
    navCulturalTours: 'ጉዞዎች',
    navJourneys: 'ጉዞዎች',
    navLivingCulture: 'ስለ እኛ',
    navEthos: 'ስለ እኛ',
    navStories: 'የጉዞ ማስታወሻ',
    navPracticalities: 'የጉዞ መመሪያ',
    curateJourney: 'ጉዞ ይጀምሩ',
    saved: 'የተመረጡ',

    // Hero - Clean, Punchy
    liveIndicator: 'አዲስ አበባ • የ3,000 ዓመታት ሕያው ታሪክ መግቢያ',
    heroEyebrow: 'የኢትዮጵያ ባህላዊ ጉዞዎች',
    heroTitle1: 'ከተጠበቀው',
    heroTitle2: 'በላይ።',
    heroSubtitle:
      'በኢትዮጵያ ጥንታዊ ቅርሶች፣ ቅዱሳን ስፍራዎችና የተራራ ሰንሰለቶች ውስጥ የሚደረጉ ጥንቃቄ የተሞላባቸው የግል ጉዞዎች።',
    exploreJourneysBtn: 'ጉዞዎችን ያስሱ',
    discoverRegionsBtn: 'መዳረሻዎችን ይመርምሩ',
    signatureRoutes: 'ዋና ዋና መስመሮች:',

    // Ethos / About Us - Shortened & Precise
    ethosEyebrow: 'ሕያው ቅርስ',
    ethosTitle1: 'የፈራረሰ ቅርስ ሳይሆን፤',
    ethosTitle2: 'ሕያው እና ዘላቂ ሥልጣኔ።',
    ethosBody:
      'በቅኝ ግዛት ያልተገዛች ብቸኛ አፍሪካዊት ሀገር—የራሷ ፊደል፣ የቀን አቆጣጠር እና የ3,000 ዓመታት ያልተቋረጠ የክርስትና፣ የእስልምና እና የባህል ባለቤት።',
    ethosQuote:
      '"በላሊበላ ካህናቱ የሚያሰሙት የማለዳ የግዕዝ ዜማ ከስምንት መቶ ዓመታት በፊት የተጀመረው ያው ዜማ ነው። የተለኮሰው ሻማ አልጠፋም።"',
    ethosAuthor: 'አበነዘር ሲሳይ',
    ethosRole: 'የጎብኚው (The Tourist) መሥራች',
    thoughtfulBadge: 'ኃላፊነት የተሞላበት ጉዞ',
    thoughtfulBadgeDesc:
      'እያንዳንዱ ጉዞ የአካባቢውን ባህላዊ ቅርሶች ለመንከባከብ እና የማህበረሰቡን ኑሮ ለማሻሻል በቀጥታ ይደግፋል።',

    // Tours
    curatedEyebrow: 'የተመረጡ ጉዞዎች',
    curatedTitle: 'ለጥልቅ ልምድ',
    curatedTitleHighlight: 'የተነደፉ',
    allJourneys: 'ሁሉም ጉዞዎች',
    historical: 'ታሪካዊ',
    wildlife: 'ዱር አራዊት',
    cultural: 'ባህላዊ',
    spiritual: 'መንፈሳዊ',
    viewAllJourneys: 'ሁሉንም 9 ጉዞዎች ይመልከቱ',
    exploreItinerary: 'የጉዞ ዝርዝር',
    explore: 'ያስሱ',

    // Destinations - Shortened & Precise
    destEyebrow: 'መዳረሻዎች',
    destTitle: 'አስር አስደናቂ የኢትዮጵያ',
    destTitleHighlight: 'መልክዓ-ምድሮች',
    destSubtitle:
      'ከ4,500 ሜትር የተራራ ጫፎች እስከ ዝቅተኛው የጨው በርሃ—10 አስደናቂ የኢትዮጵያ መዳረሻዎችን ያስሱ።',
    allRegions: 'ሁሉም ክልሎች',
    theNorth: 'ሰሜኑ',
    theSouth: 'ደቡቡ',
    theEast: 'ምሥራቁ',
    central: 'መካከለኛው',
    exploreAllDestinations: 'ሁሉንም 10 መዳረሻዎች እና ካርታዎች ያስሱ',

    // Living Rituals (Buna & Mesob) - Clean & Concise
    bunaEyebrow: 'ሕያው ልማዶች',
    bunaTitle: 'መሶብ፡ ጉዞ የጋራ ማዕድ',
    bunaTitleHighlight: 'የሚሆንበት ቦታ።',
    bunaBody:
      'በኢትዮጵያ ባህል ምግብ መመገብ የጋራ ማዕድ ነው። ምግቡ በመሶብ ውስጥ ይቀርባል፤ እንግዶች ከአንድ የጋራ ማዕድ አብረው ይመገባሉ።',
    gurshaTitle: 'የጉርሻ ክብር',
    gurshaDesc:
      'ምግብን በጥንቃቄ አንስቶ ለሌላው ሰው ማጉረስ—የጥልቅ አክብሮትና ወዳጅነት መግለጫ።',
    threeRoundsTitle: 'ሦስቱ የቡና ጽዋዎች',
    threeRoundsDesc:
      'አቦል፣ ቶና እና በረካ—ውይይቱን ወደ ጥልቅ ደረጃ የሚያደርሱት ሦስቱ ጽዋዎች።',
    readBunaEssay: 'የቡና ሥነ-ሥርዓት መመሪያን ያንብቡ',

    // Journal
    journalEyebrow: 'የጉዞ ማስታወሻ',
    journalTitle: 'ከመስክ የተሰበሰቡ',
    journalTitleHighlight: 'ታሪኮች',
    exploreAllEssays: 'ሁሉንም ጽሑፎች ያስሱ',
    readFullEssay: 'ሙሉውን ጽሑፍ ያንብቡ',

    // Guest Perspectives
    guestEyebrow: 'የጎብኚዎች አስተያየት',
    guestTitle: 'ከተጓዦቻችን',
    guestTitleHighlight: 'አንደበት',
    guestSubtitle:
      'ከጎብኚው (The Tourist) ጋር በግል የተጓዙ እንግዶች ያካፈሉት ልምድ።',

    // Tailor-Made CTA - Crisp
    ctaEyebrow: 'የግል ጉዞ ማዘጋጀት',
    ctaTitle: 'ሁለት ተመሳሳይ ጉዞዎች በፍጹም ሊኖሩ አይገባም።',
    ctaTitleHighlight: 'የእርስዎን እንንደፍልዎ።',
    ctaSubtitle:
      'እያንዳንዱ ጉዞ እንደ ጊዜዎ፣ ፍላጎትዎና ምርጫዎ በግል የሚዘጋጅ ነው። የህልም ጉዞዎን ይንገሩን፣ ልዩ ፕሮግራም እናዘጋጅልዎታለን።',
    startPlanBtn: 'የግል ጉዞዎን ማዘጋጀት ይጀምሩ',
    speakConciergeBtn: 'የጉዞ አማካሪ ያነጋግሩ',

    // Common
    altitude: 'ከፍታ',
    bestSeason: 'ምርጥ የጉዞ ወቅት',
    pricingGuidance: 'የግል ጉዞ ዋጋ',
    privateTailorMade: '100% የግል',
    bookThisJourney: 'ይህንን ጉዞ ይያዙ',

    // Wishlist Drawer
    wishlistTitle: 'የተመረጡ ጉዞዎች',
    shortlistEmpty: 'ምንም የተመረጠ ጉዞ የለም',
    shortlistEmptyDesc: 'የሚወዷቸውን ጉዞዎች ለማስቀመጥና ለማወዳደር የልብ ቅርጽ ምልክቷን ይጫኑ።',
    browseAllJourneys: 'ሁሉንም ጉዞዎች ይመልከቱ',
    planWithSaved: 'ከተመረጡት ጋር ጉዞ ይንደፉ',
    bespokeSummary: 'የጉዞ ባለሙያዎቻችን የመረጧቸውን ቦታዎች በማካተት ልዩ የግል ጉዞ ያዘጋጁልዎታል።',

    // Tours Page
    toursHeaderEyebrow: 'ባህላዊ ጉዞዎች',
    toursHeaderTitle: 'የተመረጡ የኢትዮጵያ ጉዞዎች',
    toursHeaderDesc: 'በግል አስጎብኚ የሚመሩ፣ በጥንቃቄ የተዘጋጁ ታሪካዊና ተፈጥሯዊ ጉዞዎች።',
    searchPlaceholder: 'በመዳረሻ፣ በቆይታ ወይም በልዩ ቦታ ይፈልጉ...',
    allStyles: 'ሁሉም ዓይነቶች',
    anyDuration: 'ማንኛውም ቆይታ',
    noToursFound: 'የመረጡትን መስፈርት የሚያሟላ ጉዞ አልተገኘም',
    resetFilters: 'ማጣሪያውን አጽዳ',

    // Destinations Page
    destHeaderEyebrow: 'ክልላዊ መስመሮች',
    destHeaderTitle: 'አስር ታዋቂ መዳረሻዎች',
    destHeaderDesc: 'ከተራራ ጫፎች አንስቶ እስከ ጥንታዊ ቅጥር ከተሞችና የጨው ሜዳዎች ድረስ።',

    // About Page
    aboutHeaderEyebrow: 'ስለ እኛ',
    aboutHeaderTitle: 'የኢትዮጵያ ሕያው ቅርስ ጠባቂዎች',
    aboutFoundersNote: 'የመሥራቹ መልእክት',

    // Journal Page
    journalHeaderEyebrow: 'የመስክ ማስታወሻዎች',
    journalHeaderTitle: 'ከጎብኚው (The Tourist) የተሰነዱ ታሪኮች',

    // FAQs Page
    faqsHeaderEyebrow: 'የጉዞ መመሪያ እና ጥያቄዎች',
    faqsHeaderTitle: 'ወደ ኢትዮጵያ ከመጓዝዎ በፊት ማወቅ የሚገቡዎት ነገሮች',

    // Contact & Book
    contactHeaderEyebrow: 'ያግኙን',
    contactHeaderTitle: 'የአዲስ አበባ ቡድናችንን ያነጋግሩ',
    bookHeaderEyebrow: 'የግል ጉዞ ማዘጋጃ',
    bookHeaderTitle: 'የህልም ጉዞዎን ይንደፉ',
    fullName: 'ሙሉ ስም',
    emailAddress: 'ኢሜይል አድራሻ',
    phoneNumber: 'ስልክ ቁጥር (አስፈላጊ ከሆነ)',
    preferredDates: 'የሚመርጡት የጉዞ ጊዜ',
    travelerCount: 'የተጓዦች ብዛት',
    travelStyle: 'የጉዞ ዘይቤ / የሚፈልጉት ትኩረት',
    additionalNotes: 'ስለ ፍላጎትዎ እና ልዩ ጥያቄዎችዎ ይንገሩን...',
    submitInquiry: 'የጉዞ ጥያቄዎን ይላኩ',
    inquirySuccess: 'እናመሰግናለን። የጉዞ ባለሙያችን በ24 ሰዓት ውስጥ ያገኝዎታል።',
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('the_tourist_lang')
      return saved === 'am' ? 'am' : 'en'
    } catch {
      return 'en'
    }
  })

  const setLanguage = (lang) => {
    const nextLang = lang === 'am' ? 'am' : 'en'
    setLanguageState(nextLang)
    try {
      localStorage.setItem('the_tourist_lang', nextLang)
      document.documentElement.lang = nextLang
    } catch (e) {
      console.warn(e)
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en')
  }

  useEffect(() => {
    try {
      document.documentElement.lang = language
    } catch (e) {
      console.warn(e)
    }
  }, [language])

  const t = (key) => {
    const langDict = translations[language] || translations.en
    return langDict[key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}