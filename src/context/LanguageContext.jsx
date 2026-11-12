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
    // Header & Nav
    brandName: 'ANCIENT PATH',
    brandTagline: 'CULTURAL TOURS IN ETHIOPIA',
    navCulturalTours: 'Cultural Tours',
    navDestinations: 'Destinations',
    navLivingCulture: 'Living Culture',
    navJournal: 'Field Journal',
    navGuide: 'Travel Guide',
    navInquire: 'Inquire',
    navJourneys: 'Cultural Tours',
    navEthos: 'Living Culture',
    navStories: 'Field Journal',
    navPracticalities: 'Travel Guide',
    navContact: 'Inquire',
    curateJourney: 'Curate Journey',
    saved: 'Saved',

    // Hero
    liveIndicator: 'Addis Ababa • Gateway to 3,000 Years of Heritage',
    heroEyebrow: 'Cultural Tours in Ethiopia',
    heroTitle1: 'Beyond the',
    heroTitle2: 'Expected.',
    heroSubtitle:
      'Thoughtful, private journeys through 3,000 years of living history, soaring alpine highlands, and the spiritual soul of the Horn of Africa.',
    exploreJourneysBtn: 'Explore Curated Journeys',
    discoverRegionsBtn: 'Discover Regions',
    signatureRoutes: 'Signature Routes:',

    // Ethos
    ethosEyebrow: 'The Unbroken Continuum',
    ethosTitle1: 'Not a museum of ruins.',
    ethosTitle2: 'An unbroken, living civilization.',
    ethosBody:
      'Ethiopia is unlike any other country on Earth. It is the only African nation that was never colonized, preserving an indigenous script, a distinct calendar seven years behind the Gregorian, and a continuous Christian, Islamic, and indigenous heritage dating back millennia.',
    ethosQuote:
      '"When you stand inside a rock-hewn sanctuary in Lalibela, the priest chanting before you is singing the same Ge\'ez prayers his ancestors chanted eight hundred years ago. The flame was lit in the 12th century and has never been extinguished."',
    ethosAuthor: 'Abenezer Sisay',
    ethosRole: 'Founder, Ancient Path Ethiopia',
    thoughtfulBadge: 'Thoughtful Travel',
    thoughtfulBadgeDesc:
      'Every expedition directly funds local highland heritage conservation and family-run micro-enterprises.',

    // Curated Journeys
    curatedEyebrow: 'Curated Expeditions',
    curatedTitle: 'Journeys Crafted for',
    curatedTitleHighlight: 'Depth',
    allJourneys: 'All Journeys',
    historical: 'Historical',
    wildlife: 'Wildlife',
    cultural: 'Cultural',
    spiritual: 'Spiritual',
    viewAllJourneys: 'View All 9 Curated Journeys',
    exploreItinerary: 'Explore Itinerary',
    explore: 'Explore',

    // Destinations
    destEyebrow: 'Destination Discovery',
    destTitle: 'The Landscapes of',
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
    journalEyebrow: 'Field Journal',
    journalTitle: 'Dispatches from the',
    journalTitleHighlight: 'Path',
    exploreAllEssays: 'Explore All Field Essays',
    readFullEssay: 'Read Full Essay',

    // Guest Perspectives
    guestEyebrow: 'Guest Perspectives',
    guestTitle: 'Voices from the',
    guestTitleHighlight: 'Path',
    guestSubtitle:
      'Reflections from travelers who experienced the private bespoke journeys of Ancient Path.',

    // Bespoke CTA
    ctaEyebrow: 'Bespoke Curation',
    ctaTitle: 'No two journeys should ever be identical.',
    ctaTitleHighlight: 'Let us design yours.',
    ctaSubtitle:
      'Whether you envision helicopter flights over the Danakil volcanic craters, private dawn liturgical viewings in Lalibela, or trekking the high plateau of the Bale Mountains, our travel designers will craft an itinerary matched precisely to your pace and passions.',
    startPlanBtn: 'Start Your Custom Plan',
    speakConciergeBtn: 'Speak with a Concierge',

    // Common
    altitude: 'Altitude',
    bestSeason: 'Best Season',
    pricingGuidance: 'Custom Luxury Quotation',
    privateTailorMade: '100% Private',
    bookThisJourney: 'Book This Journey',

    // Wishlist Drawer
    wishlistTitle: 'Saved Journeys',
    shortlistEmpty: 'Your shortlist is empty',
    shortlistEmptyDesc: 'Explore our curated journeys and click the heart icon on any itinerary to save and compare your favorites.',
    browseAllJourneys: 'Browse All Journeys',
    planWithSaved: 'Plan Trip With Saved',
    bespokeSummary: 'Our travel designers will weave your selected highlights into one bespoke itinerary.',

    // Tours Page
    toursHeaderEyebrow: 'Curated Expeditions',
    toursHeaderTitle: 'Journeys of Wonder & Distinction',
    toursHeaderDesc: 'Each route is privately guided, thoughtfully paced, and customizable to your passions.',
    searchPlaceholder: 'Search by destination, highlight, or route...',
    allStyles: 'All Styles',
    anyDuration: 'Any Duration',
    noToursFound: 'No journeys match your filters',
    resetFilters: 'Reset Filters',

    // Destinations Page
    destHeaderEyebrow: 'Geographical & Cultural Circuits',
    destHeaderTitle: 'Ten Distinct Realities',
    destHeaderDesc: 'From volcanic salt plains to ancient walled sanctuaries and afro-alpine peaks.',

    // About Page
    aboutHeaderEyebrow: 'Our Philosophy',
    aboutHeaderTitle: 'Stewards of an Unbroken Heritage',
    aboutFoundersNote: "Founder's Note",

    // Journal Page
    journalHeaderEyebrow: 'Field Notes & Dispatches',
    journalHeaderTitle: 'Stories from the Ancient Path',

    // FAQs Page
    faqsHeaderEyebrow: 'Essential Practicalities',
    faqsHeaderTitle: 'Everything You Need to Know Before You Travel',

    // Contact & Book
    contactHeaderEyebrow: 'Begin the Conversation',
    contactHeaderTitle: 'Craft Your Ethiopian Odyssey',
    bookHeaderEyebrow: 'Private Journey Curation',
    bookHeaderTitle: 'Design Your Bespoke Expedition',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number (Optional)',
    preferredDates: 'Preferred Travel Window',
    travelerCount: 'Number of Travelers',
    travelStyle: 'Travel Style / Desired Focus',
    additionalNotes: 'Tell us about your passions, pace, or special requests...',
    submitInquiry: 'Submit Bespoke Inquiry',
    inquirySuccess: 'Thank you. Our travel concierge will reach out within 24 hours.',
  },

  am: {
    // Header & Nav
    brandName: 'ጥንታዊ ጎዳና',
    brandTagline: 'የኢትዮጵያ ባህላዊ ጉዞዎች',
    navCulturalTours: 'ባህላዊ ጉዞዎች',
    navDestinations: 'መዳረሻዎች',
    navLivingCulture: 'ሕያው ባህል',
    navJournal: 'የመስክ ማስታወሻ',
    navGuide: 'የጉዞ መመሪያ',
    navInquire: 'ያግኙን',
    navJourneys: 'ባህላዊ ጉዞዎች',
    navEthos: 'ሕያው ባህል',
    navStories: 'የመስክ ማስታወሻ',
    navPracticalities: 'የጉዞ መመሪያ',
    navContact: 'ያግኙን',
    curateJourney: 'ጉዞ ይንደፉ',
    saved: 'የተመረጡ',

    // Hero
    liveIndicator: 'አዲስ አበባ • የ3,000 ዓመታት ታሪክ መግቢያ',
    heroEyebrow: 'የኢትዮጵያ ባህላዊ ጉዞዎች',
    heroTitle1: 'ከተጠበቀው',
    heroTitle2: 'በላይ።',
    heroSubtitle:
      'በ3,000 ዓመታት ሕያው ታሪክ፣ አስደናቂ የተራራ ሰንሰለቶች እና በአፍሪካ ቀንድ መንፈሳዊ ድምቀት ውስጥ የሚደረጉ ጥንቃቄ የተሞላባቸው የቅንጦት ጉዞዎች።',
    exploreJourneysBtn: 'ልዩ ጉዞዎችን ያስሱ',
    discoverRegionsBtn: 'ክልሎችን ይመርምሩ',
    signatureRoutes: 'ዋና ዋና መስመሮች:',

    // Ethos
    ethosEyebrow: 'የማይቋረጥ የሥልጣኔ ሰንሰለት',
    ethosTitle1: 'የፈራረሰ ቅርስ ሳይሆን፤',
    ethosTitle2: 'ሕያው እና ዘላቂ ሥልጣኔ።',
    ethosBody:
      'ኢትዮጵያ በዓለም ላይ ወደር የላትም። በቅኝ ግዛት ያልተገዛች ብቸኛ አፍሪካዊት ሀገር በመሆኗ የራሷ ፊደል፣ የራሷ ዘመን አቆጣጠር እና የሺህ ዓመታት የክርስትና፣ የእስልምና እና የባህላዊ ቅርሶች ባለቤት ናት።',
    ethosQuote:
      '"በላሊበላ ፍልፍል አብያተ ክርስቲያናት ውስጥ ሲቆሙ ካህናት የሚያሰሙት የግዕዝ ዜማ አባቶቻቸው ከስምንት መቶ ዓመታት በፊት ያሰሙት ያው ዜማ ነው። በ12ኛው ክፍለ ዘመን የተለኮሰው ሻማ እስካሁን አልጠፋም።"',
    ethosAuthor: 'አበነዘር ሲሳይ',
    ethosRole: 'የጥንታዊ ጎዳና ኢትዮጵያ መሥራች',
    thoughtfulBadge: 'ኃላፊነት የተሞላበት ጉዞ',
    thoughtfulBadgeDesc:
      'እያንዳንዱ ጉዞ የአካባቢውን ባህላዊ ቅርሶች ለመንከባከብ እና የማህበረሰቡን ኑሮ ለማሻሻል በቀጥታ ይደግፋል።',

    // Curated Journeys
    curatedEyebrow: 'የተመረጡ ጉዞዎች',
    curatedTitle: 'ለጥልቅ ልምድ',
    curatedTitleHighlight: 'የተነደፉ',
    allJourneys: 'ሁሉም ጉዞዎች',
    historical: 'ታሪካዊ',
    wildlife: 'ዱር አራዊት',
    cultural: 'ባህላዊ',
    spiritual: 'መንፈሳዊ',
    viewAllJourneys: 'ሁሉንም 9 ጉዞዎች ይመልከቱ',
    exploreItinerary: 'የጉዞውን ዝርዝር ያስሱ',
    explore: 'ያስሱ',

    // Destinations
    destEyebrow: 'የመዳረሻዎች ግኝት',
    destTitle: 'የኢትዮጵያ ድንቅ',
    destTitleHighlight: 'መልክዓ ምድሮች',
    destSubtitle:
      'ከ4,500 ሜትር ከፍታ ካላቸው የስሜን ተራሮች አንስቶ እስከ 120 ሜትር ከባህር ወለል በታች እስካለው የዳሎል ጨው ምድር ድረስ አስደናቂ የተፈጥሮ ውበት።',
    allRegions: 'ሁሉም ክልሎች',
    theNorth: 'ሰሜኑ',
    theSouth: 'ደቡቡ',
    theEast: 'ምሥራቁ',
    central: 'መካከለኛው',
    exploreAllDestinations: 'ሁሉንም 10 መዳረሻዎች እና ካርታዎች ያስሱ',

    // Living Rituals (Buna & Mesob)
    bunaEyebrow: 'ባህላዊ ቅርርብ',
    bunaTitle: 'መሶብ፡ ጉዞ በአንድነት ወደሚቋረስ',
    bunaTitleHighlight: 'ማዕድ ሲቀየር።',
    bunaBody:
      'በኢትዮጵያ ባህል ምግብ ብቻውን አይበላም። ምግቡ የሚቀርበው ከሣር በተሠራው ውብ መሶብ ውስጥ ነው። የመሶቡ ክዳን ሲነሳ እንጀራ ከጣፋጭ ወጦች ጋር ተዘጋጅቶ እንግዶች በአንድነት እንዲቋደሱ ይጋብዛል።',
    gurshaTitle: 'የጉርሻ ክብር',
    gurshaDesc: 'ምግብን በእጅ አንስቶ ለሌላው ማጉረስ — የታላቅ ፍቅር፣ አክብሮትና የወዳጅነት መግለጫ ነው።',
    threeRoundsTitle: 'ሦስቱ የቡና ጽዋዎች',
    threeRoundsDesc: 'አቦል (የመጀመሪያው)፣ ቶና (ሁለተኛው)፣ እና በረካ (በረከት) — ውይይትን ወደ ጥልቅ ደረጃ የሚያደርሱ።',
    readBunaEssay: 'ጽሑፉን ያንብቡ: የቡና ሥነ-ሥርዓት',

    // Journal
    journalEyebrow: 'የመስክ ማስታወሻ',
    journalTitle: 'ከጉዞው መስመር',
    journalTitleHighlight: 'የተገኙ ታሪኮች',
    exploreAllEssays: 'ሁሉንም ጽሑፎች ያስሱ',
    readFullEssay: 'ሙሉውን ጽሑፍ ያንብቡ',

    // Guest Perspectives
    guestEyebrow: 'የተጓዦች አስተያየት',
    guestTitle: 'የተጓዦች',
    guestTitleHighlight: 'ምስክርነት',
    guestSubtitle: 'ከጥንታዊ ጎዳና ጋር የቅንጦት እና ጥልቅ የግል ጉዞ ያደረጉ እንግዶች አስተያየት።',

    // Bespoke CTA
    ctaEyebrow: 'ብጁ የጉዞ ዝግጅት',
    ctaTitle: 'ሁለት ጉዞዎች በፍጹም ተመሳሳይ ሊሆኑ አይገባም።',
    ctaTitleHighlight: 'የእርስዎን ጉዞ እኛ እንንደፈው።',
    ctaSubtitle:
      'በዳናኪል እሳተ ጎመራ ላይ በሄሊኮፕተር መብረር፣ በላሊበላ የንጋት ጸሎት ማዳመጥ፣ ወይም በባሌ ተራሮች የእግር ጉዞ ማድረግ ቢፈልጉ፣ የጉዞ ባለሙያዎቻችን ለፍላጎትዎ ተስማሚ የሆነ ጉዞ ያዘጋጁልዎታል።',
    startPlanBtn: 'ብጁ ጉዞዎን ይጀምሩ',
    speakConciergeBtn: 'ከጉዞ አማካሪያችን ጋር ይነጋገሩ',

    // Common
    altitude: 'ከፍታ',
    bestSeason: 'ምርጥ የጉዞ ወቅት',
    pricingGuidance: 'ብጁ የቅንጦት ዋጋ',
    privateTailorMade: '100% የግል ጉዞ',
    bookThisJourney: 'ይህንን ጉዞ ያስይዙ',

    // Wishlist Drawer
    wishlistTitle: 'የተመረጡ ጉዞዎች',
    shortlistEmpty: 'ምንም የተመረጠ ጉዞ የለም',
    shortlistEmptyDesc: 'የተመረጡ ጉዞዎችን ይጎብኙና የሚወዷቸውን ጉዞዎች ለማስቀመጥ የልብ ምልክቱን ይጫኑ።',
    browseAllJourneys: 'ሁሉንም ጉዞዎች ያስሱ',
    planWithSaved: 'በተመረጡት ጉዞ ይጀምሩ',
    bespokeSummary: 'የጉዞ ባለሙያዎቻችን የመረጧቸውን መዳረሻዎች በማቀናጀት ልዩ የጉዞ ፕሮግራም ያዘጋጁልዎታል።',

    // Tours Page
    toursHeaderEyebrow: 'የተመረጡ ልዩ ጉዞዎች',
    toursHeaderTitle: 'አስደናቂ እና ልዩ የጉዞ ፕሮግራሞች',
    toursHeaderDesc: 'እያንዳንዱ ጉዞ በግል መሪ የሚመራ፣ ምቹ እና እንደ ፍላጎትዎ የሚዘጋጅ ነው።',
    searchPlaceholder: 'በመዳረሻ፣ በቦታ ወይም በስም ይፈልጉ...',
    allStyles: 'ሁሉም ዓይነቶች',
    anyDuration: 'ማንኛውም ቆይታ',
    noToursFound: 'በዚህ ምርጫ የተገኘ ጉዞ የለም',
    resetFilters: 'ምርጫዎችን አጽዳ',

    // Destinations Page
    destHeaderEyebrow: 'የመልክዓ ምድር እና የባህል መስመሮች',
    destHeaderTitle: 'አስሩ አስደናቂ ዓለማት',
    destHeaderDesc: 'ከዳሎል ጨዋማ እሳተ ጎመራ እስከ ጥንታዊ ቅጥር ከተሞች እና አስደናቂ ተራሮች።',

    // About Page
    aboutHeaderEyebrow: 'ፍልስፍናችን',
    aboutHeaderTitle: 'የማይቋረጥ የታሪክና የቅርስ ጠባቂዎች',
    aboutFoundersNote: 'የመሥራቹ መልእክት',

    // Journal Page
    journalHeaderEyebrow: 'የመስክ ማስታወሻዎች',
    journalHeaderTitle: 'ከጥንታዊው ጎዳና የተገኙ ታሪኮች',

    // FAQs Page
    faqsHeaderEyebrow: 'አስፈላጊ መረጃዎች',
    faqsHeaderTitle: 'ከጉዞዎ በፊት ማወቅ የሚገቡዎት ነገሮች',

    // Contact & Book
    contactHeaderEyebrow: 'ውይይቱን ይጀምሩ',
    contactHeaderTitle: 'የግል የጉዞ ፕሮግራምዎን ያዘጋጁ',
    bookHeaderEyebrow: 'የግል የቅንጦት ጉዞ ማዘጋጃ',
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
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('ancient_path_lang') || 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('ancient_path_lang', language)
      document.documentElement.lang = language
    } catch (e) {
      console.warn(e)
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'am' : 'en'))
  }

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
