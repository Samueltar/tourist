import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, User, Share2, ArrowRight } from 'lucide-react'
import { journalPosts } from '../data/tours'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { TiletBorderPrimary, TiletDivider } from '../components/TiletPatterns'

export default function JournalDetail() {
  const { slug } = useParams()
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()

  const post = journalPosts.find((p) => p.id === slug)

  if (!post) {
    return <Navigate to="/journal" replace />
  }

  const relatedPosts = journalPosts.filter((p) => p.id !== post.id)

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0E0D0B] text-[#1A1713] dark:text-[#F5F2EB] pt-24 pb-20 selection:bg-[#B58A43] selection:text-white transition-colors duration-300">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <button
          onClick={() => navigateWithMesob('/journal')}
          className="flex items-center gap-1.5 text-xs text-[#302B24]/70 dark:text-[#E8E2D5]/70 hover:text-[#B58A43] transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{language === 'am' ? 'ወደ የመስክ ማስታወሻዎች ተመለስ' : 'Back to Field Journal'}</span>
        </button>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 mt-4">
        <div className="space-y-4 text-center">
          <span className="px-3.5 py-1 rounded-full bg-white dark:bg-[#1E1B16] border border-[#B58A43]/40 text-[#B58A43] text-[10px] font-bold uppercase tracking-wider inline-block shadow-sm">
            {post.category}
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1713] dark:text-[#F5F2EB] leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-3 text-xs text-[#302B24]/60 dark:text-[#E8E2D5]/60 pt-2">
            <span>{language === 'am' ? 'ጸሐፊ' : 'By'} <strong className="text-[#1A1713] dark:text-[#F5F2EB]">{post.author || 'Ancient Path'}</strong></span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <TiletDivider className="w-48 mx-auto text-[#B58A43] pt-2 opacity-60" />
        </div>

        {/* Hero Image */}
        <div className="mt-10 rounded-3xl overflow-hidden shadow-2xl border border-[#B58A43]/30 h-80 sm:h-[460px] relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Prose Body */}
        <div className="mt-12 bg-white dark:bg-[#161411] rounded-3xl p-8 sm:p-14 border border-[#B58A43]/20 dark:border-[#B58A43]/30 shadow-sm space-y-6 font-sans text-sm sm:text-base text-[#302B24]/85 dark:text-[#E8E2D5]/85 leading-relaxed relative overflow-hidden">
          <p className="font-serif italic text-xl sm:text-2xl text-[#1A1713] dark:text-[#F5F2EB] border-l-2 border-[#B58A43] pl-5 my-6 leading-snug">
            "{post.excerpt}"
          </p>

          <div className="space-y-5 whitespace-pre-line text-sm sm:text-base leading-relaxed font-light">
            {post.content}
          </div>

          {/* Author Box */}
          <div className="pt-8 border-t border-[#B58A43]/15 mt-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#FAF8F5] dark:bg-[#1E1B16] border border-[#B58A43]/40 text-[#B58A43] flex items-center justify-center font-serif text-xl font-bold shrink-0 shadow-sm">
              {post.author ? post.author.charAt(0) : 'A'}
            </div>
            <div>
              <span className="block font-serif text-lg font-semibold text-[#1A1713] dark:text-[#F5F2EB]">
                {post.author || 'Ancient Path Editorial'}
              </span>
              <span className="block text-xs text-[#302B24]/60 dark:text-[#E8E2D5]/60 font-light">
                {post.authorRole || (language === 'am' ? 'የመስክ ጸሐፊ፣ ኢትዮጵያ' : 'Field Contributor, Ethiopia')}
              </span>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#B58A43]/20">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1713] dark:text-[#F5F2EB] font-normal mb-8">
              {language === 'am' ? 'ተጨማሪ ጽሑፎች' : 'More Dispatches'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.id}
                  onClick={() => navigateWithMesob(`/journal/${rPost.id}`)}
                  className="bg-white dark:bg-[#161411] rounded-2xl overflow-hidden border border-[#B58A43]/20 dark:border-[#B58A43]/30 p-5 cursor-pointer hover:border-[#B58A43] transition-all group flex items-center gap-4 shadow-sm"
                >
                  <img src={rPost.image} alt={rPost.title} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase text-[#B58A43] font-bold">{rPost.category}</span>
                    <h4 className="font-serif text-base text-[#1A1713] dark:text-[#F5F2EB] font-semibold truncate group-hover:text-[#B58A43] transition-colors">
                      {rPost.title}
                    </h4>
                    <span className="text-[11px] text-[#302B24]/60 dark:text-[#E8E2D5]/60">{rPost.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}