export default function NotFound() {
  return (
    <div className="max-w-md mx-auto text-center py-20 space-y-6">
      <span className="inline-flex items-center rounded-full bg-[#f4ece1] px-4 py-1 text-xs uppercase tracking-widest font-semibold text-[#8c7e6c] border border-[#e1d5c3]">
        Error 404
      </span>
      <h1 className="text-4xl font-normal font-lora text-[#2c2a29]">
        Journal Not Found
      </h1>
      <p className="text-sm text-[#5c544e] font-light leading-relaxed">
        The page you are looking for does not exist or has been relocated to another issue. Please return to our main index.
      </p>
      <div className="pt-6">
        <a 
          href="/blog-kbeauty/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8c7e6c] hover:text-[#2c2a29] transition border-b border-[#8c7e6c] pb-1"
        >
          Return to Curated Journals
        </a>
      </div>
    </div>
  );
}
