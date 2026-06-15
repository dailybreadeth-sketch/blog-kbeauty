import { getSortedPostsData } from '../lib/posts';
import AdSlot from '../components/AdSlot';

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="space-y-12">
      {/* 히어로 섹션 */}
      <section className="text-center py-12 max-w-3xl mx-auto space-y-6">
        <span className="inline-flex items-center rounded-full bg-purple-500/10 px-4 py-1 text-sm font-medium text-purple-400 border border-purple-500/20">
          ✨ Tracking the Pulse of Korean Head Skinification
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold font-outfit tracking-tight leading-tight">
          Unlock Secrets to <br />
          <span className="text-gradient">Scalp & Hair Vitality</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl font-light">
          Get scientifically-backed K-Beauty hair routines, scalp care regimens, and ingredient trends analyzed in real-time.
        </p>
      </section>

      {/* 상단 광고 */}
      <AdSlot slotId="home-top-ad" />

      {/* 포스트 목록 섹션 */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <h2 className="text-2xl font-bold font-outfit text-white">Latest Articles</h2>
          <span className="text-sm text-gray-500">{posts.length} articles found</span>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-white/5 bg-white/2.5 p-12 text-center">
            <p className="text-gray-400 text-base mb-2">No articles published yet.</p>
            <p className="text-xs text-gray-600">
              Run `python3 .agent/orchestrator.py --run-now` to generate your first blog post!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="glass-panel flex flex-col justify-between rounded-2xl p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-purple-400">
                    <span className="font-semibold uppercase tracking-wider">{post.유형 || 'Trend'}</span>
                    <span>{post.업데이트 || 'Recent'}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug hover:text-purple-300 transition duration-200">
                    <a href={`/posts/${post.slug}`}>{post.title || post.slug.replace(/_/g, ' ')}</a>
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-3">
                    {post.description || 'Discover the details of this K-Beauty research post.'}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">Read Time: 3 mins</span>
                  <a
                    href={`/posts/${post.slug}`}
                    className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
                  >
                    Read Post →
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 하단 광고 */}
      <AdSlot slotId="home-bottom-ad" />
    </div>
  );
}
