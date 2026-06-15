import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

// 프론트매터 데이터 중 Date 객체가 있으면 문자열로 안전하게 변환
function sanitizeData(data) {
  const sanitized = { ...data };
  for (const key in sanitized) {
    if (sanitized[key] instanceof Date) {
      sanitized[key] = sanitized[key].toISOString().split('T')[0];
    }
  }
  return sanitized;
}

export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);
      const sanitizedData = sanitizeData(matterResult.data);

      return {
        slug,
        ...sanitizedData,
        content: matterResult.content,
      };
    });

  return allPostsData.sort((a, b) => {
    if ((a.date || '') < (b.date || '')) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const sanitizedData = sanitizeData(matterResult.data);

  return {
    slug,
    ...sanitizedData,
    content: matterResult.content,
  };
}
