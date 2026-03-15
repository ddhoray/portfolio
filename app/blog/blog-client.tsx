'use client';

import { useEffect, useState } from 'react';
import Navigation from '../components/navigation';
import SocialIcons from '../components/social-icons';
import Footer from '../components/footer';
import SectionWrapper from '../components/section-wrapper';
import { Rss, ExternalLink, Calendar, Tag, Loader2 } from 'lucide-react';

interface BlogPostItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
}

export default function BlogClient() {
  const [posts, setPosts] = useState<BlogPostItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/blog');
        const data = await res?.json?.();
        if (data?.success) {
          setPosts(data?.posts ?? []);
        }
      } catch (err) {
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const getSourceColor = (source: string) => {
    if ((source ?? '').toLowerCase().includes('linkedin')) return 'bg-blue-500/20 text-blue-300';
    if ((source ?? '').toLowerCase().includes('cybersafett')) return 'bg-red-500/20 text-red-300';
    return 'bg-gray-500/20 text-gray-300';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900/30 to-gray-950">
      <Navigation />
      <SocialIcons />

      <div className="pt-24 pb-16 max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionWrapper>
          <div className="flex items-center gap-2 mb-2">
            <Rss className="w-6 h-6 text-red-500" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Blog & Activity</h1>
          </div>
          <p className="text-gray-400 mb-12">Latest posts and updates from LinkedIn and CyberSafeTT.</p>
        </SectionWrapper>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
          </div>
        ) : (posts?.length ?? 0) === 0 ? (
          <SectionWrapper>
            <div className="bg-white/5 rounded-lg p-12 text-center">
              <Rss className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl text-gray-400 mb-2">No Posts Yet</h3>
              <p className="text-gray-500">Check back soon for the latest updates.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href="https://www.linkedin.com/in/ddhoray/recent-activity/all/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm font-medium transition-colors inline-flex items-center gap-2">
                  LinkedIn Activity <ExternalLink className="w-4 h-4" />
                </a>
                <a href="https://cybersafett.com/category/latest-news/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white text-sm font-medium transition-colors inline-flex items-center gap-2">
                  CyberSafeTT News <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </SectionWrapper>
        ) : (
          <div className="space-y-4">
            {posts?.map?.((post, i) => (
              <SectionWrapper key={post?.id ?? i} delay={i * 0.05}>
                <a
                  href={post?.sourceUrl ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/5 rounded-lg p-6 shadow-lg hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getSourceColor(post?.source ?? '')}`}>
                          <Tag className="w-3 h-3 inline mr-1" />
                          {post?.source ?? 'Unknown'}
                        </span>
                        <span className="text-gray-500 text-xs flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : ''}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">{post?.title ?? ''}</h3>
                      {post?.summary && <p className="text-gray-400 text-sm mt-2">{post.summary}</p>}
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-red-400 shrink-0 mt-1 transition-colors" />
                  </div>
                </a>
              </SectionWrapper>
            )) ?? []}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
