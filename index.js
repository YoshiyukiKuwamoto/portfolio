document.addEventListener('DOMContentLoaded', () =>
{
    const navLinks = document.querySelectorAll('nav a');
    const tapBtn = document.getElementById("tap-button");
    const loadingScreen = document.getElementById("loading-screen");

    const outerCircle = document.querySelector('.circle-text.outer');
    const innerCircle = document.querySelector('.circle-text.inner');

    const topPanel = document.querySelector('.loading-panel.top');
    const middlePanel = document.querySelector('.loading-panel.middle');
    const bottomPanel = document.querySelector('.loading-panel.bottom');

    const mainContent = document.querySelector('main');

    const particleContainer = document.getElementById('particle-container');
    const passwordOverlay = document.getElementById('password-overlay');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const passwordError = document.getElementById('password-error');
    const passwordContainer = document.querySelector('.password-container');
    let welcomeMessage = null;

    const CORRECT_PASSWORD = "Marumaru_portfolio";
    setupCategoryFilters();

    // サイトのメインコンテンツを初期状態で隠し、スクロールを無効化
    mainContent.classList.add('hidden-content');
    document.body.style.overflow = 'hidden';

    // パスワード入力フィールドがフォーカスされたらエラーメッセージとエラーボーダーを隠す
    passwordInput.addEventListener('focus', () =>
    {
        passwordError.classList.remove('visible');
        passwordError.textContent = '';
        passwordInput.classList.remove('error');
        passwordContainer.classList.remove('shake');
    });

    // パスワード送信処理
    const checkPassword = () =>
    {
        if (passwordInput.value === CORRECT_PASSWORD)
        {
            // パスワードが正しい場合、パスワードコンテナを非表示にする
            passwordContainer.style.display = 'none';

            // 「ようこそ！」メッセージを生成して表示
            welcomeMessage = document.createElement('p');
            welcomeMessage.classList.add('welcome-message');
            welcomeMessage.textContent = 'ようこそ！';
            // 既存のwelcomeMessageがあれば削除する
            if (passwordOverlay.querySelector('.welcome-message'))
            {
                passwordOverlay.querySelector('.welcome-message').remove();
            }
            // passwordOverlayの子要素として追加
            passwordOverlay.appendChild(welcomeMessage);


            // アニメーション後にオーバーレイを隠し、ローディング画面を開始
            setTimeout(() =>
            {
                passwordOverlay.classList.add('hidden');
                // ローディング画面のアニメーションを開始（ここではスクロール禁止を維持）
                initializeLoadingScreen();
            }, 1000);

        } else
        {
            // パスワードが間違っている場合、エラーメッセージを表示し、視覚的なフィードバックを与える
            passwordError.textContent = "パスワードが違います";
            passwordError.classList.add('visible');
            passwordInput.classList.add('error');
            passwordContainer.classList.add('shake');
            passwordInput.value = '';

            // アニメーション後にshakeクラスを削除し、次回の揺れを可能にする
            setTimeout(() =>
            {
                passwordContainer.classList.remove('shake');
            }, 300);
        }
    };

    passwordSubmit.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', (e) =>
    {
        if (e.key === 'Enter')
        {
            checkPassword();
        }
    });

    // 単一のパーティクルを作成する関数 (isBurstがtrueの場合、バースト用の速いアニメーション設定を適用)
    const createParticle = (isBurst = false) =>
    {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // ランダムなサイズを設定 (5pxから25px)
        const size = Math.random() * 20 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // ランダムな開始位置 (x軸) を設定
        particle.style.left = `${Math.random() * 100}%`;

        let duration;
        let delay;

        if (isBurst)
        {
            // バースト用の速いアニメーション設定
            duration = Math.random() * 1 + 0.6;
            delay = Math.random() * 0.1;
            particle.style.animationIterationCount = '1';
            particle.style.opacity = '1';
            particle.style.bottom = `${-size}px`;
        } else
        {
            // 通常の背景パーティクル設定
            duration = Math.random() * 3 + 2;
            delay = Math.random() * (duration - 1);
            particle.classList.add('background-particle');
            particle.style.animationIterationCount = 'infinite';
            particle.style.bottom = `${-size}px`;
        }

        particle.style.animationDuration = `${duration}s`;
        particle.style.animationName = 'floatUp';
        particle.style.animationTimingFunction = 'ease-out';
        particle.style.animationDelay = `${delay}s`;

        // パーティクルをコンテナに追加
        particleContainer.appendChild(particle);

        // アニメーション終了後にパーティクルをDOMから削除し、メモリを解放 (主にburst用)
        particle.addEventListener('animationend', () =>
        {
            if (isBurst)
            {
                particle.remove();
            }
        });
    };


    // ローディング画面のアニメーションを初期化する関数
    const initializeLoadingScreen = () =>
    {
        // ローディング画面を表示状態にする
        loadingScreen.classList.add('visible');
        // 初期パーティクル生成を有効化
        let particleInterval = setInterval(createParticle, 200);

        // PC表示の場合にTAPをCLICKに変更する
        const setButtonText = () =>
        {
            if (window.innerWidth > 480)
            {
                tapBtn.textContent = "CLICK";
            } else
            {
                tapBtn.textContent = "TAP";
            }
        };

        // 初期ロード時に設定し、ウィンドウのリサイズ時にも更新する
        setButtonText();
        window.addEventListener('resize', setButtonText);

        // ローディング画面の初期アニメーションを適用する関数
        const animateTextPanels = () =>
        {
            // パネルのアニメーションクラスを適用
            topPanel.classList.add('animate-right-to-left');
            middlePanel.classList.add('animate-left-to-right');
            bottomPanel.classList.add('animate-right-to-left');

            // 円のフェードインアニメーションを開始
            if (outerCircle) outerCircle.classList.add('fade-in');

            setTimeout(() =>
            {
                if (innerCircle) innerCircle.classList.add('fade-in');
            }, 1000);

            setTimeout(() =>
            {
                if (tapBtn) tapBtn.classList.add('fade-in');
            }, 2000);
        };

        // ローディング画面の初期アニメーションを開始
        animateTextPanels();

        // TAP/CLICKボタンクリック時の処理
        const handleTapClick = () =>
        {
            // ローディング画面をフェードアウトさせる
            loadingScreen.classList.add('fade-out');

            // パーティクルの生成を停止
            clearInterval(particleInterval);

            // 既存の背景パーティクルをフェードアウトさせる処理
            document.querySelectorAll('.background-particle').forEach(bgParticle =>
            {
                // 既存のアニメーションを停止し、現在の位置で固定
                const computedTransform = window.getComputedStyle(bgParticle).transform;
                bgParticle.style.animation = 'none';
                bgParticle.style.transform = computedTransform;

                // フェードアウトアニメーションを適用 (少し上に移動しながら消える効果)
                bgParticle.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
                bgParticle.style.opacity = '0';
                bgParticle.style.transform = `${computedTransform} translateY(-50px)`;

                // フェードアウト後、DOMから削除
                setTimeout(() =>
                {
                    bgParticle.remove();
                }, 1000);
            });

            // 大量のバブルを連続的に生成する処理 (バーストアニメーション)
            const totalBubbles = 500;
            const burstDuration = 500;
            const bubblesPerInterval = 5;
            let generatedBubbles = 0;

            const burstInterval = setInterval(() =>
            {
                for (let i = 0; i < bubblesPerInterval; i++)
                {
                    if (generatedBubbles < totalBubbles)
                    {
                        createParticle(true);
                        generatedBubbles++;
                    } else
                    {
                        clearInterval(burstInterval);
                        break;
                    }
                }
            }, burstDuration / (totalBubbles / bubblesPerInterval));


            // 円の要素を非表示にするアニメーション
            if (outerCircle) outerCircle.classList.add('reverse-circle-text');
            if (innerCircle) innerCircle.classList.add('reverse-circle-text');

            // パネルのアニメーションを逆再生
            topPanel.classList.add('reverse-panel-top');
            middlePanel.classList.add('reverse-panel-middle');
            bottomPanel.classList.add('reverse-panel-bottom');

            // SVGテキストアニメーションも逆再生
            const svgTexts = document.querySelectorAll('.loading-text-svg');
            svgTexts.forEach((text) =>
            {
                text.classList.add('reverse-text-animation');
            });

            // TAP/CLICKボタンをフェードアウト
            if (tapBtn) tapBtn.classList.add('fade-out');

            // アニメーション終了後にローディング画面を完全に非表示にし、メインコンテンツを表示
            setTimeout(() =>
            {
                loadingScreen.classList.add('hidden');
                loadingScreen.style.pointerEvents = 'none';
                document.body.style.overflow = ''; // スクロール禁止を解除
                mainContent.classList.remove('hidden-content');
                mainContent.classList.add('visible-content');

                // ヘッダーのタイピングアニメーションを開始
                startHeaderTypingAnimation();

            }, 700);
        };
        // TAP/CLICKボタンにイベントリスナーを設定
        tapBtn.addEventListener('click', handleTapClick);
    };

    // ヘッダーのタイピングアニメーション関連の関数
    const startHeaderTypingAnimation = () =>
    {
        const typingElements = document.querySelectorAll('.section-button span');
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;"\'<>,.?/~`';

        function getRandomChar()
        {
            return characters[Math.floor(Math.random() * characters.length)];
        }

        typingElements.forEach((span, index) =>
        {
            const fullText = span.getAttribute('data-text');
            const totalTypingDuration = 1000;
            const randomCharDisplayDuration = 500;

            const tempSpan = document.createElement('span');
            tempSpan.style.visibility = 'hidden';
            tempSpan.style.position = 'absolute';
            tempSpan.style.whiteSpace = 'nowrap';
            tempSpan.textContent = fullText;
            document.body.appendChild(tempSpan);
            const finalWidth = tempSpan.offsetWidth;
            document.body.removeChild(tempSpan);

            span.style.setProperty('--final-width', `${finalWidth}px`);
            span.style.setProperty('--typing-duration', `${totalTypingDuration / 1000}s`);
            span.style.setProperty('--char-count', fullText.length);

            let charIndex = 0;
            const typeIntervalSpeed = totalTypingDuration / fullText.length;

            setTimeout(() =>
            {
                span.innerHTML = '';
                const animationStartTime = Date.now();

                const typeAndRandomize = setInterval(() =>
                {
                    const elapsed = Date.now() - animationStartTime;

                    if (elapsed < randomCharDisplayDuration)
                    {
                        let currentHtml = '';
                        for (let i = 0; i < fullText.length; i++)
                        {
                            currentHtml += `<span style="opacity:0.7;">${getRandomChar()}</span>`;
                        }
                        span.innerHTML = currentHtml;
                    } else if (charIndex < fullText.length)
                    {
                        let typedPart = fullText.substring(0, charIndex + 1);
                        let randomPart = '';
                        for (let i = charIndex + 1; i < fullText.length; i++)
                        {
                            randomPart += `<span style="opacity:0.7;">${getRandomChar()}</span>`;
                        }
                        span.innerHTML = typedPart + randomPart;
                        charIndex++;
                    } else
                    {
                        clearInterval(typeAndRandomize);
                        span.textContent = fullText;
                        span.classList.add('typing-animation');
                        span.addEventListener('animationend', (e) =>
                        {
                            if (e.animationName === 'typing')
                            {
                                span.style.borderRightColor = 'transparent';
                            }
                        }, {
                            once: true
                        });
                    }
                }, typeIntervalSpeed / 2);
            }, index * 200);
        });
    }


    // スムーススクロール機能
    navLinks.forEach(link =>
    {
        link.addEventListener('click', (e) =>
        {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection)
            {
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Intersection Observerでセクションがビューポートに入ったらボタンをアクティブにする
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const sectionObserver = new IntersectionObserver((entries) =>
    {
        entries.forEach(entry =>
        {
            if (entry.isIntersecting)
            {
                const currentSectionId = entry.target.id;
                navLinks.forEach(link =>
                {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(currentSectionId))
                    {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section =>
    {
        sectionObserver.observe(section);
    });

    // ページロード時に最初のセクションをアクティブにする
    if (sections.length > 0)
    {
        navLinks.forEach(link =>
        {
            if (link.getAttribute('href').includes(sections[0].id))
            {
                link.classList.add('active');
            }
        });
    }

    // 別途DOMContentLoadedリスナー内でナビゲーションボタンのアクティブ状態を管理
    document.addEventListener('DOMContentLoaded', () =>
    {
        const sections = document.querySelectorAll('section');
        const navButtons = document.querySelectorAll('.section-button');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const sectionObserver = new IntersectionObserver((entries) =>
        {
            entries.forEach(entry =>
            {
                if (entry.isIntersecting)
                {
                    // すべてのボタンからactiveクラスを削除
                    navButtons.forEach(button => button.classList.remove('active'));

                    // 現在表示されているセクションに対応するボタンにactiveクラスを追加
                    const targetId = entry.target.id;
                    const correspondingButton = document.querySelector(`.section-button[href="#${targetId}"]`);
                    if (correspondingButton)
                    {
                        correspondingButton.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section =>
        {
            sectionObserver.observe(section);
        });

        // スクロール時に手動でアクティブクラスを更新するイベントリスナーを追加
        navButtons.forEach(button =>
        {
            button.addEventListener('click', function (e)
            {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection)
                {
                    // スムーズスクロール
                    window.scrollTo({
                        top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                        behavior: 'smooth'
                    });

                    // クリックされたボタンにactiveクラスを付与
                    navButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });
    });

    function setupCategoryFilters()
    {
        const categoryItems = document.querySelectorAll(".category-item");
        const workItems = document.querySelectorAll(".work-item");

        categoryItems.forEach((categoryItem) =>
        {
            categoryItem.addEventListener("click", () =>
            {
                const selectedCategory = categoryItem.getAttribute("data-filter");

                // activeクラス切り替え
                categoryItems.forEach((item) => item.classList.remove("active"));
                categoryItem.classList.add("active");

                // 各work-itemの表示制御
                workItems.forEach((workItem) =>
                {
                    const itemCategory = workItem.getAttribute("data-category");

                    if (selectedCategory === "all" || itemCategory === selectedCategory)
                    {
                        workItem.style.display = "flex";

                        // 再表示時にアニメーションクラスを一度削除して再付与（連打対策）
                        workItem.classList.remove("fade-in-up");
                        void workItem.offsetWidth; // 強制再描画（リセット）
                        workItem.classList.add("fade-in-up");

                    } else
                    {
                        workItem.style.display = "none";
                        workItem.classList.remove("fade-in-up");
                    }
                });
            });
        });
    }

    // モーダル関連のJavaScript
    const workModal = document.getElementById('work-modal');
    const modalCloseButton = document.querySelector('.modal-close-button');
    const modalImage = document.getElementById('modal-image');
    const modalThumbnailNav = document.getElementById('modal-thumbnail-nav');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalInfo = document.getElementById('modal-info');
    const modalLink = document.getElementById('modal-link');

    // 作品データ
    const works = {

        "my-portfolio": {
            type: "image",
            category: "web-coding",
            title: "ポートフォリオサイト",
            description: "自身のWeb制作スキルを総合的に示すため、企画・制作したポートフォリオサイトです。ローディング画面や作品一覧のフィルター機能など、JavaScriptを活用したインタラクティブな表現に挑戦しました。",
            info: [
                "制作開始時期: 2025.7",
                "ターゲット: 採用担当者",
                "使用ツール: HTML, CSS, JavaScript",
                "制作期間: 約1ヶ月",
                "意図としたデザイン: シンプルで使いやすいUIと、訪問者を惹きつける動的な表現の両立を目指しました。特に、ローディング画面からメインコンテンツへのスムーズな遷移や、作品の情報を整理するための機能設計に注力しました。",
                "得られた学び: 独学で習得した技術を組み合わせることで、アイデアを形にする楽しさと、ユーザーエクスペリエンス（UX）を考慮した実装の重要性を再認識しました。"
            ],
            link: "",
            images: ["image/portfoliopic.png"],
            display_mode: "fit"
        },
        "zemi-site": {
            type: "image",
            category: "web-coding",
            title: "ゼミ紹介サイト",
            description: "5人グループで制作した、本学の情報メディア学部ゼミの魅力を1,2年生に伝えるためのウェブサイトです。チームの一員として、主にグループの進行管理やUI/UX設計、コーディングを担当しました。",
            info: [
                "制作開始時期: 2025.1",
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
                "image/スクリーンショット 2025-08-18 23.57.44.png",
                "image/スクリーンショット 2025-08-18 23.57.44.png",
            ],
            display_mode: "fit"
        },
        "flyer-design": {
            type: "image",
            category: "dtp-design",
            title: "フライヤーデザイン",
            description: "架空のロックバンド「Desteny Hopper」の1stライブ告知用フライヤーデザインです。バンドの世界観をビジュアルで表現し、集客を促すことを目的として制作しました。",
            info: [
                "サイズ: B6",
                "制作開始時期: 2025.7",
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
            display_mode: "fit"
        },
        "website-design-xd-aquarium": {
            type: "image",
            category: "web-design",
            title: "デザインカンプ（架空水族館）",
            description: "Figmaを用いて、架空の水族館「Aqua Realm」のウェブサイトデザインカンプを制作しました。非日常感と楽しさを両立させたUI/UXを意識しています。",
            info: [
                "制作開始時期: 2023.7",
                "製作講義: Webデザイン基礎演習",
                "ターゲット: 家族連れ、カップル、サイト閲覧者",
                "使用ツール: Figma",
                "制作期間: 約7時間",
                "意図としたデザイン: 「海の世界」をコンセプトに、明るい青色を基調としたカラーパレットと、水滴をイメージしたUIエレメントを使用。ターゲット層が直感的に楽しめるよう、アイコンや視覚的な楽しさを伝える要素を取り入れました。",
                "得られた学び: ターゲットの感情に訴えかける「コンセプト」がデザインの軸となること、そしてFigmaを用いた効率的なデザイン作成プロセスを習得しました。"
            ],
            images: ["image/07-01_s2321086.png"],
            display_mode: "zoom"
        },
        "fake-cafe-website-design": {
            type: "image",
            category: "web-design",
            title: "デザインカンプ（架空カフェ）",
            description: "Figmaで作成した、温かみのあるブランドイメージと快適な閲覧体験を表現したカフェのウェブサイトデザインカンプです。",
            info: [
                "制作開始時期: 2023.6",
                "製作講義: Webデザイン基礎演習",
                "ターゲット: 20代後半から30代の猫またはカフェ愛好家",
                "使用ツール: Figma",
                "制作期間: 約8時間",
                "意図としたデザイン: 「温かさ」をコンセプトに、ブラウン系を基調とした配色を採用。来店を促すためのユーザー導線を考慮し、メニューや店舗情報へのアクセスをスムーズにするレイアウトを設計しました。",
                "得られた学び: 情報を整理し、ユーザーの行動を促すためのレイアウト設計の重要性を学びました。"
            ],
            images: ["image/06-02-s2321086.png"],
            display_mode: "zoom"
        },
        "character-design-work": {
            type: "image",
            category: "character-design",
            title: "キャラクターデザイン",
            description: "大学のオープンキャンパス向けに制作したオリジナルキャラクターです。学内のイベントで親しまれる存在となることを目指しました。",
            info: [
                "制作開始時期: 2025.5",
                "製作講義: ゼミナールI",
                "キャラクターの説明: まだなにものにもなれる可能性を持つ高校生から想起し、てくてく歩いて自分なりの姿を描いていけるようにと考えたキャラクター。キャッチコピーは「つなぐ、まなぶ、てくてく未来。」",
                "モチーフ: AIテクノロジー＋江別市のれんが＋情報科学",
                "想定ターゲット: 本学のオープンキャンパスに参加する高校生",
                "使用ツール:Adobe Illustrator",
                "制作期間: 約20日",
                "意図としたデザイン: 未来への希望を表現する明るい色調を盛り込みました。多様なポーズや表情での応用を考慮し、誰でも描きやすいシンプルさとデフォルメのバランスを意識しました。",
                "得られた学び: キャラクターデザインが、単なるイラストではなく、ブランドの顔として機能するための役割や、見る人に与える印象について深く考える機会となりました。"
            ],
            images: [
                "image/kyarafront.png",
                "image/kyaraback.png"
            ],
            display_mode: "fit"
        },
        "poster-design-work": {
            type: "image",
            category: "dtp-design",
            title: "ポスターデザイン",
            description: "クリスマスシーズンに合わせた女性向けコスメ販促会の告知ポスターです。華やかさと商品の魅力を最大限に引き立て、購買意欲を喚起するデザインを目指しました。",
            info: [
                "制作開始時期: 2024.11",
                "製作講義: 色彩・デザイン演習",
                "サイズ: A1サイズ",
                "ターゲット: 大切な人とクリスマスを過ごす予定の20代から40代の女性",
                "使用ツール: Adobe Photoshop、Power point",
                "制作期間: 約4時間",
                "意図としたデザイン: クリスマスとコスメのテーマを融合させ、女性が心を奪われるような、魅力的で洗練されたビジュアルを意識しました。寒色系の色彩や光沢感のある要素を取り入れ、ホリデーシーズンの特別感や品のある女性らしさを演出しています。",
                "得られた学び: ターゲットの購買意欲に直結するような、感情に訴えかけるビジュアル表現の重要性を学びました。"
            ],
            images: ["image/広告課題.jpg"],
            display_mode: "fit"
        },
        "meisi1-design-work": {
            type: "image",
            category: "dtp-design",
            title: "名刺デザイン",
            description: "私が製作したイラストを使用することで、自身の個性を表現し、会話のきっかけとなることを目指した個人制作の名刺デザインです。見る人に「この人ともっと話してみたい」と感じさせるようなデザインを意識しました。",
            info: [
                "サイズ: 55×91mm（一般的な名刺サイズ）",
                "製作開始時期: 2023.4",
                "製作講義: ゼミナールI",
                "ターゲット: 名刺交換をする相手（特にクリエイターや採用担当者）",
                "使用ツール: Adobe Illustrator, Clip Studio Paint",
                "制作期間: 約2時間",
                "意図としたデザイン: 表面はシンプルに情報を集約し、裏面には自身で制作したイラストを配置。親しみやすいタッチで個性を伝え、名刺交換という場面をより楽しい体験にすることを目指しました。",
                "得られた学び: 情報を伝えるだけでなく、コミュニケーションのツールとしてのデザインの役割を再認識しました。"
            ],
            images: [
                "image/meisi_front.jpg",
                "image/meisi_back.jpg"
            ],
            display_mode: "fit"
        },

        "fake-banner-design-01": {
            type: "image",
            category: "web-design",
            title: "いちごスムージーのバナーデザイン",
            description: "架空のいちごスムージーの販促バナーです。商品の新鮮さと美味しさを伝え、20円引きクーポンでお得感を演出することで、ユーザーの購買行動を促すことを目指しました。",
            info: [
                "製作開始時期: 2025.6",
                "ターゲット: 10代から20代の女性",
                "使用ツール: Adobe Photoshop",
                "制作期間: 約2時間",
                "意図としたデザイン: 商品のフレッシュさや甘さを伝えるため、瑞々しい写真と明るい色彩を使用。クーポンというお得な情報を視覚的に強調し、クリックしたくなるようなUI設計を心がけました。",
                "得られた学び: 限られたスペースで、最も伝えたい情報（ここでは商品とクーポン）を効果的に目立たせるための視覚的ヒエラルキーの設計を学びました。"
            ],
            images: [
                "image/banner_strawberry-smoothie_001.jpg",
            ],
            display_mode: "fit"
        },

        "fake-banner-design-02": {
            type: "image",
            category: "web-design",
            title: "アパレルセールのバナーデザイン",
            description: "夏のアパレルセールを告知する架空のバナーです。夏らしい開放的な雰囲気と「最大80%オフ」というお得感を前面に出し、ユーザーの購買意欲を高めるデザインを目指しました。",
            info: [
                "製作開始時期: 2025.8",
                "ターゲット: 20代から30代の男性",
                "使用ツール: Adobe Photoshop",
                "制作期間: 約2時間",
                "意図としたデザイン: 夏の青空や花々のモチーフを用いることで、季節感と軽快さを表現しました。セール情報である「MAX 80% OFF」を大きく配置し、ユーザーが瞬時にメリットを認識できるよう工夫しました。",
                "得られた学び: ターゲットの好むスタイルやブランドの世界観をデザインに反映させる重要性を学びました。"
            ],
            images: [
                "image/cloth_banner_001.jpg",
            ],
            display_mode: "fit"
        },

        "fake-baachan-website-design": {
            type: "image",
            category: "web-design",
            title: "代行サービスサイトのデザインカンプ",
            description: "架空の暮らしの代行サービスサイトのデザインカンプです。ユーザーの不安を解消し、安心感と信頼性を提供することで利用を促すデザインを目指しました。",
            info: [
                "製作開始時期: 2023.7",
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
            display_mode: "fit"
        },

        "package-design": {
            type: "image",
            category: "dtp-design",
            title: "包装紙デザイン",
            description: "贈る喜びを演出する、オリジナル包装紙のデザインです。ギフト商品の付加価値を高めることを目的として制作しました。",
            info: [
                "サイズ: A3サイズ",
                "製作開始時期: 2025.7",
                "製作講義: ゼミナールI",
                "ターゲット: ファッション・雑貨店の顧客",
                "使用ツール: Adobe Illustrator",
                "制作期間: 約3時間",
                "意図としたデザイン: どんな商品にも合わせやすいように、シンプルながらも洗練された模様を意識しました。ブランドのロゴと組み合わせることで、高級感と個性を両立させ、受け取った人が思わずSNSにアップしたくなるようなデザインを目指しました。",
                "得られた学び: パッケージデザインが持つ、商品の価値を高める役割と、ブランドイメージを統一することの重要性を学びました。"
            ],
            images: [
                "image/housousi.png",
            ],
            display_mode: "fit"
        }
    };



    // 詳細表示ボタンクリック時の処理
    document.querySelectorAll('.view-details-button').forEach(button =>
    {
        button.addEventListener('click', (e) =>
        {
            e.stopPropagation();
            const workId = button.dataset.id;
            const work = works[workId];
            if (!work) return;

            // モーダルに作品情報を設定
            modalTitle.textContent = work.title;
            modalDescription.textContent = work.description;
            modalInfo.innerHTML = '';
            work.info.forEach(info =>
            {
                const li = document.createElement('li');
                li.textContent = info;
                modalInfo.appendChild(li);
            });
            modalImage.src = work.images[0] || '';
            modalImage.style.display = 'block';

            // サムネイルナビゲーションを設定
            modalThumbnailNav.innerHTML = '';
            if (work.images.length > 0)
            {
                work.images.forEach((src, i) =>
                {
                    const thumb = document.createElement('img');
                    thumb.src = src;
                    thumb.classList.add('modal-thumbnail');
                    if (i === 0) thumb.classList.add('active');
                    thumb.addEventListener('click', () =>
                    {
                        modalImage.src = src;
                        document.querySelectorAll('.modal-thumbnail').forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                    });
                    modalThumbnailNav.appendChild(thumb);
                });
            }

            // リンクの表示/非表示を切り替える
            if (work.link)
            {
                modalLink.href = work.link;
                modalLink.textContent = 'サイトを見る';
                modalLink.classList.remove('hidden');
            } else
            {
                modalLink.href = '#';
                modalLink.textContent = '';
                modalLink.classList.add('hidden');
            }

            // 作品の表示モードに応じてCSSクラスを切り替え
            const modalImageContainer = document.querySelector('.modal-image-container');
            if (work.display_mode === "fit")
            {
                modalImageContainer.classList.add('fit');
            } else
            {
                modalImageContainer.classList.remove('fit');
            }

            // モーダルを表示し、スクロールを無効化
            workModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // モーダルを閉じる処理
    const closeModal = () =>
    {
        workModal.classList.remove('active');
        modalImage.src = '';
        modalThumbnailNav.innerHTML = '';
        modalLink.href = '#';
        modalLink.textContent = '';
        modalLink.classList.add('hidden');
        document.body.style.overflow = ''; // スクロール禁止を解除
    };

    modalCloseButton.addEventListener('click', closeModal);

    // モーダル背景クリックで閉じる
    window.addEventListener('click', (e) =>
    {
        if (e.target === workModal)
        {
            closeModal();
        }
    });
    const pageTopBtn = document.getElementById('page-top-btn');

    // スクロールに応じて表示・非表示
    window.addEventListener('scroll', () =>
    {
        if (window.scrollY > 100)
        {
            pageTopBtn.classList.add('show');
        } else
        {
            pageTopBtn.classList.remove('show');
        }
    });

    // ボタンクリックでトップへスムーススクロール
    pageTopBtn.addEventListener('click', () =>
    {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});