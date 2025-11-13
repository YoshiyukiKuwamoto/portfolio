document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.section-button');
    const sections = document.querySelectorAll('section:not(#fv)');
    const header = document.querySelector('header');
    const mainContent = document.querySelector('main');
    const particleContainer = document.getElementById('particle-container');
    const pageTopBtn = document.getElementById('page-top-btn');
    const topPanel = document.querySelector('.fv-panel.top');
    const middlePanel = document.querySelector('.fv-panel.middle');
    const bottomPanel = document.querySelector('.fv-panel.bottom');
    const outerCircle = document.querySelector('.circle-text.outer');
    const innerCircle = document.querySelector('.circle-text.inner');
    const workModal = document.getElementById('work-modal');
    const modalCloseButton = document.querySelector('.modal-close-button');
    const modalImage = document.getElementById('modal-image');
    const modalThumbnailNav = document.getElementById('modal-thumbnail-nav');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalInfo = document.getElementById('modal-info');
    const modalLink = document.getElementById('modal-link');

    const works = {
        "my-portfolio": {
            type: "image",
            category: "web-coding",
            title: "ポートフォリオサイト",
            description: "自身のWeb制作スキルを総合的に示すため、企画・制作したポートフォリオサイトです。ローディング画面や作品一覧のフィルター機能など、JavaScriptを活用したインタラクティブな表現に挑戦しました。",
            info: [
                "制作開始時期: 2025年7月",
                "ターゲット: 採用担当者",
                "使用ツール: HTML, CSS, JavaScript",
                "制作期間: 約1ヶ月",
                "意図としたデザイン: シンプルで使いやすいUIと、訪問者を惹きつける動的な表現の両立を目指しました。特に、ローディング画面からメインコンテンツへのスムーズな遷移や、作品の情報を整理するための機能設計に注力しました。",
                "得られた学び: 独学で習得した技術を組み合わせることで、アイデアを形にする楽しさと、ユーザーエクスペリエンス（UX）を考慮した実装の重要性を再認識しました。"
            ],
            link: "",
            images: ["image/portfoliopic.png"],
        },
        "zemi-site": {
            type: "image",
            category: "web-coding",
            title: "ゼミ紹介サイト",
            description: "5人グループで制作した、本学の情報メディア学部ゼミの魅力を1,2年生に伝えるためのウェブサイトです。チームの一員として、主にグループの進行管理やUI/UX設計、コーディングを担当しました。",
            info: [
                "制作開始時期: 2025年1月",
                "製作講義: プロジェクト・トライアルI,プロジェクト・トライアルII",
                "ターゲット: 本学の情報メディア学部の1,2年生",
                "使用ツール: HTML, CSS, JavaScript",
                "制作期間: 約240日",
                "公開日未定",
                "意図としたデザイン: 大学のゼミの魅力を新入生に伝えるという目的をたて、ゼミ選びに悩む学生の視点に立ち、「ゼミの活動風景」や「活動内容」といったコンテンツを重視。情報を整理し、直感的に比較できるよう、活動内容ごとのフィルタ機能やカード形式のレイアウトを設計しました。また遊び心として、先生方の知られざる魅力を知ることができるプロフィール帳の実装もしています。",
                "得られた学び: グループ制作における進捗管理、メンバーとの円滑なコミュニケーションの重要性を学び、チーム開発の経験を積むことができました。"
            ],
            link: "zemisite/index.html",
            images: [
                "image/スクリーンショット 2025-08-18 23.54.36.png",
                "image/スクリーンショット 2025-08-18 23.55.35.png",
                "image/スクリーンショット 2025-08-18 23.55.42.png",
                "image/スクリーンショット 2025-08-18 23.56.33.png",
                "image/スクリーンショット 2025-08-18 23.57.10.png",
                "image/スクリーンショット 2025-08-18 23.57.39.png",
            ],
        },
        "flyer-design": {
            featured: true,
            type: "image",
            category: "dtp-design",
            title: "フライヤーデザイン",
            description: "架空のロックバンド「Desteny Hopper」の1stライブ告知用フライヤーデザインです。バンドの世界観をビジュアルで表現し、集客を促すことを目的として制作しました。",
            info: [
                "サイズ: B6",
                "制作開始時期: 2025年7月",
                "製作講義: DTP",
                "ターゲット: バンドに興味がある人、フライヤーを受け取ってくれた人",
                "使用ツール: Adobe Illustrator, Adobe Photoshop",
                "制作期間: 約5時間",
                "意図としたデザイン: ライブの疾走感やエネルギーを表現するエフェクトやテクスチャを多用。ライブの雰囲気が伝わるような、迫力ある構図とタイポグラフィに挑戦しました。",
                "得られた学び: 既存のブランドイメージ（この場合は架空のバンド）を汲み取り、それをデザインに落とし込む重要性を学びました。"
            ],
            images: [
                "image/DTP_flyer_001_表_B6.png",
                "image/DTP_flyer_001_裏_B6.png"
            ],
        },
        "website-design-xd-aquarium": {
            type: "image",
            category: "web-design",
            title: "デザインカンプ（架空水族館）",
            description: "Figmaを用いて、架空の水族館「情報水族館」のウェブサイトデザインカンプを制作しました。非日常感と楽しさを両立させたUI/UXを意識しています。",
            info: [
                "制作開始時期: 2023年7月",
                "製作講義: Webデザイン基礎演習",
                "ターゲット: 家族連れ、カップル",
                "使用ツール: Figma",
                "制作期間: 約7時間",
                "意図としたデザイン: 「海の世界」をコンセプトに、明るい青色を基調としたカラーパレットと、南国をイメージしたフォントを使用。ターゲット層が直感的に楽しめるよう、アイコンや視覚的な楽しさを伝える要素を取り入れました。",
                "得られた学び: ターゲットの感情に訴えかける「コンセプト」がデザインの軸となること、そしてFigmaを用いた効率的なデザイン作成プロセスを習得しました。"
            ],
            images: ["image/07-01_s2321086.png"],
        },
        "fake-cafe-website-design": {
            type: "image",
            category: "web-design",
            title: "デザインカンプ（架空カフェ）",
            description: "Figmaで作成した、温かみのあるブランドイメージと快適な閲覧体験を表現したカフェのウェブサイトデザインカンプです。",
            info: [
                "制作開始時期: 2023年6月",
                "製作講義: Webデザイン基礎演習",
                "ターゲット: 20代後半から30代の猫またはカフェ愛好家",
                "使用ツール: Figma",
                "制作期間: 約8時間",
                "意図としたデザイン: 「温かさ」をコンセプトに、ブラウン系を基調とした配色を採用。来店を促すためのユーザー導線を考慮し、メニューや店舗情報へのアクセスをスムーズにするレイアウトを設計しました。",
                "得られた学び: 情報を整理し、ユーザーの行動を促すためのレイアウト設計の重要性を学びました。"
            ],
            images: ["image/06-02-s2321086.png"],
        },
        "character-design-work": {
            type: "image",
            category: "character-design",
            title: "キャラクターデザイン",
            description: "大学のオープンキャンパス向けに制作したオリジナルキャラクターです。学内のイベントで親しまれる存在となることを目指しました。",
            info: [
                "制作開始時期: 2025年5月",
                "製作講義: ゼミナールI",
                "キャラクターの説明: まだなにものにもなれる可能性を持つ高校生から想起し、てくてく歩いて自分なりの姿を描いていけるようにと考えたキャラクター。キャッチコピーは「つなぐ、まなぶ、てくてく未来。」",
                "モチーフ: AIテクノロジー＋江別市のれんが＋パラボラアンテナ",
                "想定ターゲット: 本学のオープンキャンパスに参加する高校生",
                "使用ツール:Adobe Illustrator",
                "制作期間: 約20時間",
                "意図としたデザイン: 未来への希望を表現する明るい色調をとり入れました。多様なポーズや表情での応用を考慮し、誰でも描きやすいシンプルさとデフォルメのバランスを意識しました。",
                "得られた学び: キャラクターデザインが、単なるイラストではなく、ブランドの顔として機能するための役割や、見る人に与える印象について深く考える機会となりました。"
            ],
            images: [
                "image/kyarafront.png",
                "image/kyaraback.png"
            ],
        },
        "poster-design-work": {
            featured: true,
            type: "image",
            category: "dtp-design",
            title: "ポスターデザイン",
            description: "クリスマスシーズンに合わせた女性向けコスメ販促会の告知ポスターです。華やかさと商品の魅力を最大限に引き立て、購買意欲を喚起するデザインを目指しました。",
            info: [
                "制作開始時期: 2024年11月",
                "製作講義: 色彩・デザイン演習",
                "サイズ: A1",
                "ターゲット: 大切な人とクリスマスを過ごす予定の20代から40代の女性",
                "使用ツール: Adobe Photoshop、Power point",
                "制作期間: 約4時間",
                "意図としたデザイン: クリスマスとコスメのテーマを融合させ、女性が心を奪われるような、魅力的で洗練されたビジュアルを意識しました。寒色系の色彩や光沢感のある要素を取り入れ、ホリデーシーズンの特別感や品のある女性らしさを演出しています。",
                "得られた学び: ターゲットの購買意欲に直結するような、感情に訴えかけるビジュアル表現とキャッチコピーの重要性を学びました。"
            ],
            images: ["image/広告課題.jpg"],
        },
        "meisi1-design-work": {
            type: "image",
            category: "dtp-design",
            title: "名刺デザイン",
            description: "自身で製作したイラストを使用することで、自身の個性を表現し、会話のきっかけとなることを目指した個人制作の名刺デザインです。見る人に「この人ともっと話してみたい」と感じさせるようなデザインを意識しました。",
            info: [
                "サイズ: 55×91mm（一般的な名刺サイズ）",
                "製作開始時期: 2023年4月",
                "製作講義: ゼミナールI",
                "ターゲット: 名刺交換をする相手（特にイラストレーター）",
                "使用ツール: Adobe Illustrator, Clip Studio Paint",
                "制作期間: 約3時間",
                "意図としたデザイン: 表面はシンプルに情報を集約し、裏面には自身で制作したイラストを配置。親しみやすいタッチで個性を伝え、名刺交換という場面をより楽しい体験にすることを目指しました。",
                "得られた学び: 情報を伝えるだけでなく、コミュニケーションのツールとしてのデザインの役割を再認識しました。"
            ],
            images: [
                "image/meisi_front.jpg",
                "image/meisi_back.jpg"
            ],
        },

        "fake-banner-design-01": {
            type: "image",
            category: "web-design",
            title: "いちごスムージーのバナーデザイン",
            description: "架空のいちごスムージーの販促バナーです。商品の新鮮さと美味しさを伝え、20円引きクーポンでお得感を演出することで、ユーザーの購買行動を促すことを目指しました。",
            info: [
                "製作開始時期: 2025年6月",
                "ターゲット: 10代から20代の女性",
                "使用ツール: Adobe Photoshop",
                "制作期間: 約2時間",
                "意図としたデザイン: 商品のフレッシュさや甘さを伝えるため、瑞々しい写真と明るい色彩を使用しました。クーポンというお得な情報を視覚的に強調し、クリックしたくなるようなUI設計を心がけました。",
                "得られた学び: 限られたスペースで、最も伝えたい情報（ここでは商品とクーポン）を効果的に目立たせるための視覚的ヒエラルキーの設計を学びました。"
            ],
            images: [
                "image/banner_strawberry-smoothie_001.jpg",
            ],
        },

        "fake-banner-design-02": {
            featured: true,
            type: "image",
            category: "web-design",
            title: "洋服セールのバナーデザイン",
            description: "夏のアパレルセールを告知する架空のバナーです。夏らしい開放的な雰囲気と「最大80%オフ」というお得感を前面に出し、ユーザーの購買意欲を高めるデザインを目指しました。",
            info: [
                "製作開始時期: 2025年8月",
                "ターゲット: 20代から30代の男性",
                "使用ツール: Adobe Photoshop",
                "制作期間: 約2時間",
                "意図としたデザイン: 夏の青空や花々のモチーフを用いることで、季節感と軽快さを表現しました。セール情報である「MAX 80% OFF」を大きく配置し、ユーザーが瞬時にメリットを認識できるよう工夫しました。",
                "得られた学び: ターゲットの好むスタイルやブランドの世界観をデザインに反映させる重要性を学びました。"
            ],
            images: [
                "image/cloth_banner_001.jpg",
            ],
        },

        "fake-baachan-website-design": {
            type: "image",
            category: "web-design",
            title: "代行サービスサイトのデザインカンプ",
            description: "架空の暮らしの代行サービスサイトのデザインカンプです。ユーザーの不安を解消し、安心感と信頼性を提供することで利用を促すデザインを目指しました。",
            info: [
                "製作開始時期: 2023年7月",
                "製作講義: Webデザイン基礎演習",
                "ターゲット: 高齢者や、家事・雑務に時間を割けない多忙な世代",
                "使用ツール: Adobe Photoshop",
                "制作期間: 約2日",
                "意図としたデザイン: 明るく温かみのある配色と、親しみやすいイラストを多用することで、サービスへの心理的なハードルを下げることを意識しました。特に、サービス内容を分かりやすく整理し、ユーザーが迷わずに情報にたどり着けるような導線を設計しています。",
                "得られた学び: ターゲットの心理的なハードルを下げ、安心感を与えるためのデザインアプローチを学びました。UI/UX設計における、ユーザー視点での情報整理の重要性を再認識しました。"
            ],
            images: [
                "image/04-02_s2321086 (1).png",
                "image/05-02_s2321086.png",

            ],
        }
    };


    setupCategoryFilters();

    mainContent.classList.add('visible-content');
    document.body.style.overflow = '';

    const createParticle = () => {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 20 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `${-size}px`;

        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * duration;

        particle.style.animation = `floatUp ${duration}s ease-out ${delay}s infinite`;
        particleContainer.appendChild(particle);
    };

    let particleCount = 0;
    const MAX_PARTICLES = 50;
    const particleInterval = setInterval(() => {
        if (particleCount >= MAX_PARTICLES) {
            clearInterval(particleInterval);
            return;
        }
        createParticle();
        particleCount++;
    }, 200);

    const startPanelAnimations = () => {
        topPanel.classList.add('animate-right-to-left');
        middlePanel.classList.add('animate-left-to-right');
        bottomPanel.classList.add('animate-right-to-left');
    };
    startPanelAnimations();

    const startCircleAnimations = () => {
        if (outerCircle) outerCircle.classList.add('fade-in');
        setTimeout(() => { if (innerCircle) innerCircle.classList.add('fade-in'); }, 1000);
    };
    startCircleAnimations();

    const startHeaderTypingAnimation = () => {
        const typingElements = document.querySelectorAll('.section-button span');
        typingElements.forEach((span, index) => {
            const text = span.getAttribute('data-text');
            span.textContent = '';
            let i = 0;
            setTimeout(() => {
                const typing = setInterval(() => {
                    span.textContent += text[i];
                    i++;
                    if (i >= text.length) clearInterval(typing);
                }, 50);
            }, index * 200);
        });
    };
    startHeaderTypingAnimation();

    const observerOptions = {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
    };
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            let targetButtonSelector;
            if (id === "works" || id === "featured-works-section") {
                targetButtonSelector = '.section-button[href="#works"]';
            } else {
                targetButtonSelector = `.section-button[href="#${id}"]`;
            }
            const correspondingButton = document.querySelector(targetButtonSelector);
            if (entry.isIntersecting) {
                document.querySelectorAll(".section-button").forEach((btn) =>
                    btn.classList.remove("active")
                );
                correspondingButton?.classList.add("active");
            }
        });
    }, observerOptions);
    sections.forEach((section) => sectionObserver.observe(section));

    navButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - header.offsetHeight + 10,
                    behavior: "smooth",
                });
                navButtons.forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
            }
        });
    });

    function setupCategoryFilters() {
        const categoryItems = document.querySelectorAll(".category-item");
        const workItems = document.querySelectorAll(".work-item");

        categoryItems.forEach((categoryItem) => {
            categoryItem.addEventListener("click", () => {
                const selectedCategory = categoryItem.getAttribute("data-filter");
                categoryItems.forEach((item) => item.classList.remove("active"));
                categoryItem.classList.add("active");

                workItems.forEach((workItem) => {
                    const itemCategory = workItem.getAttribute("data-category");
                    if (selectedCategory === "all" || itemCategory === selectedCategory) {
                        workItem.style.display = "flex";
                        workItem.classList.remove("fade-in-up");
                        void workItem.offsetWidth;
                        workItem.classList.add("fade-in-up");
                    } else {
                        workItem.style.display = "none";
                        workItem.classList.remove("fade-in-up");
                    }
                });
            });
        });
    }
    setupCategoryFilters();


    document.querySelectorAll('.view-details-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const workId = button.dataset.id;
            const work = works[workId];
            if (!work) return;

            modalTitle.textContent = work.title;
            modalDescription.textContent = work.description;
            modalInfo.innerHTML = '';
            work.info.forEach(info => {
                const li = document.createElement('li');
                li.textContent = info;
                modalInfo.appendChild(li);
            });
            modalImage.src = work.images[0] || '';
            modalImage.style.display = 'block';

            modalThumbnailNav.innerHTML = '';
            if (work.images.length > 0) {
                work.images.forEach((src, i) => {
                    const thumb = document.createElement('img');
                    thumb.src = src;
                    thumb.classList.add('modal-thumbnail');
                    if (i === 0) thumb.classList.add('active');
                    thumb.addEventListener('click', () => {
                        modalImage.src = src;
                        document.querySelectorAll('.modal-thumbnail').forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                    });
                    modalThumbnailNav.appendChild(thumb);
                });
            }

            if (work.link) {
                modalLink.href = work.link;
                modalLink.textContent = 'サイトを見る';
                modalLink.classList.remove('hidden');
            } else {
                modalLink.href = '#';
                modalLink.textContent = '';
                modalLink.classList.add('hidden');
            }
            const modalImageContainer = document.querySelector('.modal-image-container');
            if (work.display_mode === "fit") {
                modalImageContainer.classList.add('fit');
            } else {
                modalImageContainer.classList.remove('fit');
            }

            workModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            resetModalTabs();
        });
    });

    const closeModal = () => {
        workModal.classList.remove('active');
        modalImage.src = '';
        modalThumbnailNav.innerHTML = '';
        modalLink.href = '#';
        modalLink.textContent = '';
        modalLink.classList.add('hidden');
        document.body.style.overflow = '';
    };

    const modalTabs = document.querySelectorAll(".modal-tab");
    const modalSections = document.querySelectorAll(".modal-section");

    modalTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            if (window.innerWidth > 768) return;

            modalTabs.forEach(t => t.classList.remove("active"));
            modalSections.forEach(sec => sec.classList.remove("active"));

            tab.classList.add("active");
            const targetId = tab.dataset.target;
            document.querySelector(`#modal-section-${targetId}`).classList.add("active");
        });
    });

    function resetModalTabs() {
        modalTabs.forEach(t => t.classList.remove("active"));
        modalSections.forEach(sec => sec.classList.remove("active"));
        document.querySelector('.modal-tab[data-target="image"]')?.classList.add("active");
        document.querySelector('#modal-section-image')?.classList.add("active");
    }


    modalCloseButton.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === workModal) {
            closeModal();
        }
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            pageTopBtn.classList.add('show');
        } else {
            pageTopBtn.classList.remove('show');
        }
    });

    pageTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const featuredContainer = document.getElementById('featured-works');

    // worksオブジェクトからfeatured:trueの作品だけを抽出して表示
    Object.entries(works)
        .filter(([id, work]) => work.featured)
        .forEach(([id, work]) => {
            const div = document.createElement('div');
            div.classList.add('featured-work-item');

            const img = document.createElement('img');
            img.src = work.images[0];
            img.alt = work.title;

            const title = document.createElement('h3');
            title.textContent = work.title;

            const desc = document.createElement('p');
            desc.textContent = work.description;

            const btn = document.createElement('button');
            btn.textContent = '詳しく見る';
            btn.classList.add('view-details-button');
            btn.dataset.id = id;

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const workId = btn.dataset.id;
                const workData = works[workId];

                modalTitle.textContent = workData.title;
                modalDescription.textContent = workData.description;
                modalInfo.innerHTML = '';
                workData.info.forEach(info => {
                    const li = document.createElement('li');
                    li.textContent = info;
                    modalInfo.appendChild(li);
                });
                modalImage.src = workData.images[0] || '';
                modalImage.style.display = 'block';

                modalThumbnailNav.innerHTML = '';
                if (workData.images.length > 0) {
                    workData.images.forEach((src, i) => {
                        const thumb = document.createElement('img');
                        thumb.src = src;
                        thumb.classList.add('modal-thumbnail');
                        if (i === 0) thumb.classList.add('active');
                        thumb.addEventListener('click', () => {
                            modalImage.src = src;
                            document.querySelectorAll('.modal-thumbnail').forEach(t => t.classList.remove('active'));
                            thumb.classList.add('active');
                        });
                        modalThumbnailNav.appendChild(thumb);
                    });
                }

                if (workData.link) {
                    modalLink.href = workData.link;
                    modalLink.textContent = 'サイトを見る';
                    modalLink.classList.remove('hidden');
                } else {
                    modalLink.classList.add('hidden');
                }

                workModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(desc);
            div.appendChild(btn);
            featuredContainer.appendChild(div);
        });
});