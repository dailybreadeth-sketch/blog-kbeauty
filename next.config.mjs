/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages 배포 시 리포지토리 이름인 '/blog-kbeauty'를 basePath로 설정하여 리소스 경로 깨짐 방지
  basePath: process.env.NODE_ENV === 'production' ? '/blog-kbeauty' : '',
};

export default nextConfig;
