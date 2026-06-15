import { getSortedPostsData } from '../lib/posts';
import AdSlot from '../components/AdSlot';

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="space-y-16">
      {/* 매거진 히어로 섹션 */}
      <section className="text-center py-16 max-w-4xl mx-auto space-y-8 border-b border-[#eae6df]">
        <span className="inline-flex items-center rounded-full bg-[#f4ece1] px-4 py-1 text-xs uppercase tracking-widest font-semibold text-[#8c7e6c] border border-[#e1d5c3]">
          In-Depth Editorial
        </span>
        <h1 className="text-4xl md:text-6xl font-normal font-lora tracking-tight text-[#2c2a29] leading-tight">
          Sincere Care for Your <br />
          <span className="italic text-[#8c7e6c]">Scalp & Hair Vitality</span>
        </h1>
        <p className="text-[#5c544e] text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Welcome to Head Skinification. Discover scientifically-backed K-Beauty scalp scaling routines, clinical ingredient trends, and advanced regimens curated for the global skin-conscious consumer.
        </p>
      </section>

      {/* 상단 광고 */}
      <AdSlot slotId="home-top-ad" />

      {/* 포스트 리스트 */}
      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-[#eae6df] pb-4">
          <h2 className="text-xl font-bold font-lora tracking-wide text-[#2c2a29] uppercase">Curated Journals</h2>
          <span className="text-xs text-[#8c7e6c] tracking-wider">{posts.length} entries published</span>
        </div>

        {posts.length === 0 ? (
          <div className="border border-[#eae6df] bg-white p-16 text-center rounded">
            <p className="text-[#5c544e] text-base mb-2">The editorial feed is currently empty.</p>
            <p className="text-xs text-[#8c7e6c]">
              Activate orchestrator to publish the first volume of K-Beauty journals.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="editorial-card flex flex-col justify-between p-8 bg-white transition duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-bold tracking-widest text-[#8c7e6c]">
                    <span className="uppercase">{post.유형 || 'Trend'}</span>
                    <span>{post.업데이트 || 'Recent'}</span>
                  </div>
                  <h3 className="text-lg font-medium text-[#2c2a29] font-lora leading-snug hover:text-[#8c7e6c] transition duration-200">
                    <a href={`/blog-kbeauty/posts/${post.slug}`}>{post.title || post.slug.replace(/_/g, ' ')}</a>
                  </h3>
                  <p className="text-xs text-[#5c544e] line-clamp-3 leading-relaxed font-light">
                    {post.description || 'Discover the details of this K-Beauty research post.'}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#f4ece1] flex items-center justify-between">
                  <span className="text-[10px] text-[#b1a799] tracking-wider font-semibold">READ TIME: 3 MINS</span>
                  <a
                    href={`/blog-kbeauty/posts/${post.slug}`}
                    className="text-xs font-semibold text-[#8c7e6c] hover:text-[#2c2a29] transition flex items-center gap-1"
                  >
                    Read Journal →
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
