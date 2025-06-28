document.addEventListener("DOMContentLoaded", () =>
{
  const urlParams = new URLSearchParams(window.location.search);
  const cardId = parseInt(urlParams.get("id"), 10);


  const cardsDatas = [
    {
      id: 1,
      name: "飯嶋",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [40, 60],
        "個人・団体の活動比重": [30, 70],
        "制作・研究比重": [100, 0]
      }
    },
    {
      id: 2,
      name: "伊藤正彦",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 3,
      name: "伊藤マーティ",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [100, 0],
        "個人・団体の活動比重": [0, 100],
        "制作・研究比重": [50, 50]
      }
    },
    {
      id: 4,
      name: "大島",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [20, 80],
        "個人・団体の活動比重": [20, 80],
        "制作・研究比重": [60, 40]
      }
    },
    {
      id: 5,
      name: "柿並",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [10, 90],
        "個人・団体の活動比重": [20, 80],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 6,
      name: "河原",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [60, 40],
        "制作・研究比重": [0, 100]
      }
    },
    {
      id: 7,
      name: "金",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [90, 10],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [80, 20]
      }
    },
    {
      id: 8,
      name: "齋藤健司",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [50, 50],
        "制作・研究比重": [100, 0]
      }
    },
    {
      id: 9,
      name: "斎藤一",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [30, 70],
        "個人・団体の活動比重": [60, 40],
        "制作・研究比重": [100, 0]
      }
    },
    {
      id: 10,
      name: "坂本",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [0, 100],
        "個人・団体の活動比重": [20, 80],
        "制作・研究比重": [90, 10]
      }
    },
    {
      id: 11,
      name: "佐々木",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [20, 80],
        "個人・団体の活動比重": [70, 30],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 12,
      name: "島田",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [0, 100],
        "個人・団体の活動比重": [90, 10],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 13,
      name: "杉澤",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [20, 80],
        "個人・団体の活動比重": [50, 50],
        "制作・研究比重": [100, 100]
      }
    },
    {
      id: 14, name: "谷口",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [30, 70],
        "個人・団体の活動比重": [60, 40],
        "制作・研究比重": [10, 90]
      }
    },
    {
      id: 15,
      name: "近澤",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [0, 100],
        "個人・団体の活動比重": [30, 70],
        "制作・研究比重": [100, 0]
      }
    },
    {
      id: 16,
      name: "辻",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [80, 20],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [80, 20]
      }
    },
    {
      id: 17,
      name: "新井山",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [0, 100],
        "個人・団体の活動比重": [100, 0],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 18,
      name: "隼田",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [30, 70],
        "個人・団体の活動比重": [60, 40],
        "制作・研究比重": [80, 20]
      }
    },
    {
      id: 19,
      name: "平山",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [90, 10],
        "制作・研究比重": [20, 30]
      }
    },
    {
      id: 20,
      name: "広奥",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [90, 10],
        "個人・団体の活動比重": [10, 90],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 21,
      name: "藤原",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [10, 90],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 22,
      name: "甫喜本",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [20, 50],
        "制作・研究比重": [10, 90]
      }
    },
    {
      id: 23,
      name: "松井",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [20, 80],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 24,
      name: "三浦",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [90, 10],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 25,
      name: "向田",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [30, 70],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 26,
      name: "守",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [50, 50],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 27,
      name: "森川",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [100, 0],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [0, 100]
      }
    },
    {
      id: 28,
      name: "安田",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 29,
      name: "山北",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [90, 10],
        "個人・団体の活動比重": [20, 80],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 30,
      name: "湯村",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [0, 100],
        "個人・団体の活動比重": [10, 90],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 31,
      name: "綿谷",
      profile: "profile.png",
      description: "データ分析に重点を置いたゼミです。",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      activity: "週に1回のディスカッションと企業連携プロジェクト",
      research: "AIを活用したマーケティングデータ分析",
      works: "『SNSマーケティングの効果分析』など",
      extracurricular: "学外ビジネスコンテストへの参加実績あり",
      sns: "https://twitter.com/examplezemi",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "SNSマーケティングの効果分析",
        "デジタル広告と消費者行動の関連性",
        "X社の購買データ分析による販促提案",
        "学生生活におけるAI活用実態調査",
        "動画広告のクリック率最適化分析"
      ],
      worksImages: [
        "nekocyanPAKE4725-457_TP_V4.jpg",
        "tomcatDSC09085_TP_V4.jpg"],
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [80, 20],
        "制作・研究比重": [20, 80]
      }
    },
  ];

  window.cardsData = cardsDatas;
  const selectedCard = cardsDatas.find(c => c.id === cardId);
  const mainElement = document.querySelector("main");
  const profileButton = document.getElementById("profile-button");
  const profileList = document.getElementById("profile-list");
  const profileModal = document.getElementById("profile-modal");
  const closeProfile = document.getElementById("close-profile");
  const profileTitle = document.getElementById("profile-title");
  const profileImage = document.getElementById("profile-image");
  const prevProfile = document.getElementById("prev-profile");
  const nextProfile = document.getElementById("next-profile");

  let currentProfileIndex = 0;

  // ===== プロフ帳 =====
  function generateProfileList()
  {
    profileList.innerHTML = "";
    cardsDatas.forEach((card, index) =>
    {
      const li = document.createElement("li");
      li.classList.add("profile-item");
      li.dataset.index = index;
      li.textContent = `${card.name}先生`;
      li.addEventListener("click", () =>
      {
        currentProfileIndex = index;
        showProfile();
        profileModal.style.display = "flex";
        profileList.style.display = "none";
      });
      profileList.appendChild(li);
    });
  }

  function showProfile()
  {
    const profile = cardsData[currentProfileIndex];
    profileTitle.textContent = profile.name + " 先生";
    profileImage.src = profile.profile;
    prevProfile.style.display = currentProfileIndex === 0 ? "none" : "block";
    nextProfile.style.display = currentProfileIndex === cardsData.length - 1 ? "none" : "block";
  }

  profileButton.addEventListener("click", (event) =>
  {
    event.stopPropagation();
    profileList.style.display = (profileList.style.display === "none" || profileList.style.display === "") ? "block" : "none";
  });

  document.addEventListener("click", (event) =>
  {
    if (!profileList.contains(event.target) && event.target !== profileButton)
    {
      profileList.style.display = "none";
    }
  });

  prevProfile.addEventListener("click", () =>
  {
    if (currentProfileIndex > 0)
    {
      currentProfileIndex--;
      showProfile();
    }
  });

  nextProfile.addEventListener("click", () =>
  {
    if (currentProfileIndex < cardsData.length - 1)
    {
      currentProfileIndex++;
      showProfile();
    }
  });

  closeProfile.addEventListener("click", () =>
  {
    profileModal.style.display = "none";
  });

  document.querySelector(".profile-overlay").addEventListener("click", () =>
  {
    profileModal.style.display = "none";
  });

  // 初期表示でリストを生成
  generateProfileList();
  // 初期状態ではリストを非表示
  profileList.style.display = "none";

  document.querySelector(".profile-overlay").addEventListener("click", () =>
  {
    profileModal.style.display = "none";
  });

  if (selectedCard)
  {
    mainElement.innerHTML = `
        <div class="chart-card">
            <h2>ゼミ比較グラフ</h2>
            <canvas id="comparisonChart"></canvas>
            <div class="chart-legend">
                <p><strong>左側：</strong>校外活動 / 個人作業 / 制作</p>
                <p><strong>右側：</strong>校内活動 / 団体作業 / 研究</p>
            </div>
            <div class="comparison-dropdown">
                <select id="comparison-select">
                    <option value="">比較するゼミを選択（1件まで）</option>
                    ${cardsDatas.filter(c => c.id !== selectedCard.id)
        .map(c => `<option value="${c.id}">${c.name}ゼミ</option>`)
        .join("")}
                </select>
                <button id="compare-submit">比較する</button>
            </div>
        </div>

        <div class="individual-cards" id="individual-cards">
            ${generateZemiCardHtml(selectedCard)}
        </div>
    `;

    setupGalleryForCard(selectedCard);

    // スライドギャラリーの画像切り替え
    let currentImageIndex = 0;
    let currentWorkImages = selectedCard?.worksImages || [];

    const galleryImage = document.getElementById("current-work-image");
    const prevSlide = document.querySelector(".prev-slide");
    const nextSlide = document.querySelector(".next-slide");

    if (galleryImage && prevSlide && nextSlide)
    {
      prevSlide.addEventListener("click", () =>
      {
        currentImageIndex = (currentImageIndex - 1 + currentWorkImages.length) % currentWorkImages.length;
        galleryImage.src = currentWorkImages[currentImageIndex];
      });

      nextSlide.addEventListener("click", () =>
      {
        currentImageIndex = (currentImageIndex + 1) % currentWorkImages.length;
        galleryImage.src = currentWorkImages[currentImageIndex];
      });
    }


    let comparisonChart = createComparisonChart("comparisonChart", [selectedCard]);
    let compared = [selectedCard];

    document.querySelectorAll(".favorite-btn").forEach(button =>
    {
      button.addEventListener("click", () => toggleFavorite(button.dataset.id));
    });

    document.getElementById("compare-submit").addEventListener("click", () =>
    {
      const selectedId = parseInt(document.getElementById("comparison-select").value, 10);
      if (!selectedId) return alert("ゼミを選択してください。");
      if (compared.length > 1) return alert("比較できるゼミは1つのみです。");

      const found = cardsDatas.find(c => c.id === selectedId);
      if (compared.find(c => c.id === found.id)) return alert("すでに表示中です。");

      compared.push(found);

      const container = document.getElementById("individual-cards");
      container.insertAdjacentHTML("beforeend", generateZemiCardHtml(found, true));

      // ✅ スライダー初期化
      setupGalleryForCard(found);

      comparisonChart.destroy();
      comparisonChart = createComparisonChart("comparisonChart", compared);

      // お気に入りボタン
      document.querySelectorAll(".favorite-btn").forEach(button =>
      {
        button.addEventListener("click", () => toggleFavorite(button.dataset.id));
      });

      // 削除ボタン
      document.querySelectorAll(".delete-button").forEach(button =>
      {
        button.addEventListener("click", () =>
        {
          const deleteId = parseInt(button.dataset.id);
          document.getElementById(`description-card-${deleteId}`).remove();
          compared = compared.filter(c => c.id !== deleteId);
          comparisonChart.destroy();
          comparisonChart = createComparisonChart("comparisonChart", compared);
        });
      });
    });

  }

  function generateZemiCardHtml(card, isComparison = false)
  {
    const isLoggedIn = localStorage.getItem("currentUser") !== null;
    const currentUser = localStorage.getItem("currentUser");
    const favoriteList = currentUser
      ? JSON.parse(localStorage.getItem(`favorites_${currentUser}`) || "[]")
      : JSON.parse(localStorage.getItem("favorites") || "[]");
    const isFavorite = favoriteList.includes(card.id);

    return `
    <div class="individual-card" id="description-card-${card.id}" data-id="${card.id}">
      ${isLoggedIn ? `<button class="favorite-btn ${isFavorite ? 'favorited' : ''}" data-id="${card.id}" title="お気に入りに追加/解除">★</button>` : ""}
      ${(isComparison && card.id !== cardId) ? `<button class="delete-button" data-id="${card.id}">×</button>` : ""}
      <h3>${card.name}ゼミ</h3>
      <img src="${card.image}" alt="${card.name}ゼミ" class="detail-image">
      <p>${card.description}</p>
      <div class="zemi-detail">
        <h4>ゼミでの活動内容</h4>
        <p>${card.activity || "準備中"}</p>
        <h4>卒研の詳細・理念</h4>
        <p>${card.research || "準備中"}</p>
        <h4>ゼミ生の卒論・作品</h4>

        ${card.thesisTitles && card.thesisTitles.length ? `
        <div style="display: flex; justify-content: center;">
          <div style="text-align: left;">
            ${card.thesisTitles.slice(0, 5).map(title => `<div>${title}</div>`).join("")}
          </div>
        </div>
        ` : `
        <div style="display: flex; justify-content: center;">
          <p style="text-align: left;">""</p>
        </div>
        `}

        ${card.worksImages && card.worksImages.length ? `
        <div id="works-gallery-${card.id}" class="works-gallery hidden">
          <button class="gallery-btn" id="prev-slide-${card.id}">◀</button>
          <img id="current-work-image-${card.id}" class="gallery-image" src="${card.worksImages[0]}" alt="作品画像">
          <button class="gallery-btn" id="next-slide-${card.id}">▶</button>
        </div>
      ` : ""}
      

        <h4>過去の課外活動</h4>
        <p>${card.extracurricular || "準備中"}</p>
        <h4>ゼミのSNS</h4>
        <p><a href="${card.sns}" target="_blank">${card.sns || "なし"}</a></p>
        <h4>ゼミを志望した理由</h4>
        <p>${card.reason || "準備中"}</p>
      </div>
    </div>
  `;
  }

  function toggleFavorite(cardId)
  {
    const currentUser = localStorage.getItem("currentUser");
    let favorites = currentUser
      ? JSON.parse(localStorage.getItem(`favorites_${currentUser}`) || "[]")
      : JSON.parse(localStorage.getItem("favorites") || "[]");

    const index = favorites.indexOf(Number(cardId));
    if (index === -1)
    {
      favorites.push(Number(cardId));
    } else
    {
      favorites.splice(index, 1);
    }

    if (currentUser)
    {
      localStorage.setItem(`favorites_${currentUser}`, JSON.stringify(favorites));
    } else
    {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    const cardData = cardsDatas.find(c => c.id == cardId);
    const cardElement = document.getElementById(`description-card-${cardId}`);
    const isComparison = cardElement?.classList.contains("individual-card");

    if (cardElement)
    {
      cardElement.outerHTML = generateZemiCardHtml(cardData, isComparison);
    }

    const newBtn = document.querySelector(`.favorite-btn[data-id="${cardId}"]`);
    if (newBtn)
    {
      newBtn.addEventListener("click", () => toggleFavorite(cardId));
      if (favorites.includes(Number(cardId)))
      {
        newBtn.classList.add("favorited");
      } else
      {
        newBtn.classList.remove("favorited");
      }
    }
    if (e.target.matches(".next-slide, .prev-slide"))
    {
      const track = e.target.closest(".works-gallery").querySelector(".gallery-track");
      const scrollAmount = track.clientWidth / 2;
      track.scrollLeft += e.target.classList.contains("next-slide") ? scrollAmount : -scrollAmount;
    }
  }

  function setupGalleryForCard(card)
  {
    const galleryWrapper = document.getElementById(`works-gallery-${card.id}`);
    const currentImage = document.getElementById(`current-work-image-${card.id}`);
    const prevButton = document.getElementById(`prev-slide-${card.id}`);
    const nextButton = document.getElementById(`next-slide-${card.id}`);

    if (!galleryWrapper || !currentImage || !card.worksImages?.length) return;

    galleryWrapper.classList.remove("hidden");

    let currentIndex = 0;
    const total = card.worksImages.length;

    prevButton?.addEventListener("click", () =>
    {
      currentIndex = (currentIndex - 1 + total) % total;
      currentImage.src = card.worksImages[currentIndex];
    });

    nextButton?.addEventListener("click", () =>
    {
      currentIndex = (currentIndex + 1) % total;
      currentImage.src = card.worksImages[currentIndex];
    });
  }


  function createComparisonChart(canvasId, cards)
  {
    const ctx = document.getElementById(canvasId).getContext("2d");
    const labels = ["場所別活動比重", "個人・団体の活動比重", "制作・研究比重"];
    const datasets = [];

    const colors = [
      "rgba(106, 17, 203",
      "rgba(37, 117, 252",
      "rgba(255, 159, 64"
    ];

    const leftDescriptors = ["校外活動", "個人作業", "制作"];
    const rightDescriptors = ["校内活動", "団体作業", "研究"];

    cards.forEach((card, index) =>
    {
      const color = colors[index % colors.length];
      datasets.push({
        label: `${card.name}ゼミ（左）`,
        data: labels.map((label) => -card.barData[label][0]),
        backgroundColor: `${color}, 0.7)`,
        stack: `stack-${index}`
      });
      datasets.push({
        label: `${card.name}ゼミ（右）`,
        data: labels.map((label) => card.barData[label][1]),
        backgroundColor: `${color}, 0.3)`,
        stack: `stack-${index}`
      });
    });

    return new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets
      },
      options: {
        indexAxis: "y",
        responsive: true,
        animation: {
          duration: 1200,
          easing: 'easeOutBounce'
        },
        scales: {
          x: {
            stacked: true,
            min: -100,
            max: 100,
            ticks: {
              callback: v => Math.abs(v) + "%",
              stepSize: 20
            }
          },
          y: {
            stacked: false
          }
        },
        plugins: {
          legend: {
            position: "bottom"
          },
          tooltip: {
            callbacks: {
              label: context =>
              {
                const isLeft = context.raw < 0;
                const index = context.dataIndex;
                const descriptor = isLeft ? leftDescriptors[index] : rightDescriptors[index];
                return `${context.dataset.label}: ${Math.abs(context.raw)}% (${descriptor})`;
              }
            }
          }
        }
      }


    });


  }

  let currentImageIndex = 0;
  let currentWorkImages = [];

  document.addEventListener("click", (e) =>
  {
    if (e.target.matches(".prev-slide, .next-slide"))
    {
      if (currentWorkImages.length === 0) return;

      currentImageIndex += e.target.classList.contains("next-slide") ? 1 : -1;

      // ループ切替（先頭と末尾で循環）
      if (currentImageIndex < 0) currentImageIndex = currentWorkImages.length - 1;
      if (currentImageIndex >= currentWorkImages.length) currentImageIndex = 0;

      const currentImg = document.getElementById("current-work-image");
      currentImg.src = currentWorkImages[currentImageIndex];
    }



  });

});