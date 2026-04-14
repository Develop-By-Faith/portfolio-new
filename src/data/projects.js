import {
  FiBookOpen,
  FiRepeat,
  FiLayers,
  FiHeadphones,
  FiSearch,
  FiTrendingUp,
  FiSun,
  FiBook,
  FiMessageCircle,
  FiUsers,
  FiCpu,
  FiMessageSquare,
  FiMonitor,
} from 'react-icons/fi'

const projects = [
  {
    id: 'emaw',
    title: 'Every Man A Warrior App',
    subtitle: 'A discipleship tool helping men grow in faith',
    description:
      'A mobile app designed to support men in their spiritual growth through discipleship content, verse memorization tools, and community features. Used daily by thousands of men worldwide.',
    tags: [
      'React Native',
      'Expo',
      'Django REST Framework',
      'PostgreSQL',
      'Redis',
      'Azure',
      'OpenAI',
    ],

    story: {
      heading: 'The Story Behind the App',
      paragraphs: [
        'Every Man A Warrior is a discipleship program designed to help men grow in their relationship with God, strengthen their marriages, raise their children with intention, and navigate the hard seasons of life. I went through the study myself and was so impacted that I went on to lead several groups of men through the material.',
        'In 2022, I attended an Every Man A Warrior conference in Wichita, KS where I had a truly transformational experience. I knew I wanted to get involved and help in any way I could. When I asked an EMAW staff member why they didn\'t have a mobile app, they told me it was because they simply couldn\'t afford to pay someone to develop one.',
        'I offered to build it for free. This was my very first mobile application — I had never built a mobile app before. I taught myself React Native and built both the frontend and the entire backend from scratch, designing the architecture, database, API, and cloud infrastructure along the way.',
        'Since launching, thousands of men have downloaded the app and use it daily for scripture memory, quiet times, and working through the EMAW curriculum. It\'s one of the most rewarding projects I\'ve ever worked on — proof that technology can have a real kingdom impact.',
      ],
    },

    features: [
      {
        title: 'Quiet Time Journaling',
        description:
          'Structured daily devotional journaling using the W.A.R. prayer framework — Worship, Admit, Request — with passage study, theme tracking, and full entry history.',
        Icon: FiBookOpen,
      },
      {
        title: 'Verse Memorization',
        description:
          'Five interactive practice modes — Flashcard, Initials, Fill-in-the-Blank, Audio, and Word Scramble — designed to help men internalize Scripture.',
        Icon: FiRepeat,
      },
      {
        title: '4-Book Curriculum',
        description:
          'Weekly lessons with discussion questions, quiet time assignments, and progress tracking across four discipleship books.',
        Icon: FiLayers,
      },
      {
        title: 'Audio Playback',
        description:
          'AI-generated text-to-speech for Bible verses powered by OpenAI, so users can listen and practice on the go.',
        Icon: FiHeadphones,
      },
      {
        title: 'Bible Verse Finder',
        description:
          'Search and discover verses by keyword, genre, and testament with custom collections for organizing favorites.',
        Icon: FiSearch,
      },
      {
        title: 'Progress Tracking',
        description:
          'Visual completion tracking across lessons, quiet times, and discussion questions — helping men stay consistent and accountable.',
        Icon: FiTrendingUp,
      },
    ],

    techStack: {
      'Frontend': [
        'React Native',
        'Expo',
        'React Navigation',
        'i18next',
        'Axios',
      ],
      'Backend': [
        'Django REST Framework',
        'PostgreSQL',
        'Redis',
        'JWT Authentication',
      ],
      'Cloud & DevOps': [
        'Azure App Service',
        'Azure Blob Storage',
        'Azure Key Vault',
        'GitHub Actions CI/CD',
      ],
      'Integrations': [
        'OpenAI TTS',
        'Microsoft Graph Email',
      ],
    },

    screenshots: [
      {
        id: 'home',
        src: '/images/emaw/homeScreen.png',
        alt: 'EMAW app home screen with main feature navigation cards',
        caption: 'Home Dashboard',
      },
      {
        id: 'quiet-time',
        src: '/images/emaw/qt_example.png',
        alt: 'Quiet time journaling screen with W.A.R. prayer framework',
        caption: 'Quiet Time Journaling',
      },
      {
        id: 'verse-hub',
        src: '/images/emaw/verse_memory_example.png',
        alt: 'Verse memory hub with practice options',
        caption: 'Verse Memory Hub',
      },
      {
        id: 'flashcard',
        src: '/images/emaw/flashcard_practice.png',
        alt: 'Flashcard practice mode showing a Bible verse',
        caption: 'Flashcard Practice',
      },
      {
        id: 'fill-blank',
        src: '/images/emaw/fill_in_blank_practice.png',
        alt: 'Fill-in-the-blank practice with color-coded feedback',
        caption: 'Fill-in-the-Blank Mode',
      },
      {
        id: 'books',
        src: '/images/emaw/books.png',
        alt: 'Four-book curriculum grid with progress indicators',
        caption: 'Book Curriculum',
      },
      {
        id: 'qt-tracking',
        src: '/images/emaw/qt_tracking_example.png',
        alt: 'Quiet time tracking with completion history',
        caption: 'Quiet Time Tracking',
      },
      {
        id: 'collections',
        src: '/images/emaw/verse_collections.png',
        alt: 'User verse collections with verse counts',
        caption: 'Verse Collections',
      },
    ],

    impact: [
      { label: 'Downloads', value: 'Thousands' },
      { label: 'Usage', value: 'Daily Active Users' },
      { label: 'Cost', value: 'Built Pro Bono' },
      { label: 'Milestone', value: 'First Mobile App' },
    ],

    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/every-man-a-warrior/id6741364438',
      },
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.emaw_app.app',
      },
    ],
  },
  {
    id: 'grow-bible',
    title: 'Grow Bible App',
    subtitle: 'A comprehensive Bible engagement platform powered by AI',
    description:
      'A full-stack Bible engagement platform with AI-powered devotionals, a rich Bible reader, verse memorization tools, real-time group chat, and a church admin dashboard — spanning three codebases and five OpenAI integrations.',
    tags: [
      'React Native',
      'Expo',
      'Django',
      'Channels',
      'Celery',
      'PostgreSQL',
      'Redis',
      'OpenAI',
      'Qdrant',
      'Cloudflare R2',
      'Stripe',
      'Docker',
    ],

    story: {
      heading: 'The Story Behind the App',
      paragraphs: [
        'I wanted to create a comprehensive app that helped Christians engage with the Bible daily. The vision was simple — a single place where someone could read Scripture, memorize verses, journal through devotionals, and connect with their small group. I wanted to build the tool I wished existed.',
        'As the project grew, so did the vision. I realized that many people who attend church on Sunday don\'t know where to start when it comes to studying the Bible on their own during the week. That insight shaped the heart of the platform — what if a pastor could upload a sermon and AI could generate devotional studies from it, giving their congregation a guided way to dig deeper into the message throughout the week?',
        'I built three full codebases from scratch: a React Native mobile app with a feature-rich Bible reader and real-time group chat, a Django backend with WebSocket support, async job processing, and vector-powered semantic search, and a React admin dashboard where church staff manage content and permissions. The system integrates five OpenAI services, a vector database, payment processing, and push notifications.',
        'The Grow Bible App is available on both iOS and Android. The goal has always been to make Bible study simple, accessible, and deeply meaningful for Christians at any level of their faith journey — whether they\'re brand new to Scripture or have been studying for decades.',
      ],
    },

    features: [
      {
        title: 'AI Quiet Times',
        description:
          'Personalized daily devotionals generated by AI with scripture passages, reflection questions, and audio — built on OpenAI Structured Outputs with Pydantic validation to ensure consistent, theologically sound content.',
        Icon: FiSun,
      },
      {
        title: 'Bible Reader',
        description:
          'Full Bible reader with multiple translations, color-coded highlighting, verse-level notes, custom tags, and a smart search library to revisit everything you\'ve marked up.',
        Icon: FiBook,
      },
      {
        title: 'Scripture AI Chat',
        description:
          'Ask questions about any Bible passage and get theologically-filtered answers. Built with OpenAI Agents SDK using specialized routing agents for lookup, pastoral counseling, and doctrinal topics.',
        Icon: FiMessageCircle,
      },
      {
        title: 'Verse Memorization',
        description:
          'Five interactive practice modes — Flashcard, Initials, Fill-in-the-Blank, Word Scramble, and Reference Lock — with streak tracking, daily review, and custom verse packs.',
        Icon: FiRepeat,
      },
      {
        title: 'Church Integration',
        description:
          'Churches publish sermons and studies to their followers\' feeds. QR code and deep-link join flow. Ministry-scoped content delivery.',
        Icon: FiUsers,
      },
      {
        title: 'Sermon-to-Study Pipeline',
        description:
          'Pastors upload a sermon and AI transcribes it (Whisper), generates an outline, and builds multi-lesson Bible studies — a complete audio-to-curriculum pipeline.',
        Icon: FiCpu,
      },
      {
        title: 'Real-Time Group Chat',
        description:
          'WebSocket-powered small group messaging with typing indicators, read receipts, emoji reactions, image sharing, and content moderation.',
        Icon: FiMessageSquare,
      },
      {
        title: 'Audio Playback',
        description:
          'AI-generated text-to-speech for scripture and devotional content with multiple voice options, playback speed control, and deterministic R2 caching to avoid redundant generation.',
        Icon: FiHeadphones,
      },
      {
        title: 'Church Admin Dashboard',
        description:
          'A separate React web app where church staff manage sermons, generate AI studies, create announcements, and assign granular permissions scoped to specific ministries.',
        Icon: FiMonitor,
      },
    ],

    techStack: {
      'Mobile App': [
        'React Native',
        'Expo 54',
        'React Navigation 7',
        'i18next',
        'SQLite',
        'Axios',
      ],
      'Web Dashboard': [
        'React 19',
        'Vite 7',
        'Tailwind CSS 4',
        'React Router 7',
        'CSS Modules',
      ],
      'Backend & Infrastructure': [
        'Django REST Framework',
        'Django Channels',
        'Celery',
        'PostgreSQL',
        'Redis',
        'Daphne ASGI',
        'Docker',
        'Cloudflare R2',
        'Firebase FCM',
        'Stripe',
      ],
      'AI & Machine Learning': [
        'OpenAI GPT (Structured Outputs)',
        'OpenAI Agents SDK',
        'Whisper (Transcription)',
        'TTS (Text-to-Speech)',
        'Qdrant Vector DB',
        'text-embedding-3-large',
      ],
    },

    screenshots: [
      {
        id: 'home',
        src: '/images/grow/mobile/home_screen.png',
        alt: 'Grow Bible App home hub with feature cards and gradient header',
        caption: 'Home Hub',
      },
      {
        id: 'quiet-time-gen',
        src: '/images/grow/mobile/ai_qt_prompt_example.png',
        alt: 'AI quiet time generation screen with prompt input',
        caption: 'AI Quiet Time',
      },
      {
        id: 'quiet-time-study',
        src: '/images/grow/mobile/ai_qt_example.png',
        alt: 'Generated quiet time study with Bible passages and questions',
        caption: 'Quiet Time Study',
      },
      {
        id: 'bible-reader',
        src: '/images/grow/mobile/bible_reader_example.png',
        alt: 'Bible reader with color-coded highlights and action toolbar',
        caption: 'Bible Reader',
      },
      {
        id: 'ai-chat',
        src: '/images/grow/mobile/ai_chat.png',
        alt: 'AI scripture chat with theological Q&A conversation',
        caption: 'Scripture AI Chat',
      },
      {
        id: 'verse-practice',
        src: '/images/grow/mobile/verse_practice_modes.png',
        alt: 'Verse memorization practice mode with interactive exercise',
        caption: 'Verse Practice',
      },
      {
        id: 'churches',
        src: '/images/grow/mobile/church_activity_feed.png',
        alt: 'Churches activity feed with sermon and study cards',
        caption: 'Churches & Sermons',
      },
      {
        id: 'group-chat',
        src: '/images/grow/mobile/group_chat_example.png',
        alt: 'Real-time group chat with reactions and typing indicators',
        caption: 'Group Chat',
      },
    ],

    dashboardScreenshots: [
      {
        id: 'dashboard-home',
        src: '/images/grow/dashboard/home_screen.png',
        alt: 'Church admin dashboard overview with content management',
        caption: 'Dashboard Home',
      },
      {
        id: 'smart-study',
        src: '/images/grow/dashboard/ai_generate_study.png',
        alt: 'AI study generator with file upload and prompt interface',
        caption: 'AI Study Generator',
      },
      {
        id: 'lesson-editor',
        src: '/images/grow/dashboard/lesson_editior.png',
        alt: 'Lesson editor with rich markdown editing and Bible passages',
        caption: 'Lesson Editor',
      },
      {
        id: 'admin-panel',
        src: '/images/grow/dashboard/members_and_permissions.png',
        alt: 'Member management with roles and granular permissions',
        caption: 'Member Management',
      },
    ],

    impact: [
      { label: 'Architecture', value: '3 Full-Stack Codebases' },
      { label: 'AI', value: '5+ OpenAI Integrations' },
      { label: 'Real-Time', value: 'WebSocket Chat & Notifications' },
      { label: 'Platforms', value: 'iOS & Android' },
    ],

    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/grow-bible-app/id6757165575',
      },
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.developbyfaith.grow',
      },
      {
        label: 'Website',
        url: 'https://www.growbibleapp.com/',
      },
    ],
  },
]

export default projects

export function getProjectBySlug(slug) {
  return projects.find((p) => p.id === slug) || null
}
