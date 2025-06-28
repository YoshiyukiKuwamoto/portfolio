// スムーススクロール & メニューアクティブ切り替え
document.addEventListener('DOMContentLoaded', () =>
{
    const navLinks = document.querySelectorAll('nav a');
    const tapBtn = document.getElementById("tap-button");
    const loadingScreen = document.getElementById("loading-screen"); // 変数名をscreenからloadingScreenに統一

    // 全ての円要素を取得
    const outerCircle = document.querySelector('.circle-text.outer');
    const innerCircle = document.querySelector('.circle-text.inner');

    // パネル要素を取得
    const topPanel = document.querySelector('.loading-panel.top');
    const middlePanel = document.querySelector('.loading-panel.middle');
    const bottomPanel = document.querySelector('.loading-panel.bottom');

    const mainContent = document.querySelector('main'); // メインコンテンツ要素

    const particleContainer = document.getElementById('particle-container');
    // パスワード関連の要素を取得
    const passwordOverlay = document.getElementById('password-overlay');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const passwordError = document.getElementById('password-error');
    const passwordContainer = document.querySelector('.password-container'); // 揺れアニメーション用
    let welcomeMessage = null; // 後で作成する「ようこそ！」メッセージ要素

    // --- 設定: 正しいパスワード ---
    const CORRECT_PASSWORD = "Marumaru_portfolio"; // ここに設定したいパスワードを入力してください
    // ----------------------------

    // 初期状態ではメインコンテンツを隠し、スクロールを無効にする
    mainContent.classList.add('hidden-content');
    document.body.style.overflow = 'hidden'; // パスワード画面表示中はスクロール禁止

    // パスワード入力フィールドがフォーカスされたらエラーメッセージとエラーボーダーを隠す
    passwordInput.addEventListener('focus', () =>
    {
        passwordError.classList.remove('visible');
        passwordError.textContent = '';
        passwordInput.classList.remove('error'); // エラーボーダーを削除
        passwordContainer.classList.remove('shake'); // 揺れアニメーションを削除
    });

    // パスワード送信処理
    const checkPassword = () =>
    {
        if (passwordInput.value === CORRECT_PASSWORD)
        {
            // パスワードが正しい場合
            passwordContainer.style.display = 'none'; // 追加: password-container全体を非表示にする

            // 「ようこそ！」メッセージを生成して表示
            welcomeMessage = document.createElement('p');
            welcomeMessage.classList.add('welcome-message');
            welcomeMessage.textContent = 'ようこそ！';
            // 既存のwelcomeMessageがあれば削除する
            if (passwordOverlay.querySelector('.welcome-message'))
            {
                passwordOverlay.querySelector('.welcome-message').remove();
            }
            // 変更: passwordOverlayの子要素として追加
            passwordOverlay.appendChild(welcomeMessage);


            // アニメーション後にオーバーレイを隠し、ローディング画面を開始
            setTimeout(() =>
            {
                passwordOverlay.classList.add('hidden'); // パスワードオーバーレイを隠す
                // ローディング画面のアニメーションを開始（ここではスクロール禁止を維持）
                initializeLoadingScreen();
            }, 1000); // 「ようこそ！」アニメーションのために1秒待つ

        } else
        {
            // パスワードが間違っている場合
            passwordError.textContent = "パスワードが違います";
            passwordError.classList.add('visible');
            passwordInput.classList.add('error'); // 赤いボーダーを追加
            passwordContainer.classList.add('shake'); // 揺れアニメーションを追加
            passwordInput.value = ''; // 入力フィールドをクリア

            // アニメーション後にshakeクラスを削除し、次回の揺れを可能にする
            setTimeout(() =>
            {
                passwordContainer.classList.remove('shake');
            }, 300); // CSSアニメーションのdurationに合わせる
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



    // 単一のパーティクルを作成する関数
    const createParticle = () =>
    {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // ランダムなサイズ for particles
        const size = Math.random() * 20 + 5; // Size between 5px and 25px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // ランダムな開始位置 (x-axis)
        particle.style.left = `${Math.random() * 100}%`;

        // ランダムなアニメーション持続時間を設定 (例: 4秒から10秒の間)
        const duration = Math.random() * 6 + 4; // 4s to 10s
        particle.style.animationDuration = `${duration}s`; // animationプロパティからdurationを分離
        particle.style.animationName = 'floatUp'; // animation-nameも分離
        particle.style.animationTimingFunction = 'ease-out';
        particle.style.animationIterationCount = 'infinite';

        // ランダムなアニメーション遅延をさらに追加して、開始タイミングもずらす
        const delay = Math.random() * (duration - 1); // animationDelayをdurationより少し短くして、開始が早すぎないようにする
        particle.style.animationDelay = `${delay}s`;

        particleContainer.appendChild(particle);

        // Remove particle after its animation ends to prevent DOM clutter
        particle.addEventListener('animationend', () =>
        {
            particle.remove();
        });
    };

    // ローディング画面のアニメーションを初期化する関数
    const initializeLoadingScreen = () =>
    {
        loadingScreen.classList.add('visible'); // ローディング画面を表示状態にする
        let particleInterval = setInterval(createParticle, 200); // 200msごとに新しいパーティクルを生成

        // PC表示の場合にTAPをCLICKに変更
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

        // 初期ロード時に設定
        setButtonText();
        // ウィンドウのリサイズ時にも設定を更新
        window.addEventListener('resize', setButtonText);

        // アニメーションを適用する関数 (ローディング画面の初期アニメーション)
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

        // TAP/CLICKボタンクリック時の処理 (この部分もinitializeLoadingScreen内に移動して整理)
        const handleTapClick = () =>
        {
            loadingScreen.classList.add('fade-out');

            // パーティクルの生成を停止
            clearInterval(particleInterval); // パーティクル生成インターバルを停止

            // 円の要素を非表示にするアニメーション (CSSアニメーションを逆再生)
            if (outerCircle) outerCircle.classList.add('reverse-circle-text');
            if (innerCircle) innerCircle.classList.add('reverse-circle-text');

            // パネルのアニメーションを逆再生 (または非表示)
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

            // アニメーション終了後にローディング画面を完全に非表示にする
            setTimeout(() =>
            {
                loadingScreen.classList.add('hidden'); // display: none; を適用
                loadingScreen.style.pointerEvents = 'none'; // クリックイベントを無効化
                document.body.style.overflow = ''; // スクロール禁止を解除
                // メインコンテンツの表示
                mainContent.classList.remove('hidden-content'); // hidden-contentクラスを削除
                mainContent.classList.add('visible-content'); // 必要であればフェードイン用クラス

                // ヘッダーのタイピングアニメーションを開始
                startHeaderTypingAnimation();

            }, 1000); // 最も長い逆再生アニメーションの duration に合わせる (例: 1秒)
        };
        tapBtn.addEventListener('click', handleTapClick); // イベントリスナーをここで設定
    };

    // ヘッダーのタイピングアニメーション関連の変数と関数
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


    // スムーススクロール
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
        root: null, // ビューポートをルートにする
        rootMargin: '0px',
        threshold: 0.5 // セクションの50%が見えたら
    };

    const sectionObserver = new IntersectionObserver((entries, observer) =>
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

    // WORKSセクションのタブ切り替え
    const categoryItems = document.querySelectorAll('.category-item');
    const workItems = document.querySelectorAll('.work-item');

    categoryItems.forEach(item =>
    {
        item.addEventListener('click', () =>
        {
            // 全てのカテゴリからactiveクラスを削除
            categoryItems.forEach(cat => cat.classList.remove('active'));
            // クリックされたカテゴリにactiveクラスを追加
            item.classList.add('active');

            const filter = item.dataset.category; // data-category属性からフィルタ値を取得

            workItems.forEach(workItem =>
            {
                // 'all'が選択されているか、作品のカテゴリがフィルタ値と一致する場合に表示
                if (filter === 'all' || workItem.dataset.category === filter)
                {
                    workItem.style.display = 'flex'; // flexに戻す
                } else
                {
                    workItem.style.display = 'none';
                }
            });
        });
    });

    // ===== モーダル関連のJavaScript =====
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
            title: "自身のポートフォリオサイト",
            description: "自身のWeb制作・デザインスキルを総合的に示すために、学習した知識と技術を統合して企画・制作したポートフォリオサイトです。訪問者にとって使いやすく、私の個性や成長プロセスが伝わるデザインを目指しました。",
            info: [
                "技術: HTML, CSS, JavaScript",
                "制作年月:2025年6月",
                "制作時間:約1週間",
                "ポイント: ローディング画面のアニメーションによるユーザーエンゲージメント向上、各セクションへのスムーズなナビゲーションで快適な閲覧体験を提供できるよう注力しました。",
                "学び: Web開発の全体像と自己表現の重要性を実感しました。"
            ],
            link: "",
            images: ["image/portfoliopic.png"]
        },
        "zemi-site": {
            type: "image",
            title: "ゼミ紹介サイト",
            description: "ゼミ選びに悩む学生のために、情報を整理し、直感的に比較できるよう設計されたゼミ紹介サイトのデザインです。構成・配色・UIすべてにおいて、閲覧者目線を重視しました。",
            info: [
                "技術: HTML, CSS, JavaScript",
                "制作年月: 2025年1月",
                "制作時間: 約2ヶ月",
                "ポイント: 活動内容や傾向ごとのフィルタ機能、カード形式での比較のしやすさ、親しみやすい配色などを意識し、利用者が情報を迷わず取得できる構造にしました。"
            ],
            link: "zemisite/zemisyoukai.html",
            images: ["image/webzemi.png"]
        },
        "flyer-design": {
            type: "image",
            title: "フライヤーデザイン（バンドライブ告知）",
            description: "架空のバンドライブ告知用フライヤーデザインです。情報の優先順位を整理し、見る人に伝えたい内容が一目で分かるよう構成しました。クリエイティブな表現を通じて視覚的なインパクトを追求しています。",
            info: [
                "技術: Adobe Illustrator, Adobe Photoshop",
                "制作年月: 2025年5月",
                "制作時間: 約3時間",
                "ポイント: ターゲット層の音楽ジャンルや雰囲気を意識した色使いやタイポグラフィで、視線誘導と訴求力を強化しました。ライブの興奮を伝えるためのダイナミックなレイアウトに挑戦しました。"
            ],
            images: [
                "image/DTP_flyer_001_表_B6.png",
                "image/DTP_flyer_001_裏_B6.png"
            ]
        },
        "website-design-xd-aquarium": {
            type: "image",
            title: "デザインカンプ（架空水族館）",
            description: "Figmaを用いて、特定のテーマに基づいたWebサイトのデザイン提案を行いました。ポップで楽しげなデザイン要素を取り入れ、水族館の魅力を最大限に引き出すことを目指しました。特に、家族層が直感的に楽しめるようなUI/UXを意識しています。",
            info: [
                "技術: Figma",
                "制作年月: 2023年7月",
                "制作時間: 約7時間",
                "ポイント: シンプルながらも目を引くビジュアルと、訪問者に楽しさを伝えるためのアイコンの活用をしました。水族館の多様な生き物を表現する、鮮やかで生命力あふれる色彩設計を目指しました。"
            ],
            images: ["image/07-01_s2321086.png"]
        },
        "fake-cafe-website-design": {
            type: "image",
            title: "デザインカンプ（架空カフェ）",
            description: "Figmaで作成した、架空のカフェのWebサイトデザインカンプです。ユーザーエクスペリエンスと視覚的な魅力を両立させることを目指し、温かみのあるブランドイメージと快適な閲覧体験を表現しました。",
            info: [
                "技術: Figma",
                "制作年月: 2023年5月",
                "制作時間: 約8時間",
                "ポイント: 「来店」を促すユーザー導線を考慮したレイアウト設計。カフェの温かみと上質さを伝えるブラウン系とアースカラーを基調とした配色。視認性とデザイン性を両立させるため、タイポグラフィの選定に注力しました。"
            ],
            images: ["image/06-02-s2321086.png"]
        },
        "character-design-work": {
            type: "image",
            title: "キャラクターデザイン",
            description: "北海道情報大学のオープンキャンパスに向けたオリジナルキャラクターを制作しました。学内のイベントで親しまれる存在となるよう、視覚的な魅力を追求し、様々なポーズや表情での応用を考慮しました。",
            info: [
                "技術: Clip Studio Paint, Adobe Illustrator",
                "制作年月: 2025年5月",
                "制作時間: 約3日",
                "ポイント: 配色や輪郭線の統一感に配慮し、親しみやすさとデフォルメのバランスを意識しました。複数視点での描画を通じて、世界観の一貫性と実用性のあるデザインを目指しました。"
            ],
            images: [
                "image/kyarafront.png",
                "image/kyaraback.png"
            ]
        },
        "poster-design-work": {
            type: "image",
            title: "ポスターデザイン（コスメ販促会）",
            description: "クリスマスシーズンに合わせた女性向けコスメ販促会の告知ポスターとして制作しました。華やかさと商品の魅力を最大限に引き立て、購買意欲を喚起するデザインを目指しました。",
            info: [
                "技術: Adobe Illustrator",
                "制作年月: 2024年6月",
                "制作時間: 約4時間",
                "ポイント: クリスマスとコスメのテーマを融合させ、女性が購買意欲を掻き立てられるような、魅力的で洗練されたビジュアルを意識しました。暖色系の色彩や光沢感のある要素を取り入れ、ホリデーシーズンの特別感を演出しています。"
            ],
            images: ["image/広告課題.jpg"]
        },
        "meisi1-design-work": {
            type: "image",
            title: "名刺デザイン",
            description: "自身の名刺としてデザインしました。表面は情報を集約しつつもシンプルで視認性を重視し、裏面では親しみやすいイラストを用いて個性を表現しました。名刺交換の際に会話のきっかけとなるような工夫を凝らしています。",
            info: [
                "技術: Adobe Illustrator, Clip Studio Paint",
                "制作年月: 2025年4月",
                "制作時間: 約2時間",
                "ポイント: 表面は自身で製作した彩度の高いイラストを配置し、インパクトのある情報伝達を意識。裏面には自身のオリジナルイラストを配置することで、個人的なタッチと記憶に残るデザインを両立させました。"
            ],
            images: [
                "image/まじめ名刺表.jpg",
                "image/まじめ名刺裏.jpg"
            ]
        }
    };

    document.querySelectorAll('.view-details-button').forEach(button =>
    {
        button.addEventListener('click', (e) =>
        {
            e.stopPropagation();
            const workId = button.dataset.id;
            const work = works[workId]; // actionは不要なので削除
            if (!work) return;

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

            if (work.link)
            {
                modalLink.href = work.link;
                modalLink.textContent = 'サイトを見る';
                modalLink.classList.remove('hidden'); // hiddenクラスを削除して表示
            } else
            {
                modalLink.href = '#'; // リンクをリセット
                modalLink.textContent = ''; // テキストを空にする
                modalLink.classList.add('hidden'); // hiddenクラスを追加して非表示
            }

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
        modalLink.classList.add('hidden'); // 閉じる時にも確実に非表示にする
        document.body.style.overflow = '';
    };

    modalCloseButton.addEventListener('click', closeModal);

    window.addEventListener('click', (e) =>
    {
        if (e.target === workModal)
        {
            closeModal();
        }
    });

});
