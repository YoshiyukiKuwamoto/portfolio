document.addEventListener("DOMContentLoaded", () =>
{
  const urlParams = new URLSearchParams(window.location.search);
  const cardId = parseInt(urlParams.get("id"), 10);


  const zemiData = [
    {
      id: 1,
      name: "飯嶋",
      profile: "profile/ゼミプロフ帳（飯嶋美知子） - 飯嶋美知子.png",
      description: "自主性、主体性",
      image: "images/LINE_ALBUM_飯嶋ゼミ 写真_250621_3.jpg",
      activity: "日本、中国等の言語・文化について学び、国際感覚を身につける",
      research: "各人が興味のあるテーマについて、文献調査を中心に研究を進めていく",
      extracurricular: "中国料理店で中国語学習、中国茶体験",
      reason: [
        "語学や外国の文化の勉強がおもしろそうだったから",
        "中国のゲームをやっていて中国語や中国文化に興味をもったのと、先生の人柄がよさそうだったから"
      ],
      thesisTitles: [
        "利き茶ゲームによる若者の緑茶への意識変化－若者の緑茶消費増加のために－",
        "バレーボールの競技人口増加のための一提案",
        "ゲームに見る日中の神話からの影響",
        "日本と中国のテーブルマナーの比較",
        "日本人の睡眠事情"
      ],
      barData: {
        "場所別活動比重": [90, 10],
        "個人・団体の活動比重": [100, 0],
        "制作・研究比重": [0, 100]
      }
    },
    {
      id: 2,
      name: "伊藤正彦",
      profile: "profile/ゼミプロフ帳テンプレート - 伊藤正彦.png",
      description: "「知識・経験・スキル・人脈といった一生役に立つ無形財産」を身に着けてもらう",
      image: "images/imashsemi03 - 伊藤正彦.jpg",
      activity: "週に1回のディスカッションと情報可視化を通したコミュニケーション技術の研究。",
      research: "最先端の内容の研究をやるが、その人にとってできないことはやらせない",
      extracurricular: "可視化研究室合同合宿＠東京に参加。雪まつりでデータ収集。",
      reason: [
        "自由に好きなことを研究でき、先生やゼミの雰囲気が自分にぴったりだったから",
        "学会発表や自分のペースで研究でき、のびのびと挑戦できる環境に魅力を感じたから"
      ],
      thesisTitles: [
        "立体ディスプレイを用いた雪像点群探索システムの開発と提案",
        "大気汚染物質の飛来状況分析のための伝搬可視化",
        "曖昧な地理表現に類似した旅行記探索システムの構築",
        "距離に応じて詳細度の変化するボクセル表現による点群可視化システムの提案",
        "野球におけるフィールド上のデータ可視化を通じた打者比較分析システム"
      ],
      worksImages: [
        "worksimages/research01 - 伊藤正彦.jpg",
        "worksimages/research02 - 伊藤正彦.jpg",
        "worksimages/research03 - 伊藤正彦.jpg",
        "worksimages/research04 - 伊藤正彦.jpg",
        "worksimages/research05 - 伊藤正彦.jpg",
        "worksimages/research06 - 伊藤正彦.jpg",
        "worksimages/research07 - 伊藤正彦.jpg",
        "worksimages/research08 - 伊藤正彦.jpg",
        "worksimages/research09 - 伊藤正彦.jpg",
        "worksimages/research10 - 伊藤正彦.jpg",
      ],
      barData: {
        "場所別活動比重": [80, 20],
        "個人・団体の活動比重": [80, 20],
        "制作・研究比重": [0, 100]
      }
    },
    {
      id: 3,
      name: "伊藤マーティ",
      description: "アート",
      image: "images/1749428917271 - 伊藤マーティ.jpg",
      activity: "アート作品の制作・展示、ワークショップや画材研究",
      extracurricular: "著名アーティストを招いて講演会やワークショップの開催",
      reason: [
        "海外のアート作品に興味があり、先生がその分野に精通しているため。",
        "イラストとアートマネジメントを学んでみたいと思ったから。"
      ],
      worksImages: [
        "worksimages/1749429997395 - 伊藤マーティ.jpg",
        "worksimages/250519180935457 - 伊藤マーティ.JPG"],
      barData: {
        "場所別活動比重": [50, 50],
        "個人・団体の活動比重": [30, 70],
        "制作・研究比重": [70, 30]
      }
    },

    {
      id: 5,
      name: "柿並",
      profile: "profile/ゼミプロフ帳テンプレート - 柿並.png",
      description: "一生役立つスキル（読み・書き・そろばん・プレゼンテーション）を身に着ける",
      image: "images/Gi0s-j1bYAA2Avi - 柿並義宏.jpg",
      activity: "IoT機器を使った環境計測，統計・機械学習を用いたデータ分析",
      research: "研究活動を通じ，スキル・習慣を身に着け，自ら成長できる人になってほしい",
      extracurricular: "歓送迎会，円山動物園での調査，ルスツでの屋外調査",
      reason: [
        "プログラミングとハードウェアを同時に学べるゼミだと思ったから",
        "先生に質問しやすく、プレゼンの練習もできるので、卒業研究発表の時に自分に必要なものが揃っている場所だと思ったから"],
      thesisTitles: [
        "インフラサウンドを利用した雪崩の検知",
        "ディープラーニングを用いた電離圏全電子数モデルの開発",
        "Raspberry Pi を用いた顔認証機能付き宅配ボックスの開発",
        "屋外犬用の熱中症警告装置の開発－LINEとRaspberry Piを連携",
        "バスケットボールの試合データを用いたNBAチームの特徴分析"
      ],
      barData: {
        "場所別活動比重": [30, 70],
        "個人・団体の活動比重": [80, 20],
        "制作・研究比重": [10, 90]
      }
    },
    {
      id: 6,
      name: "河原",
      profile: "profile/河原_profile - 河原大.png",
      description: "卒業制作に向けて頑張る",
      image: "images/河原ゼミ写真_003 - 河原大.png",
      activity: "個人やチームでデジタルコンテンツを制作・開発するゼミ",
      research: "卒業制作という長期の個人作業を成長の機会としてほしい",
      extracurricular: "HTB秋の感謝祭や北竜町プロジェクションマッピングなど",
      reason: [
        "ゲームの個人制作やゼミのプロジェクトに興味があったから",
        "3DCGとゲーム制作に興味があり、それら両方を学べるから"],
      thesisTitles: [
        "2Dクイズアクションゲーム「雑学クイズラン」の制作",
        "ドットバース　-ドット絵メタバースワールドの制作-",
        "中国古代風架空都市を題材にした仮想空間の制作-BlenderとUnreal Engine5の活用-",
        "ごみと向き合い終末世界を生きるノベルゲーム「ごみばこせかい」の制作",
        "「SNS」-複数のスマートフォンを用いた新しい映像体験の提案-"
      ],
      worksImages: [
        "worksimages/河原ゼミ作品_001 - 河原大.png",
        "worksimages/河原ゼミ作品_002 - 河原大.png",
        "worksimages/河原ゼミ作品_003 - 河原大.png"
      ],
      barData: {
        "場所別活動比重": [50, 50],
        "個人・団体の活動比重": [70, 30],
        "制作・研究比重": [90, 10]
      }
    },
    {
      id: 10,
      name: "坂本",
      profile: "profile/ゼミプロフ帳テンプレート - 坂本牧葉.jpg",
      description: "デザイン力とコミュニケーションです！",
      image: "images/photo2 - 坂本牧葉.png",
      activity: "視覚的デザイン、イラストの分野の制作とデザインの研究に取り組みます。",
      research: "論文の場合も制作の場合も、過去の事例を調べ、自分の興味と社会の需要をすり合わせることです。30字は難しい。",
      extracurricular: "チョークアート、アート・デザイン制作の学外での展示など",
      thesisTitles: [
        "文字色が短期記憶に及ぼす影響の検証",
        "インフルエンサー起用がアパレル企業のSNS投稿の支持に及ぼす影響の分析",
        "ラベル情報がペットボトル飲料水の味覚に与える影響",
      ],
      worksImages: [
        "worksimages/IMG_1557 - 坂本牧葉.jpeg",
        "worksimages/IMG_1559 - 坂本牧葉.jpeg"],
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [60, 40],
        "制作・研究比重": [50, 50]
      }
    },
    {
      id: 11,
      name: "佐々木",
      image: "images/104880.jpg",
      description: "個々人がきちんと自学学習できること、またはその様な人材となること。",
      activity: "(今のところ)セキュリティに関連する内容を学習するゼミです。ですが、内容はこれに縛られません。ゼミ生個々人が「やりたいこと」を見つけて頑張っています。",
      research: "多岐にわたる分野を網羅的に学修した上で「研究」までたどりつくには大変な努力が必要です。先ずは自分で学習できること、学習しつづける人になることを目標としています。よって、卒研は必修とはしていません。",
      extracurricular: "SC4Y(Security College for Youth) の開催している勉強会への参加を強く推奨しています。",
      reason: [
        "自分の学びたいことが学べるゼミ。セキュリティの知識・実践を学びたいならここだと思います。ゼミの雰囲気も緩くて好きです。",
        "情報大学に入学前からセキュリティについて学びたいと思っており、佐々木ゼミを選びました。"
      ],
      barData: {
        "場所別活動比重": [50, 50],
        "個人・団体の活動比重": [100, 0],
        "制作・研究比重": [0, 100]
      }
    },
    {
      id: 12,
      name: "島田",
      profile: "profile/shimada_profile2_out - 島田英二.jpg",
      description: "次世代を生きぬく力を養成しています",
      image: "images/SHIMADA_SEMI_BBQ - 島田英二.jpg",
      activity: "島田ゼミではおもに実写の映像制作、映像表現の研究をしています。",
      research: "社会人になる前に、自分で決めたテーマについて、心底考え抜く経験をしてほしいと思っています。",
      extracurricular: "学内外で撮影を行い、短編映画や映像コンテストの作品を制作しています。",
      reason: [
        "皆が挑戦し輝ける場所を作るためこのゼミを選びました。",
        "元々、映画制作や映画監督の仕事に興味があり、映像の知識を深めたかったので所属しました。"
      ],
      thesisTitles: [
        "SFX と VFX を用いた怪獣映画「町が消えた日」の制作",
        "ドキュメンタリー「tatoo -それぞれの理由-」の制作",
        "Xデジタルサイネージ用映像の制作 —地下に窓を感じさせる映像作品「窓の外は、」の制作—",
        "プログラミング言語を用いたワークフローによる映像制作 -プログラマブル・ロトスコープ「Transform」の制作-",
        "AIを使用した映像制作の研究　〜芥川竜之介「蜘蛛の糸」の映像化〜（卒研Ⅱ）"
      ],
      worksImages: [
        "worksimages/2023_domino_smoking - 島田英二.jpg",
        "worksimages/2024_jichi1 - 島田英二.jpg",
        "worksimages/2024_jichi2 - 島田英二.jpg",
        "worksimages/2024_jichi3 - 島田英二.jpg",
        "worksimages/2024_kinenman - 島田英二.jpg",
        "worksimages/2024_utopia_smoking - 島田英二.jpg",
        "worksimages/2025_rendevous_ - 島田英二.jpg",
      ],
      barData: {
        "場所別活動比重": [40, 60],
        "個人・団体の活動比重": [20, 80],
        "制作・研究比重": [80, 20]
      }
    },
    {
      id: 13,
      name: "杉澤",
      profile: "profile/ゼミプロフ帳(杉澤） - 杉澤愛美.jpg",
      description: "主にグラフィックデザインを用いた課題解決の提案",
      image: "images/IMG_7513 - 杉澤愛美.JPG",
      activity: "主にグラフィックデザインを用いた課題解決の提案",
      research: "基本学生が興味のあることであればどんな内容でもいいですが、ゼミのテーマである課題解決を主にすることが多い",
      extracurricular: "ゼミ以外で様々な企業や地域と連携したプロジェクト、研究活動。",
      thesisTitles: [
        "大学生の献血参加を促すキャラクター育成コンテンツの開発-ユーザインターフェースデザインの設計-",
        "栗山町の滞在型観光促進を目的としたWebサイトの制作",
        "観光者の避難に特化した札幌市都心部の地震防災マップ",
        "「道の駅スタンプ」を活用したトラベルノート・テンプレートの制作",
        "愛犬サプリメント『ゲンキ・ワン』の販売を促進する動画広告の制作"
      ],
      barData: {
        "場所別活動比重": [50, 50],
        "個人・団体の活動比重": [10, 90],
        "制作・研究比重": [50, 50]
      }
    },
    {
      id: 15,
      name: "近澤",
      profile: "profile/chikazawa_profile - 近澤潤.png",
      description: "学びも、遊びも、全力で。",
      image: "images/chika-lab_02 - 近澤潤.jpg",
      activity: "Web・グラフィックなどのコンテンツ開発で地域課題の解決に挑戦するゼミです。",
      research: "大学生活の集大成として、「絆」を軸に好きなテーマで楽しく取り組みます。",
      extracurricular: "体育祭、大学祭、BBQ演習、焼きいも大会、クリスマス会など（2024年度実績）",
      reason: [
        "課題解決×Webデザインを実践できる活動内容だったことと、近澤先生だったからです！",
        "色んなことにチャレンジしたい！今まで身につけてきたことを活かしたい！"],
      worksImages: [
        "images/chika-lab_03 - 近澤潤.jpg",
        "images/chika-lab_04 - 近澤潤.jpg",
        "images/chika-lab_05 - 近澤潤.jpg",
        "images/chika-lab_06 - 近澤潤.jpg"],
      thesisTitles: [
        "情報系大学における女子学生満足度向上のための広報コンテンツ制作と交流施策の実践研究－高校生向け冊子作成と在学生向けコミュニティ支援の取組を通して－",
        "チーム開発を支援する日程管理アプリケーション－PM志向の日程管理ツール開発－",
        "地域の魅力を伝える媒体としての絵本活用の可能性",
        "「伊木力みかん」の認知度向上を目的としたWebサイトの提案",
        "人の流れを最もスムーズにできるインフォグラフィックス"
      ],
      barData: {
        "場所別活動比重": [50, 50],
        "個人・団体の活動比重": [20, 80],
        "制作・研究比重": [50, 50]
      }
    },
    {
      id: 19,
      name: "平山",
      description: "サウンド。",
      image: "images/IMG_6818 - 平山晴花.png",
      activity: "音楽やサウンドに焦点を当てた創作と研究",
      research: "学生の興味ある分野の創作や実験主導で、それに関連する研究課題を進める。",
      extracurricular: "学コンサートやワークショップの実施、電子音楽分野のインターカレッジへの参加",
      reason: "実践的な学びを得られると感じたため",
      thesisTitles: [
        "映像とサウンドを統合した超現実表現の探求 ",
        "ヒーリング音楽の制作と癒しの演出効果の検討 ",
        "「手」で感じるサウンドインスタレーション－",
        "オーディオビジュアルアート作品『ライトモザイク』の制作 ",
        "煉瓦をモチーフとした音響彫刻作品 『PiA BLICK』"
      ],
      worksImages: [
        "worksimages/S2140034 - 平山晴花.JPG",
        "worksimages/スクリーンショット 2025-06-30 15.58.54 - 平山晴花.png",
        "worksimages/スクリーンショット 2025-06-30 15.58.54 - 平山晴花.png"],
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [60, 40],
        "制作・研究比重": [50, 50]
      }
    },

    {
      id: 25,
      name: "向田",
      profile: "profile/ゼミプロフ帳テンプレート - 向田茂.png",
      image: "images/IMG_5327 - 向田茂.JPG",
      activity: "プレゼンテーションや地域での活動",
      research: "自分に嘘をつかず、一所懸命、全力で取り組む",
      extracurricular: "病気や体の不自由な子どもたちのためのイベントの実施",
      thesisTitles: [
        "初心者のための重機操縦シミュレーターの制作",
        "ぬりえ３D水族館の拡張",
        "ハンドトラッキング技術を用いた塗り絵アプリの開発",
        "インタラクティブなプロジェクションマッピングの実現を⽬指して",
        "AR 写真アプリケーションの開発―⽴体的な相棒との思い出を写真に―"
      ],
      worksImages: [
        "images/IMG_4623 - 向田茂.jpg",
        "images/IMG_4380 - 向田茂.jpg"],
      barData: {
        "場所別活動比重": [30, 70],
        "個人・団体の活動比重": [70, 30],
        "制作・研究比重": [50, 50]
      }
    },
    {
      id: 28,
      name: "安田",
      profile: "profile/安田ゼミ_profile - 安田光孝.png",
      description: "Web/クリエイティブ業界での即戦力と人間力育成、業界ネットワーク形成に重きをおく。",
      image: "images/09 - 安田光孝.jpg",
      activity: "プロジェクト型ゼミで、学外課題をデザインとテックで解決する実践重視ゼミです。",
      research: "自分の得意な分野で自分ならではの研究テーマを探す。制作・論文どちらでもよいです。",
      extracurricular: "ゼミ合宿、企業訪問、クリエイティブイベント参加、お花見、お散歩、書初め、キャンプ、スキー",
      reason: [
        "大学内外問わず色々な分野の人と出会え、就職につながる機会が多いから",
        "安田先生と先輩方の雰囲気、学外でのプロジェクト活動、業界コミュニティの広さ"
      ],
      thesisTitles: [
        "アニマドーレプロジェクトのCMSを用いたレポートページ並びに公式サイト制作－高校生向けCMSの開発と公式サイトリニューアル－",
        "WordPress 教材の制作並びにe ラーニングサイト「ナラえる」の制作",
        "江別市在住外国人のゴミ分別実態調査と改善策提案－UX デザインのフレームワークを活用した動画制作－",
        "9 面ディスプレイ映像作品「Rhuzerv」の制作－インスタレーションを用いたミュージックビデオの制作－",
        "アリーナスケールのVR ゲーム『Fantasy Arena』の制作と公式サイトの制作－Photon によるプレイヤーの位置座標同期による複数人参加型VR ゲームの開発－"
      ],
      worksImages: [
        "worksimages/010 - 安田光孝.png",
        "worksimages/020 - 安田光孝.jpg",
        "worksimages/030 - 安田光孝.png",
        "worksimages/040 - 安田光孝.png",
        "worksimages/050 - 安田光孝.png",
        "worksimages/060 - 安田光孝.png",
        "worksimages/070 - 安田光孝.png",
        "worksimages/080 - 安田光孝.jpg",
        "worksimages/090 - 安田光孝.jpg",
        "worksimages/100 - 安田光孝.jpeg",],
      barData: {
        "場所別活動比重": [10, 90],
        "個人・団体の活動比重": [0, 100],
        "制作・研究比重": [80, 20]
      }
    },
    {
      id: 30,
      name: "湯村",
      profile: "profile/プロフ-yumura - 湯村翼.png",
      description: "ゼミ活動や研究活動を通じて技術力、着地力、発信力を身に付ける。",
      image: "images/yumulab合宿 - 湯村翼.jpg",
      activity: "物理空間とサイバー空間のヒトやモノをつなげる空間インタラクション研究",
      research: "学会発表できる新規性のある研究をやり遂げる。そのため全力でサポートします。",
      extracurricular: "開発合宿、蒼天祭出展、卒業研究展、新歓、追いコンなど",
      reason: [
        "やりたい研究ができる環境があり、スキルアップゼミでスキルアップができると考えたため",
        "もともと何かを作ることが好きで、ゼミに求めていたことと一致していたから"
      ],
      thesisTitles: [
        "ｳｯﾄﾞｽﾀｯｸﾁｬﾝ：木材を用いた小型エージェントロボットの開発と印象評価",
        "チャッドローン：LLMによる画像認識を用いた自律飛行ドローンシステムの開発と実験",
        "NOVVS：北海道情報大学図書館における滞在人数可視化システムの開発と検証",
        "サウナでのプロジェクションマッピングの可能性の検討",
        "Jadwelry：フィンガーブレスレット型疲労通知デバイスの開発"
      ],
      worksImages: [
        "worksimages/sauna - 湯村翼.jpg",
        "worksimages/woodstack-chan - 湯村翼.jpg"],
      barData: {
        "場所別活動比重": [60, 40],
        "個人・団体の活動比重": [60, 40],
        "制作・研究比重": [80, 20]
      }
    },
    {
      id: 31,
      name: "綿谷",
      profile: "profile/ゼミプロフ帳テンプレート_綿谷貴志.png",
      description: "自主性・探求心・計画性",
      image: "images/unnamed (1) - 綿谷貴志.jpg",
      activity: "スポーツ科学に関する知識を深めるとともに，自身が興味あるスポーツについて，実験を行うことで新たな発見を目指す．",
      research: "「スポーツを科学してみたい」というテーマのもと，卒業研究ついては自主性を重んじる方針",
      reason: [
        "スポーツについて科学的視点から深く知りたいと思ったから",
        "自分が行っているスポーツについて，パフォーマンス向上につながる新たな知見を発見したいから"
      ],
      thesisTitles: [
        "軟式野球選手の各種体力要素と球速および回転数との関係",
        "軟式野球におけるバレルゾーンの解明",
        "ドッジボールにおける助走距離と球速との関係",
        "サッカーにおける助走角度と球速との関係",
        "剣道の素振りにおける動作チェックシートの開発"
      ],
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [50, 50],
        "制作・研究比重": [0, 100]
      }
    },
  ];

  const selectedCard = zemiData.find(c => c.id === cardId); // cardsDatas を zemiData に変更
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
    zemiData.forEach((card, index) =>
    { // cardsData を zemiData に変更
      // profile が存在しない場合は、リスト項目を生成せずにスキップ
      if (!card.profile)
      {
        return; // 次のカードへ
      }

      const li = document.createElement("li");
      li.classList.add("profile-item");
      li.dataset.index = index;
      li.textContent = `${card.name}先生`;

      li.addEventListener("click", () =>
      {
        // クリック時に再度 profile の存在をチェックし、ない場合はモーダルを表示しない
        if (card.profile)
        {
          currentProfileIndex = index;
          showProfile();
          profileModal.style.display = "flex";
          profileList.style.display = "none";
        } else
        {
          // profile がない場合は、何もしない（モーダルも開かない）
          profileModal.style.display = "none"; // 念のためモーダルを非表示に保つ
        }
      });
      profileList.appendChild(li);
    });
  }

  function showProfile()
  {
    const profile = zemiData[currentProfileIndex]; // cardsData を zemiData に変更

    // profile または profile.profile が存在しない場合は、モーダルを閉じ、処理を終了
    if (!profile || !profile.profile)
    {
      profileModal.style.display = "none";
      return;
    }

    profileTitle.textContent = profile.name + " 先生";
    profileImage.src = profile.profile;
    prevProfile.style.display = currentProfileIndex === 0 ? "none" : "block";
    nextProfile.style.display = currentProfileIndex === zemiData.length - 1 ? "none" : "block"; // cardsData を zemiData に変更
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
    let newIndex = currentProfileIndex - 1;
    // profile が存在する先生が見つかるまで遡る
    while (newIndex >= 0 && !zemiData[newIndex].profile)
    { // cardsData を zemiData に変更
      newIndex--;
    }
    if (newIndex >= 0)
    {
      currentProfileIndex = newIndex;
      showProfile();
    }
  });

  nextProfile.addEventListener("click", () =>
  {
    let newIndex = currentProfileIndex + 1;
    // profile が存在する先生が見つかるまで進む
    while (newIndex < zemiData.length && !zemiData[newIndex].profile)
    { // cardsData を zemiData に変更
      newIndex++;
    }
    if (newIndex < zemiData.length)
    {
      currentProfileIndex = newIndex;
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
    // detail.html を直接開いている場合は isComparison は false
    const isComparisonMode = false;
    mainElement.innerHTML = `
        <div class="chart-card">
            <h2>ゼミ比較グラフ</h2>
            <canvas id="comparisonChart"></canvas>
            <div class="chart-legend">
                <p><strong>左側：</strong>校内活動 / 個人作業 / 制作</p>
                <p><strong>右側：</strong>校外活動 / 団体作業 / 研究</p>
            </div>
            <div class="comparison-dropdown">
                <select id="comparison-select">
                    <option value="">比較するゼミを選択（1件まで）</option>
                    ${zemiData.filter(c => c.id !== selectedCard.id) // cardsDatas を zemiData に変更
        .map(c => `<option value="${c.id}">${c.name}ゼミ</option>`)
        .join("")}
                </select>
                <button id="compare-submit">比較する</button>
            </div>
        </div>

        <div class="individual-cards" id="individual-cards">
            ${generateZemiCardHtml(selectedCard, isComparisonMode)} </div>
    `;

    setupGalleryForCard(selectedCard);

    let comparisonChart = createComparisonChart("comparisonChart", [selectedCard]);
    let compared = [selectedCard];

    document.querySelectorAll(".favorite-btn").forEach(button =>
    {
      button.addEventListener("click", () => toggleFavorite(button.dataset.id));
    });

    // 比較選択リストからゼミを削除する関数
    function removeZemiFromComparisonSelect(zemiId)
    {
      const selectElement = document.getElementById("comparison-select");
      const optionToRemove = selectElement.querySelector(`option[value="${zemiId}"]`);
      if (optionToRemove)
      {
        optionToRemove.remove();
      }
    }

    // 比較選択リストにゼミを追加する関数
    function addZemiToComparisonSelect(zemi)
    {
      const selectElement = document.getElementById("comparison-select");
      const option = document.createElement("option");
      option.value = zemi.id;
      option.textContent = zemi.name + "ゼミ";

      let inserted = false;
      for (let i = 0; i < selectElement.options.length; i++)
      {
        const existingOptionId = parseInt(selectElement.options[i].value, 10);
        if (zemi.id < existingOptionId)
        {
          selectElement.insertBefore(option, selectElement.options[i]);
          inserted = true;
          break;
        }
      }
      if (!inserted)
      {
        selectElement.appendChild(option); // 最後に追加
      }
    }

    // ====== 既存のイベントリスナーの修正 ======

    document.getElementById("compare-submit").addEventListener("click", () =>
    {
      const selectedId = parseInt(document.getElementById("comparison-select").value, 10);
      if (!selectedId) return alert("ゼミを選択してください。");

      const newComparedZemi = zemiData.find(z => z.id === selectedId); // zemiData に変更
      if (!newComparedZemi) return alert("選択されたゼミが見つかりませんでした。");

      // 比較対象が2つ（オリジナルと既存の比較ゼミ）ある場合、既存の比較ゼミを削除
      if (compared.length === 2)
      {
        const existingComparedZemi = compared[1]; // 2つ目の要素が既存の比較ゼミ

        // DOMから既存のカードをスムーズに除去
        const existingCardElement = document.getElementById(`description-card-${existingComparedZemi.id}`);
        if (existingCardElement)
        {
          existingCardElement.remove();
        }

        compared.pop(); // 配列から既存の比較ゼミを削除
        addZemiToComparisonSelect(existingComparedZemi); // 比較対象から外れたゼミをセレクトボックスに戻す
      }

      // 新しい比較対象ゼミを追加
      compared.push(newComparedZemi);

      const container = document.getElementById("individual-cards");
      // 新しい比較ゼミのカードを挿入
      // スムーズなアニメーションを考慮する場合、新しいカードもCSSでフェードインなど設定可能
      container.insertAdjacentHTML("beforeend", generateZemiCardHtml(newComparedZemi, true));

      // スライダー初期化
      setupGalleryForCard(newComparedZemi);

      // 既存のチャートを破棄して新しいチャートを作成
      if (comparisonChart)
      {
        comparisonChart.destroy();
      }
      comparisonChart = createComparisonChart("comparisonChart", compared);

      // 選択されたゼミを比較選択リストから削除
      removeZemiFromComparisonSelect(selectedId);


      // お気に入りボタンと削除ボタンのイベントリスナーを再設定
      // (新しいカードが追加されたため、それらにも適用されるように)
      document.querySelectorAll(".favorite-btn").forEach(button =>
      {
        button.addEventListener("click", () => toggleFavorite(button.dataset.id));
      });

      document.querySelectorAll(".delete-button").forEach(button =>
      {
        button.addEventListener("click", () =>
        {
          const deleteId = parseInt(button.dataset.id);
          const deletedZemi = zemiData.find(z => z.id === deleteId); // 削除対象のゼミデータを取得 // zemiData に変更

          // DOMから削除
          const cardToRemove = document.getElementById(`description-card-${deleteId}`);
          if (cardToRemove)
          {
            cardToRemove.remove();
          }

          compared = compared.filter(c => c.id !== deleteId); // 配列から削除
          if (comparisonChart)
          {
            comparisonChart.destroy();
          }
          comparisonChart = createComparisonChart("comparisonChart", compared);

          // 削除されたゼミを比較選択リストに戻す
          if (deletedZemi)
          {
            addZemiToComparisonSelect(deletedZemi);
          }
        });
      });
    });
  } else
  {
    // カードデータが見つからない場合の処理 (detail.html が直接開かれた場合)
    // main 要素を完全に非表示にする
    mainElement.classList.add('fully-hidden');
    // あるいは、エラーメッセージを表示
    const container = document.querySelector('body');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = '指定されたゼミは見つかりませんでした。';
    errorMessage.style.textAlign = 'center';
    errorMessage.style.marginTop = '50px';
    container.appendChild(errorMessage);
  }

  function generateZemiCardHtml(card, isComparison = false)
  {
    const isLoggedIn = localStorage.getItem("currentUser") !== null;
    const currentUser = localStorage.getItem("currentUser");
    const favoriteList = currentUser ?
      JSON.parse(localStorage.getItem(`favorites_${currentUser}`) || "[]") :
      JSON.parse(localStorage.getItem("favorites") || "[]");
    const isFavorite = favoriteList.includes(card.id);
    const hiddenClass = "fully-hidden";
    const placeholderText = ""; // 常に空文字列

    let activityHtml = '';
    let researchHtml = '';
    let thesisTitlesContentHtml = '';
    let worksImagesContentHtml = '';
    let extracurricularHtml = '';
    let reasonHtml = '';
    let worksThesisSectionHeadingHtml = '';
    let descriptionHtml = ''; // Added for the description section

    // ゼミでの活動内容
    if (card.activity)
    {
      activityHtml = `
      <h4>ゼミでの活動内容</h4>
      <p>${card.activity}</p>
    `;
    } else
    {
      activityHtml = `
      <h4 class="${hiddenClass}">ゼミでの活動内容</h4>
      <p class="${hiddenClass}">${placeholderText}</p>
    `;
    }

    // 卒研の詳細・理念
    if (card.research)
    {
      researchHtml = `
      <h4>卒研の理念</h4>
      <p>${card.research}</p>
    `;
    } else
    {
      researchHtml = `
      <h4 class="${hiddenClass}">卒研の理念</h4>
      <p class="${hiddenClass}">${placeholderText}</p>
    `;
    }

    // ゼミ生の卒論・作品セクションのタイトルとコンテンツの生成
    const hasThesisTitles = card.thesisTitles && card.thesisTitles.length > 0;
    const hasWorksImages = card.worksImages && card.worksImages.length > 0;

    if (hasThesisTitles || hasWorksImages)
    {
      worksThesisSectionHeadingHtml = `<h4>ゼミ生の卒論・作品</h4>`;
    } else
    {
      worksThesisSectionHeadingHtml = `<h4 class="${hiddenClass}">ゼミ生の卒論・作品</h4>`;
    }

    // 卒論リストの中身
    if (hasThesisTitles)
    {
      thesisTitlesContentHtml = `
      <div class="thesis-list-container" style="display: flex; justify-content: center;">
        <div style="text-align: left;">
          ${card.thesisTitles.slice(0, 5).map(title => `<div>${title}</div>`).join("")}
        </div>
      </div>
    `;
    } else
    {
      thesisTitlesContentHtml = `
      <div class="thesis-list-container ${hiddenClass}" style="display: flex; justify-content: center;">
        <p style="text-align: left;">${placeholderText}</p>
      </div>
    `;
    }

    // 作品ギャラリーの中身
    if (hasWorksImages)
    {
      worksImagesContentHtml = `
      <div id="works-gallery-${card.id}" class="works-gallery">
        <button class="gallery-btn" id="prev-slide-${card.id}">◀</button>
        <img id="current-work-image-${card.id}" class="gallery-image" src="${card.worksImages[0]}" alt="作品画像">
        <button class="gallery-btn" id="next-slide-${card.id}">▶</button>
      </div>
    `;
    } else
    {
      worksImagesContentHtml = `
      <div id="works-gallery-${card.id}" class="works-gallery ${hiddenClass}">
         <p class="gallery-placeholder" style="text-align:center; width:100%;">
             ${placeholderText}
         </p>
      </div>
    `;
    }

    // 過去の課外活動
    if (card.extracurricular)
    {
      extracurricularHtml = `
      <h4>過去の課外活動</h4>
      <p>${card.extracurricular}</p>
    `;
    } else
    {
      extracurricularHtml = `
      <h4 class="${hiddenClass}">過去の課外活動</h4>
      <p class="${hiddenClass}">${placeholderText}</p>
    `;
    }

    // ゼミを志望した理由
    const hasReason = Array.isArray(card.reason) ? card.reason.some(r => r && r.trim() !== '') : (card.reason && card.reason.trim() !== '');

    if (hasReason)
    {
      const reasonText = Array.isArray(card.reason) ?
        card.reason.map((r, index) =>
        {
          const yearSuffix = index === 0 ? '（3年）' : index === 1 ? '（4年）' : '';
          return `${r}${yearSuffix}`;
        }).join('\n') :
        (card.reason || "");

      reasonHtml = `
      <h4 style="margin-bottom: 0;">ゼミを志望した理由</h4>
      <p style="white-space: pre-wrap; margin-top: 0;">
          ${reasonText}
      </p>
    `;
    } else
    {
      reasonHtml = `
      <h4 class="${hiddenClass}" style="margin-bottom: 0;">ゼミを志望した理由</h4>
      <p class="${hiddenClass}" style="white-space: pre-wrap; margin-top: 0;">${placeholderText}</p>
    `;
    }

    // 何に重点をおいたゼミか
    if (card.description)
    {
      descriptionHtml = `
      <h4>何に重点をおいたゼミか</h4>
      <p>${card.description}</p>
    `;
    } else
    {
      descriptionHtml = `
      <h4 class="${hiddenClass}">何に重点をおいたゼミか</h4>
      <p class="${hiddenClass}">${placeholderText}</p>
    `;
    }


    return `
    <div class="individual-card" id="description-card-${card.id}" data-id="${card.id}">
      ${isLoggedIn ? `<button class="favorite-btn ${isFavorite ? 'favorited' : ''}" data-id="${card.id}" title="お気に入りに追加/解除">★</button>` : ""}
      ${(isComparison && card.id !== cardId) ? `<button class="delete-button" data-id="${card.id}">×</button>` : ""}
      <h3>${card.name}ゼミ</h3>
      <img src="${card.image}" alt="${card.name}ゼミ" class="detail-image">
      ${descriptionHtml}
      <div class="zemi-detail">
        ${activityHtml}
        ${researchHtml}
        ${worksThesisSectionHeadingHtml}
        ${thesisTitlesContentHtml}
        ${worksImagesContentHtml}
        ${extracurricularHtml}
        ${reasonHtml}
      </div>
    </div>
  `;
  }


  function toggleFavorite(cardId)
  {
    const currentUser = localStorage.getItem("currentUser");
    let favorites = currentUser ?
      JSON.parse(localStorage.getItem(`favorites_${currentUser}`) || "[]") :
      JSON.parse(localStorage.getItem("favorites") || "[]");

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
    const cardData = zemiData.find(c => c.id == cardId);
    const cardElement = document.getElementById(`description-card-${cardId}`);
    const isComparison = cardElement && cardElement.parentNode.id === 'individual-cards' && cardElement.parentNode.children.length > 1;


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

    const leftDescriptors = ["校内活動", "個人作業", "制作"];
    const rightDescriptors = ["校外活動", "団体作業", "研究"];

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


});
