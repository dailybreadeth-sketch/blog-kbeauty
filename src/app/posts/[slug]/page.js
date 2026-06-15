import { getPostData, getSortedPostsData } from '../../../lib/posts';
import AdSlot from '../../../components/AdSlot';
import { marked } from 'marked';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getPostData(slug);

  if (!post) {
    return notFound();
  }

  // marked 파싱 옵션 설정
  const htmlContent = marked.parse(post.content);

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      {/* 아티클 헤더 */}
      <header className="space-y-6 text-center py-8 border-b border-[#eae6df]">
        <div className="flex items-center justify-center gap-4 text-xs font-semibold text-[#8c7e6c] tracking-widest uppercase">
          <span className="border border-[#e1d5c3] px-3 py-0.5 rounded bg-[#f4ece1]">
            {post.유형 || 'Trend'}
          </span>
          <span>•</span>
          <span>Last Updated: {post.업데이트 || 'Recent'}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-normal font-lora text-[#2c2a29] tracking-tight leading-tight">
          {post.title || slug.replace(/_/g, ' ')}
        </h1>
        {post.description && (
          <p className="text-[#5c544e] text-base md:text-lg italic font-light max-w-2xl mx-auto leading-relaxed">
            {post.description}
          </p>
        )}
      </header>

      {/* 포스트 상단 광고 */}
      <AdSlot slotId="post-top-ad" />

      {/* 아티클 본문 */}
      <article className="editorial-card rounded-none p-8 md:p-14 bg-white">
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>

      {/* 포스트 하단 광고 */}
      <AdSlot slotId="post-bottom-ad" />

      {/* 목록으로 돌아가기 */}
      <div className="text-center pt-8">
        <a 
          href="/blog-kbeauty/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8c7e6c] hover:text-[#2c2a29] transition"
        >
          ← Back to Curated Journals
        </a>
      </div>
    </div>
  );
}
