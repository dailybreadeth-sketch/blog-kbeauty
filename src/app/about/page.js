export const metadata = {
  title: 'Our Philosophy - Head Skinification Journal',
  description: 'Learn about the philosophy behind Head Skinification and our commitment to clean, scientific scalp and hair care guidance.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      {/* 타이틀 헤더 */}
      <header className="space-y-4 text-center py-8 border-b border-[#eae6df]">
        <span className="inline-flex items-center rounded-full bg-[#f4ece1] px-4 py-1 text-xs uppercase tracking-widest font-semibold text-[#8c7e6c] border border-[#e1d5c3]">
          About The Journal
        </span>
        <h1 className="text-3xl md:text-5xl font-normal font-lora text-[#2c2a29] tracking-tight leading-tight">
          Our Philosophy
        </h1>
      </header>

      {/* 본문 에디토리얼 콘텐츠 */}
      <article className="editorial-card rounded-none p-8 md:p-14 bg-white prose max-w-none">
        <p className="lead font-lora text-lg italic text-[#5c544e] border-l-2 border-[#8c7e6c] pl-4 py-1 my-6">
          "The skin doesn’t end at your hairline. Your scalp is simply an extension of your face—and it deserves the exact same level of scientific care, nourishment, and attention."
        </p>

        <p>
          Welcome to the <strong>Head Skinification Journal</strong>. We are an independent, research-backed digital publication dedicated to exploring the science, routines, and global market trends of scalp and hair care. 
        </p>

        <h2>Why Scalp Care is Skin Care</h2>
        <p>
          For decades, the beauty industry treated hair care as a purely cosmetic task—masking damage with silicones and heavy oils. However, modern dermatological science has proven that healthy hair can only grow from a healthy, balanced scalp environment. 
        </p>
        <p>
          Under the philosophy of <strong>Head Skinification</strong>, we advocate for treating the scalp with the same high-performance active ingredients traditionally reserved for facial skin care. From chemical exfoliants like Salicylic Acid (BHA) to soothing botanical extracts and barrier-strengthening ceramides, we break down the complex biochemistry into practical, everyday routines.
        </p>

        <h2>Our Commitment to Sincerity</h2>
        <p>
          We do not sell products, nor do we promote specific brand agendas. Our goal is entirely information-driven: to track global K-Beauty innovations and present objective, consumer-friendly insights. 
        </p>
        <ul>
          <li><strong>Scientific Transparency</strong>: We analyze popular ingredients based on evidence and structural efficacy.</li>
          <li><strong>Consumer Empathy</strong>: We focus on solving daily struggles, such as scalp congestion, dry irritation, and environmental damage.</li>
          <li><strong>No Regulatory Claims</strong>: We prioritize cosmetic wellness and conditioning, avoiding medical claims to provide safe, actionable guidance.</li>
        </ul>

        <p className="pt-6">
          Thank you for joining our community of skin-conscious individuals. Let us embark on a journey toward holistic hair and scalp health together.
        </p>
      </article>

      {/* 목록으로 돌아가기 */}
      <div className="text-center pt-4">
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
