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
    <div className="max-w-3xl mx-auto space-y-8">
      {/* 아티클 헤더 */}
      <header className="space-y-4 text-center py-6">
        <div className="flex items-center justify-center gap-4 text-xs font-semibold text-purple-400 tracking-wider">
          <span className="uppercase border border-purple-500/20 px-2.5 py-0.5 rounded-full bg-purple-500/5">
            {post.유형 || 'Trend'}
          </span>
          <span>•</span>
          <span>Last Updated: {post.업데이트 || 'Recent'}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold font-outfit text-white tracking-tight leading-tight">
          {post.title || slug.replace(/_/g, ' ')}
        </h1>
        {post.description && (
          <p className="text-gray-400 text-base md:text-lg italic font-light max-w-2xl mx-auto">
            {post.description}
          </p>
        )}
      </header>

      {/* 포스트 상단 광고 */}
      <AdSlot slotId="post-top-ad" />

      {/* 아티클 본문 */}
      <article className="glass-panel rounded-3xl p-8 md:p-12">
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>

      {/* 포스트 하단 광고 */}
      <AdSlot slotId="post-bottom-ad" />

      {/* 목록으로 돌아가기 */}
      <div className="text-center pt-6">
        <a 
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition"
        >
          ← Back to Articles
        </a>
      </div>
    </div>
  );
}
