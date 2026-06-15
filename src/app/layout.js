import './globals.css';

export const metadata = {
  title: 'Head Skinification - Premium K-Beauty Scalp & Hair Care Guide',
  description: 'Discover the latest Korean scalp care routines, scientific ingredient analysis, and trending K-Beauty methods to strengthen your hair and scalp naturally.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Lora(Serif) & Plus Jakarta Sans(Sans-serif) 연동 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* 구글 애드센스 스크립트 주입 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="antialiased selection:bg-[#c3b59f]/30">
        <header className="sticky top-0 z-50 w-full border-b border-[#eae6df] bg-[#faf9f6]/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight font-lora text-[#2c2a29]">
                RLRL <span className="text-[#8c7e6c] font-light text-base ml-1">Head Skinification</span>
              </span>
            </div>
            <nav className="flex items-center gap-6">
              <a href="/blog-kbeauty/" className="text-sm font-medium text-[#5c544e] hover:text-[#2c2a29] transition">Home</a>
              <a href="/blog-kbeauty/about" className="text-sm font-medium text-[#5c544e] hover:text-[#2c2a29] transition">About</a>
              <span className="rounded-full bg-[#f4ece1] border border-[#e1d5c3] px-3 py-1 text-xs font-semibold text-[#8c7e6c]">
                Editorial Blog
              </span>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-16">
          {children}
        </main>

        <footer className="border-t border-[#eae6df] bg-[#faf9f6] py-12 text-center text-xs text-[#8c7e6c] space-y-2">
          <p>© {new Date().getFullYear()} RLRL (레알레알). All rights reserved.</p>
          <p className="text-[#b1a799]">
            Powered by Google Antigravity 2.0 Autonomous Agent System.
          </p>
        </footer>
      </body>
    </html>
  );
}
