'use client';

import { useEffect } from 'react';

export default function AdSlot({ slotId, format = 'auto' }) {
  useEffect(() => {
    try {
      // 실제 구글 애드센스 광고 로드 함수 호출
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // 로컬 테스트 중 에러 예외 처리
    }
  }, []);

  return (
    <div className="my-8 mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md">
      <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Sponsored Content</span>
      
      {/* 개발 환경 및 실 서비스 연동용 애드센스 슬롯 */}
      <ins
        className="adsbygoogle block"
        style={{ display: 'block', minHeight: '100px' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // 실제 애드센스 퍼블리셔 ID로 변경 필요
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
      
      {/* 애드센스 비활성화 상태거나 로컬 테스트용 플레이스홀더 */}
      <div className="flex items-center justify-center h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
        <p className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Google AdSense Slot ({slotId})
        </p>
      </div>
    </div>
  );
}
