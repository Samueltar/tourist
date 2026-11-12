import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, User, Share2, ArrowRight } from 'lucide-react'
import { journalPosts } from '../data/tours'
import { useMesob } from '../components/MesobTransition'

export default function JournalDetail() {
  const { slug } = useParams()
  const { navigateWithMesob } = useMesob()

  const post = journalPosts.find((p) => p.id === slug)

  if (!post) {
    return <Navigate to="/journal" replace />
  }

  const relatedPosts = journalPosts.filter((p) => p.id !== post.id)

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#202622] pt-24 pb-20 selection:bg-[#B86B48] selection:text-white">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <button
          onClick={() => navigateWithMesob('/journal')}
          className="flex items-center gap-1.5 text-xs text-[#202622]/60 hover:text-[#173D32] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Field Journal</span>
        </button>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 mt-4">
        <div className="space-y-4 text-center">
          <span className="px-3.5 py-1 rounded-full bg-[#173D32] text-[#C3A16A] text-[10px] font-bold uppercase tracking-wider inline-block">
            {post.category}
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#173D32] leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-3 text-xs text-[#202622]/60 pt-2">
            <span>By <strong className="text-[#173D32]">{post.author || 'Ancient Path'}</strong></span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 rounded-3xl overflow-hidden shadow-2xl border border-[#C3A16A]/30 h-80 sm:h-[460px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Prose Body */}
        <div className="mt-12 bg-white rounded-3xl p-8 sm:p-14 border border-[#C3A16A]/20 shadow-sm space-y-6 font-sans text-sm sm:text-base text-[#202622]/85 leading-relaxed">
          <p className="font-serif italic text-xl sm:text-2xl text-[#173D32] border-l-2 border-[#C3A16A] pl-5 my-6">
            "{post.excerpt}"
          </p>

          <div className="space-y-5 whitespace-pre-line text-sm sm:text-base leading-relaxed">
            {post.content}
          </div>

          {/* Author Box */}
          <div className="pt-8 border-t border-[#C3A16A]/20 mt-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#173D32] text-[#C3A16A] flex items-center justify-center font-serif text-xl font-bold shrink-0">
              {post.author ? post.author.charAt(0) : 'A'}
            </div>
            <div>
              <span className="block font-serif text-lg font-semibold text-[#173D32]">
                {post.author || 'Ancient Path Editorial'}
              </span>
              <span className="block text-xs text-[#202622]/60">
                {post.authorRole || 'Field Contributor, Ethiopia'}
              </span>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#C3A16A]/20">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#173D32] font-medium mb-8">
              More Dispatches
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.id}
                  onClick={() => navigateWithMesob(`/journal/${rPost.id}`)}
                  className="bg-white rounded-2xl overflow-hidden border border-[#C3A16A]/20 p-5 cursor-pointer hover:border-[#C3A16A] transition-all group flex items-center gap-4"
                >
                  <img src={rPost.image} alt={rPost.title} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase text-[#B86B48] font-bold">{rPost.category}</span>
                    <h4 className="font-serif text-base text-[#173D32] font-semibold truncate group-hover:text-[#B86B48] transition-colors">
                      {rPost.title}
                    </h4>
                    <span className="text-[11px] text-[#202622]/60">{rPost.readTime}</span>
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
