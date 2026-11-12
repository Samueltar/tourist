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
    // Header & Nav - Real, Intuitive, Industry-Standard Names
    brandName: 'THE TOURIST',
    brandTagline: 'CULTURAL TOURS IN ETHIOPIA',
    navTours: 'Tours',
    navDestinations: 'Destinations',
    navAbout: 'About Us',
    navJournal: 'Travel Journal',
    navGuide: 'Travel Guide',
    navContact: 'Contact Us',
    // Aliases to guarantee backwards compatibility
    navCulturalTours: 'Tours',
    navJourneys: 'Tours',
    navLivingCulture: 'About Us',
    navEthos: 'About Us',
    navStories: 'Travel Journal',
    navPracticalities: 'Travel Guide',
    curateJourney: 'Book a Tour',
    saved: 'Saved Tours',

    // Hero
    liveIndicator: 'Addis Ababa • Gateway to 3,000 Years of Living Culture',
    heroEyebrow: 'Cultural Tours in Ethiopia',
    heroTitle1: 'Beyond the',
    heroTitle2: 'Expected.',
    heroSubtitle:
      'Thoughtful, private cultural journeys through 3,000 years of living history, soaring alpine highlands, and the spiritual soul of Ethiopia.',
    exploreJourneysBtn: 'Explore Tours',
    discoverRegionsBtn: 'Discover Destinations',
    signatureRoutes: 'Signature Routes:',

    // Ethos / About Us
    ethosEyebrow: 'Living Ethiopian Heritage',
    ethosTitle1: 'Not a museum of ruins.',
    ethosTitle2: 'An unbroken, living civilization.',
    ethosBody:
      'Ethiopia is unlike any other country on Earth. It is the only African nation that was never colonized, preserving an indigenous script, a distinct calendar seven years behind the Gregorian, and a continuous Christian, Islamic, and indigenous heritage dating back millennia.',
    ethosQuote:
      '"When you stand inside a rock-hewn sanctuary in Lalibela, the priest chanting before you is singing the same Ge\'ez prayers his ancestors chanted eight hundred years ago. The flame was lit in the 12th century and has never been extinguished."',
    ethosAuthor: 'Abenezer Sisay',
    ethosRole: 'Founder, The Tourist (ጎብኚው)',
    thoughtfulBadge: 'Thoughtful Cultural Travel',
    thoughtfulBadgeDesc:
      'Every expedition directly funds local highland heritage conservation and family-run micro-enterprises.',

    // Tours
    curatedEyebrow: 'Cultural Expeditions',
    curatedTitle: 'Tours Crafted for',
    curatedTitleHighlight: 'Depth',
    allJourneys: 'All Tours',
    historical: 'Historical',
    wildlife: 'Wildlife',
    cultural: 'Cultural',
    spiritual: 'Spiritual',
    viewAllJourneys: 'View All 9 Tours',
    exploreItinerary: 'Explore Itinerary',
    explore: 'Explore',

    // Destinations
    destEyebrow: 'Destination Discovery',
    destTitle: 'The Diverse Landscapes of',
    destTitleHighlight: 'Ethiopia',
    destSubtitle:
      'From 4,500-meter afro-alpine summits to salt depressions 120 meters below sea level, explore ten distinct geographical and cultural regions across the country.',
    allRegions: 'All Regions',
    theNorth: 'The North',
    theSouth: 'The South',
    theEast: 'The East',
    central: 'Central',
    exploreAllDestinations: 'Explore All 10 Destinations & Regional Maps',

    // Living Rituals (Buna & Mesob)
    bunaEyebrow: 'Cultural Intimacy',
    bunaTitle: 'The Mesob: Where travel becomes a',
    bunaTitleHighlight: 'shared table.',
    bunaBody:
      'In Ethiopian tradition, dining is never a solitary act. Food is served inside the Mesob—a handwoven lidded basket crafted from vibrant dried grass. When the conical lid is lifted off, it reveals a round platter of Injera lined with fragrant stews, inviting everyone present to eat from the single shared plate.',
    gurshaTitle: 'The Gursha Gesture',
    gurshaDesc:
      'The act of placing a morsel of food directly into the mouth of another—a sacred expression of friendship and mutual care.',
    threeRoundsTitle: 'The Three Rounds of Buna',
    threeRoundsDesc:
      'Awel (the first brew), Kalei (the second reflection), and Bereka (the final blessing)—bringing conversation to its deepest place.',
    readBunaEssay: 'Read Essay: The Buna Ritual',

    // Journal
    journalEyebrow: 'Travel Journal',
    journalTitle: 'Dispatches from the',
    journalTitleHighlight: 'Field',
    exploreAllEssays: 'Explore All Articles',
    readFullEssay: 'Read Full Article',

    // Guest Perspectives
    guestEyebrow: 'Traveler Perspectives',
    guestTitle: 'Voices from',
    guestTitleHighlight: 'Our Guests',
    guestSubtitle:
      'Reflections from travelers who explored Ethiopia on private cultural journeys with The Tourist (ጎብኚው).',

    // Bespoke CTA
    ctaEyebrow: 'Tailor-Made Planning',
    ctaTitle: 'No two journeys should ever be identical.',
    ctaTitleHighlight: 'Let us design yours.',
    ctaSubtitle:
      'Whether you envision helicopter flights over the Danakil volcanic craters, private dawn liturgical viewings in Lalibela, or trekking the high plateau of the Bale Mountains, our travel designers will craft an itinerary matched precisely to your pace and passions.',
    startPlanBtn: 'Start Your Custom Tour Plan',
    speakConciergeBtn: 'Speak with a Concierge',

    // Common
    altitude: 'Altitude',
    bestSeason: 'Best Season',
    pricingGuidance: 'Custom Tour Quotation',
    privateTailorMade: '100% Private',
    bookThisJourney: 'Book This Tour',

    // Wishlist Drawer
    wishlistTitle: 'Saved Tours',
    shortlistEmpty: 'Your shortlist is empty',
    shortlistEmptyDesc: 'Explore our cultural tours and click the heart icon on any itinerary to save and compare your favorites.',
    browseAllJourneys: 'Browse All Tours',
    planWithSaved: 'Plan Tour With Saved',
    bespokeSummary: 'Our travel designers will weave your selected highlights into one bespoke itinerary.',

    // Tours Page
    toursHeaderEyebrow: 'Cultural Expeditions',
    toursHeaderTitle: 'Cultural Tours of Wonder & Distinction',
    toursHeaderDesc: 'Each route is privately guided, thoughtfully paced, and customizable to your passions.',
    searchPlaceholder: 'Search by destination, highlight, or route...',
    allStyles: 'All Styles',
    anyDuration: 'Any Duration',
    noToursFound: 'No tours match your filters',
    resetFilters: 'Reset Filters',

    // Destinations Page
    destHeaderEyebrow: 'Geographical & Cultural Circuits',
    destHeaderTitle: 'Ten Distinct Realities',
    destHeaderDesc: 'From volcanic salt plains to ancient walled sanctuaries and afro-alpine peaks.',

    // About Page
    aboutHeaderEyebrow: 'About Us',
    aboutHeaderTitle: 'Stewards of Ethiopia’s Living Heritage',
    aboutFoundersNote: "Founder's Note",

    // Journal Page
    journalHeaderEyebrow: 'Field Notes & Articles',
    journalHeaderTitle: 'Stories from The Tourist (ጎብኚው)',

    // FAQs Page
    faqsHeaderEyebrow: 'Travel Guide & FAQs',
    faqsHeaderTitle: 'Everything You Need to Know Before Traveling to Ethiopia',

    // Contact & Book
    contactHeaderEyebrow: 'Contact Us',
    contactHeaderTitle: 'Connect with The Tourist Concierge',
    bookHeaderEyebrow: 'Bespoke Tour Planning',
    bookHeaderTitle: 'Design Your Custom Ethiopian Tour',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number (Optional)',
    preferredDates: 'Preferred Travel Dates',
    travelerCount: 'Number of Travelers',
    travelStyle: 'Travel Style / Desired Focus',
    additionalNotes: 'Tell us about your passions, pace, or special requests...',
    submitInquiry: 'Submit Tour Inquiry',
    inquirySuccess: 'Thank you. Our travel concierge will reach out within 24 hours.',
  },

  am: {
    // Header & Nav - Real, Clear Amharic Names
    brandName: 'ጎብኚው',
    brandTagline: 'የኢትዮጵያ ባህላዊ ጉዞዎች',
    navTours: 'ጉዞዎች',
    navDestinations: 'መዳረሻዎች',
    navAbout: 'ስለ እኛ',
    navJournal: 'የጉዞ ማስታወሻ',
    navGuide: 'የጉዞ መመሪያ',
    navContact: 'ያግኙን',
    // Aliases to guarantee backwards compatibility
    navCulturalTours: 'ጉዞዎች',
    navJourneys: 'ጉዞዎች',
    navLivingCulture: 'ስለ እኛ',
    navEthos: 'ስለ እኛ',
    navStories: 'የጉዞ ማስታወሻ',
    navPracticalities: 'የጉዞ መመሪያ',
    curateJourney: 'ጉዞ ይጀምሩ',
    saved: 'የተመረጡ',

    // Hero
    liveIndicator: 'አዲስ አበባ • የ3,000 ዓመታት ሕያው ታሪክ መግቢያ',
    heroEyebrow: 'የኢትዮጵያ ባህላዊ ጉዞዎች',
    heroTitle1: 'ከተጠበቀው',
    heroTitle2: 'በላይ።',
    heroSubtitle:
      'በ3,000 ዓመታት ሕያው ታሪክ፣ አስደናቂ የተራራ ሰንሰለቶች እና በአፍሪካ ቀንድ መንፈሳዊ ድምቀት ውስጥ የሚደረጉ ጥንቃቄ የተሞላባቸው የቅንጦት ጉዞዎች።',
    exploreJourneysBtn: 'ጉዞዎችን ያስሱ',
    discoverRegionsBtn: 'መዳረሻዎችን ይመርምሩ',
    signatureRoutes: 'ዋና ዋና መስመሮች:',

    // Ethos / About Us
    ethosEyebrow: 'የማይቋረጥ የሥልጣኔ ሰንሰለት',
    ethosTitle1: 'የፈራረሰ ቅርስ ሳይሆን፤',
    ethosTitle2: 'ሕያው እና ዘላቂ ሥልጣኔ።',
    ethosBody:
      'ኢትዮጵያ በዓለም ላይ ወደር የላትም። በቅኝ ግዛት ያልተገዛች ብቸኛ አፍሪካዊት ሀገር በመሆኗ የራሷ ፊደል፣ የራሷ ዘመን አቆጣጠር እና የሺህ ዓመታት የክርስትና፣ የእስልምና እና የባህላዊ ቅርሶች ባለቤት ናት።',
    ethosQuote:
      '"በላሊበላ ፍልፍል አብያተ ክርስቲያናት ውስጥ ሲቆሙ ካህናት የሚያሰሙት የግዕዝ ዜማ አባቶቻቸው ከስምንት መቶ ዓመታት በፊት ያሰሙት ያው ዜማ ነው። በ12ኛው ክፍለ ዘመን የተለኮሰው ሻማ እስካሁን አልጠፋም።"',
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
    exploreItinerary: 'የጉዞ ፕሮግራሙን ይመልከቱ',
    explore: 'ያስሱ',

    // Destinations
    destEyebrow: 'የመዳረሻዎች ዳሰሳ',
    destTitle: 'አስደናቂው የኢትዮጵያ',
    destTitleHighlight: 'መልክዓ-ምድር',
    destSubtitle:
      'ከ4,500 ሜትር ከፍታ ካላቸው አፍሮ-አልፓይን የተራራ ጫፎች አንስቶ ከባህር ወለል በታች 120 ሜትር ጥልቀት ወዳለው የጨው በርሃ ድረስ አስር የተለያዩ ክልሎችን ይጎብኙ።',
    allRegions: 'ሁሉም ክልሎች',
    theNorth: 'ሰሜኑ',
    theSouth: 'ደቡቡ',
    theEast: 'ምሥራቁ',
    central: 'መካከለኛው',
    exploreAllDestinations: 'ሁሉንም 10 መዳረሻዎች እና ካርታዎች ያስሱ',

    // Living Rituals (Buna & Mesob)
    bunaEyebrow: 'ባህላዊ መቀራረብ',
    bunaTitle: 'መሶብ፡ ጉዞ የጋራ ማዕድ',
    bunaTitleHighlight: 'የሚሆንበት ቦታ።',
    bunaBody:
      'በኢትዮጵያ ባህል ምግብ መመገብ በፍጹም የብቻ ተግባር አይደለም። ምግቡ የሚቀርበው ከደማቅ ሣር በተሠራ ክዳን ባለው መሶብ ውስጥ ነው። ሾጣጣው ክዳን ሲነሳ በመዓዛ በተሞሉ ወጦች የተከበበ የእንጀራ ማዕድ ይገለጣል፤ ሁሉም ሰው ከአንድ የጋራ ማዕድ አብሮ ይመገባል።',
    gurshaTitle: 'የጉርሻ ክብር',
    gurshaDesc:
      'ምግብን በጥንቃቄ አንስቶ ለሌላው ሰው በአክብሮት ማጉረስ—የጥልቅ ፍቅርና ወዳጅነት መግለጫ።',
    threeRoundsTitle: 'ሦስቱ የቡና ጽዋዎች',
    threeRoundsDesc:
      'አቦል (የመጀመሪያው ጽዋ)፣ ቶና (ሁለተኛው ነጸብራቅ) እና በረካ (የመጨረሻው ምርቃት)—ውይይቱን ወደ ጥልቅ ደረጃ ያደርሱታል።',
    readBunaEssay: 'ጽሑፉን ያንብቡ፡ የቡና ሥነ-ሥርዓት',

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
      'ከጎብኚው (The Tourist) ጋር በግል የተጓዙ እንግዶች ያካፈሉት የማይረሳ ልምድ።',

    // Bespoke CTA
    ctaEyebrow: 'የግል ጉዞ ማዘጋጀት',
    ctaTitle: 'ሁለት ተመሳሳይ ጉዞዎች በፍጹም ሊኖሩ አይገባም።',
    ctaTitleHighlight: 'የእርስዎን እንንደፍልዎ።',
    ctaSubtitle:
      'በዳናኪል የእሳተ ገሞራ ጉድጓዶች ላይ በሄሊኮፕተር መብረር ቢፈልጉ፣ በላሊበላ የማለዳ ጸሎትን ለመካፈል ቢሹ፣ ወይም በባሌ ተራሮች ለመጓዝ ቢያስቡ፣ የጉዞ ባለሙያዎቻችን እንደ ፍላጎትዎ ያዘጋጁልዎታል።',
    startPlanBtn: 'የግል ጉዞዎን ማዘጋጀት ይጀምሩ',
    speakConciergeBtn: 'የጉዞ አማካሪ ያነጋግሩ',

    // Common
    altitude: 'ከፍታ',
    bestSeason: 'ምርጥ የጉዞ ወቅት',
    pricingGuidance: 'የጉዞ ዋጋ መመሪያ',
    privateTailorMade: '100% የግል',
    bookThisJourney: 'ይህንን ጉዞ ይያዙ',

    // Wishlist Drawer
    wishlistTitle: 'የተመረጡ ጉዞዎች',
    shortlistEmpty: 'ምንም የተመረጠ ጉዞ የለም',
    shortlistEmptyDesc: 'የቀረቡትን ባህላዊ ጉዞዎች ይመልከቱ እና የልብ ቅርጽ ምልክቷን በመጫን የሚወዷቸውን ጉዞዎች ይምረጡ።',
    browseAllJourneys: 'ሁሉንም ጉዞዎች ይመልከቱ',
    planWithSaved: 'ከተመረጡት ጋር ጉዞ ይንደፉ',
    bespokeSummary: 'የጉዞ ባለሙያዎቻችን የመረጧቸውን ቦታዎች በማካተት ልዩ የግል ጉዞ ያዘጋጁልዎታል።',

    // Tours Page
    toursHeaderEyebrow: 'ባህላዊ ጉዞዎች',
    toursHeaderTitle: 'ልዩ እና ጥንቃቄ የተሞላባቸው የኢትዮጵያ ጉዞዎች',
    toursHeaderDesc: 'እያንዳንዱ ጉዞ በግል አስጎብኚ የሚመራና እንደ ፍላጎትዎ የሚስተካከል ነው።',
    searchPlaceholder: 'በመዳረሻ፣ በልዩ ቦታ ወይም በጉዞ መስመር ይፈልጉ...',
    allStyles: 'ሁሉም ዓይነቶች',
    anyDuration: 'ማንኛውም ቆይታ',
    noToursFound: 'የመረጡትን መስፈርት የሚያሟላ ጉዞ አልተገኘም',
    resetFilters: 'ማጣሪያውን አጽዳ',

    // Destinations Page
    destHeaderEyebrow: 'ክልላዊ እና ባህላዊ መስመሮች',
    destHeaderTitle: 'አስር የተለያዩ ዓለማት',
    destHeaderDesc: 'ከእሳተ ገሞራ የጨው ሜዳዎች አንስቶ እስከ ጥንታዊ ቅጥር ከተሞችና የተራራ ጫፎች ድረስ።',

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
    contactHeaderTitle: 'የጎብኚው የጉዞ አማካሪዎችን ያነጋግሩ',
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