import React from 'react'
import { ArrowRight, Clock, Calendar, User, Sparkles } from 'lucide-react'
import { journalPosts } from '../data/tours'
import { useMesob } from '../components/MesobTransition'

export default function Journal() {
  const { navigateWithMesob } = useMesob()

  const featuredPost = journalPosts[0]
  const otherPosts = journalPosts.slice(1)

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#202622] pt-24 sm:pt-28 pb-20 selection:bg-[#B86B48] selection:text-white">
      {/* Editorial Header */}
      <div className="bg-[#173D32] text-[#F5F0E6] py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#C3A16A] font-semibold">
            Field Dispatches & Essays
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
            The Ancient <span className="italic font-normal text-[#C3A16A]">Journal</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#E9E0D1]/85 max-w-2xl mx-auto font-light leading-relaxed">
            Writings on Ethiopian history, spiritual ceremonies, rare wildlife encounters, and the living arts of the Horn of Africa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Featured Big Story Card */}
        {featuredPost && (
          <div
            onClick={() => navigateWithMesob(`/journal/${featuredPost.id}`)}
            className="group bg-white rounded-3xl overflow-hidden border border-[#C3A16A]/30 shadow-xl cursor-pointer grid grid-cols-1 lg:grid-cols-12 transform hover:-translate-y-1 transition-all duration-500"
          >
            <div className="lg:col-span-7 h-72 sm:h-96 lg:h-auto relative overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1 rounded-full bg-[#173D32] text-[#C3A16A] text-[10px] font-bold uppercase tracking-wider">
                  Featured Essay • {featuredPost.category}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#202622]/60 mb-3">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#173D32] font-medium leading-tight group-hover:text-[#B86B48] transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="font-sans text-xs sm:text-sm text-[#202622]/80 mt-4 leading-relaxed line-clamp-4">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#C3A16A]/20 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase text-[#202622]/60">Written By</span>
                  <span className="text-xs font-semibold text-[#173D32]">{featuredPost.author || 'Ancient Path Editorial'}</span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B86B48] group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Stories Grid */}
        <div className="mt-14">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#173D32] font-medium mb-8">
            Recent Field Essays
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigateWithMesob(`/journal/${post.id}`)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#C3A16A]/20 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col transform hover:-translate-y-1"
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#173D32] text-[#F5F0E6] text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#202622]/60 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="font-serif text-2xl text-[#173D32] font-medium group-hover:text-[#B86B48] transition-colors leading-snug">
                      {post.title}
                    </h4>

                    <p className="font-sans text-xs text-[#202622]/75 mt-3 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#C3A16A]/20 flex items-center justify-between text-xs text-[#B86B48] font-semibold">
                    <span>Read Full Essay</span>
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
