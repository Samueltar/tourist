import React from 'react'
import { ArrowRight, Clock, Calendar, User, Sparkles } from 'lucide-react'
import { journalPosts } from '../data/tours'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { TiletBorderPrimary, TiletDivider, TiletCorner } from '../components/TiletPatterns'

export default function Journal() {
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()

  const featuredPost = journalPosts[0]
  const otherPosts = journalPosts.slice(1)

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1713] pt-24 sm:pt-28 pb-20 selection:bg-[#B58A43] selection:text-white">
      {/* Editorial Header with Ethiopian Tilet Accents */}
      <div className="relative bg-gradient-to-b from-[#F3EEE5] to-[#FAF8F5] border-b border-[#B58A43]/20 py-16 sm:py-20 overflow-hidden">
        <TiletBorderPrimary className="absolute top-0 left-0 right-0 w-full text-[#B58A43] opacity-60" height={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#B58A43]/30 text-[#B58A43] text-[11px] font-sans font-bold uppercase tracking-[0.25em] shadow-sm">
            <span>{t('journalHeaderEyebrow')}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1713] tracking-tight">
            {language === 'am' ? 'የጥንታዊ ጎዳና' : 'The Ancient'}{' '}
            <span className="italic font-light text-[#B58A43]">
              {language === 'am' ? 'የመስክ ማስታወሻዎች' : 'Journal'}
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#302B24]/80 max-w-2xl mx-auto font-light leading-relaxed">
            {language === 'am'
              ? 'ስለ ኢትዮጵያ ታሪክ፣ መንፈሳዊ በዓላት፣ ብርቅዬ የዱር አራዊትና ስለ አፍሪካ ቀንድ ሕያው ጥበቦች የቀረቡ ጥልቅ ጽሑፎች።'
              : 'Writings on Ethiopian history, spiritual ceremonies, rare wildlife encounters, and the living arts of the Horn of Africa.'}
          </p>

          <TiletDivider className="w-56 mx-auto text-[#B58A43] pt-2 opacity-75" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Featured Big Story Card */}
        {featuredPost && (
          <div
            onClick={() => navigateWithMesob(`/journal/${featuredPost.id}`)}
            className="group bg-white rounded-3xl overflow-hidden border border-[#B58A43]/30 shadow-xl cursor-pointer grid grid-cols-1 lg:grid-cols-12 transform hover:-translate-y-1 transition-all duration-500 relative"
          >
            <TiletCorner position="top-right" className="text-[#B58A43]/30 pointer-events-none z-10" size={32} />

            <div className="lg:col-span-7 h-72 sm:h-96 lg:h-auto relative overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1A1713] text-[10px] font-bold uppercase tracking-wider border border-[#B58A43]/40 shadow-sm">
                  {language === 'am' ? 'ልዩ ጽሑፍ' : 'Featured Essay'} • {featuredPost.category}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#302B24]/60 mb-3">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A1713] font-normal leading-tight group-hover:text-[#B58A43] transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="font-sans text-xs sm:text-sm text-[#302B24]/80 mt-4 leading-relaxed line-clamp-4 font-light">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#B58A43]/15 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase text-[#302B24]/60 font-semibold">{language === 'am' ? 'ጸሐፊ' : 'Written By'}</span>
                  <span className="text-xs font-semibold text-[#1A1713]">{featuredPost.author || 'Ancient Path Editorial'}</span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B58A43] group-hover:translate-x-1 transition-transform">
                  <span>{t('readFullEssay')}</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Stories Grid */}
        <div className="mt-14">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1713] font-normal mb-8">
            {language === 'am' ? 'የቅርብ ጊዜ ጽሑፎች' : 'Recent Field Essays'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigateWithMesob(`/journal/${post.id}`)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#B58A43]/20 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col transform hover:-translate-y-1 relative"
              >
                <TiletCorner position="top-right" className="text-[#B58A43]/25 pointer-events-none z-10" size={24} />

                <div className="h-64 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1A1713] text-[10px] font-bold uppercase tracking-wider border border-[#B58A43]/40 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#302B24]/60 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="font-serif text-2xl text-[#1A1713] font-normal group-hover:text-[#B58A43] transition-colors leading-snug">
                      {post.title}
                    </h4>

                    <p className="font-sans text-xs text-[#302B24]/75 mt-3 leading-relaxed line-clamp-3 font-light">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#B58A43]/15 flex items-center justify-between text-xs text-[#B58A43] font-bold uppercase tracking-wider">
                    <span>{t('readFullEssay')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
