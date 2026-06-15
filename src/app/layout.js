import './globals.css';

export const metadata = {
  title: 'Head Skinification - Premier K-Beauty Scalp & Hair Care Guide',
  description: 'Discover the latest Korean scalp care routines, scientific ingredient analysis, and trending K-Beauty methods to strengthen your hair and scalp naturally.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts 연동 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* 구글 애드센스 스크립트 주입 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="antialiased selection:bg-purple-500/30">
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight font-outfit text-white">
                RLRL <span className="text-purple-400 font-medium text-base">Head Skinification</span>
              </span>
            </div>
            <nav className="flex items-center gap-6">
              <a href="/" className="text-sm font-medium text-gray-300 hover:text-white transition">Home</a>
              <a href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition">About</a>
              <span className="rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-400">
                AI Automated Blog
              </span>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-6 py-12">
          {children}
        </main>

        <footer className="border-t border-white/5 bg-black/40 py-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} RLRL (레알레알). All rights reserved.</p>
          <p className="mt-2 text-gray-600">
            Powered by Google Antigravity 2.0 Autonomous Agent System.
          </p>
        </footer>
      </body>
    </html>
  );
}
