// プロジェクトデータの型定義
export interface Project {
  id: number;
  category: 'web-app' | 'web-site' | 'game' | 'tool';
  imageClass: 'react' | 'vue' | 'nextjs' | 'html';
  image: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl?: string;
}

// プロジェクトデータの配列
export const projectsData: Project[] = [
  {
    id: 1,
    category: 'web-app',
    imageClass: 'react',
    image: '⚛️',
    title: 'StopWatch for mobile',
    description: 'Reactで作成したストップウォッチアプリ。レコード機能付き。',
    tags: ['React', 'Vite', 'SCSS'],
    demoUrl: 'https://advanced-stop-watch.vercel.app/',
    githubUrl: 'https://github.com/CatsHandDev/AdvancedStopWatch',
  },
  {
    id: 2,
    category: 'web-app',
    imageClass: 'react',
    image: '⚛️',
    title: 'Takiron serial-image-search',
    description: 'タキロンのメーカー品番から図面を閲覧できるサイト。',
    tags: ['React',
      'Vite',
      'Firebase Storage',
      'Firebase Authentication',
      'Firestore Database'],
    demoUrl: 'https://serial-image-search.vercel.app/',
    githubUrl: 'https://github.com/CatsHandDev/serial-image-search',
  },
  {
    id: 3,
    category: 'web-app',
    imageClass: 'react',
    image: '⚛️',
    title: 'okozukai app',
    description: 'おこづかいをランダムに決定するアプリ',
    tags: ['React', 'Vite'],
    demoUrl: 'https://budget-app-sepia-iota.vercel.app/',
    githubUrl: 'https://github.com/CatsHandDev/budget-app',
  },
  {
    id: 4,
    category: 'web-app',
    imageClass: 'nextjs',
    image: '⚛️',
    title: 'AI tool map',
    description: '各種AIツールをマインドマップ風にまとめたもの。アプリポータルとしても利用可',
    tags: ['React', 'Vite', 'Typescript'],
    demoUrl: 'https://catshanddev.github.io/ai_tool_map/',
    githubUrl: 'https://github.com/CatsHandDev/ai_tool_map',
  },
  {
    id: 5,
    category: 'web-site',
    imageClass: 'nextjs',
    image: '⚛️',
    title: 'Taishin Co., Ltd. Web Site',
    description: '株式会社タイシンの公式サイト',
    tags: ['Next.js', 'sql', 'Xserver'],
    demoUrl: 'https://taishin1977.jp/',
    githubUrl: '',
  },
  {
    id: 6,
    category: 'web-site',
    imageClass: 'html',
    image: '⚛️',
    title: 'Taishin Co., Ltd. E-Commerce',
    description: '株式会社タイシン公式通販サイト',
    tags: ['html', 'css', 'javascript'],
    demoUrl: 'https://www.taneha-honten.com/',
    githubUrl: '',
  },
  {
    id: 7,
    category: 'web-site',
    imageClass: 'nextjs',
    image: '⚛️',
    title: 'G-select Co., Ltd. Web site',
    description: '架空の自動車屋さんのHP。練習',
    tags: ['React', 'vite', 'Typescript'],
    demoUrl: 'https://gojo-motors.vercel.app/',
    githubUrl: 'https://github.com/CatsHandDev/gojo-motors',
  },
];