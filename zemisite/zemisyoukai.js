document.addEventListener("DOMContentLoaded", () =>
{
  // 初期データ
  window.cardsData = [
    {
      id: 1,
      labNumber: 333,
      name: "飯嶋",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [40, 60],
        "個人・団体の活動比重": [30, 70],
        "制作・研究比重": [100, 0]
      }
    },
    {
      id: 2,
      labNumber: 325,
      name: "伊藤正彦",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 3,
      labNumber: 338,
      name: "伊藤マーティ",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [100, 0],
        "個人・団体の活動比重": [0, 100],
        "制作・研究比重": [50, 50]
      }
    },
    {
      id: 4,
      labNumber: 320,
      name: "大島",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [20, 80],
        "個人・団体の活動比重": [20, 80],
        "制作・研究比重": [60, 40]
      }
    },
    {
      id: 5,
      labNumber: 313,
      name: "柿並",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [10, 90],
        "個人・団体の活動比重": [20, 80],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 6,
      labNumber: 322,
      name: "河原",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [60, 40],
        "制作・研究比重": [0, 100]
      }
    },
    {
      id: 7,
      labNumber: 319,
      name: "金",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [90, 10],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [80, 20]
      }
    },
    {
      id: 8,
      labNumber: 314,
      name: "齋藤健司",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [50, 50],
        "制作・研究比重": [100, 0]
      }
    },
    {
      id: 9,
      labNumber: 122,
      name: "斎藤一",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [30, 70],
        "個人・団体の活動比重": [60, 40],
        "制作・研究比重": [100, 0]
      }
    },
    {
      id: 10,
      labNumber: 138,
      name: "坂本",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [0, 100],
        "個人・団体の活動比重": [20, 80],
        "制作・研究比重": [90, 10]
      }
    },
    {
      id: 11,
      labNumber: 222,
      name: "佐々木",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [20, 80],
        "個人・団体の活動比重": [70, 30],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 12,
      labNumber: 137,
      name: "島田",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [0, 100],
        "個人・団体の活動比重": [90, 10],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 13,
      labNumber: 133,
      name: "杉澤",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [20, 80],
        "個人・団体の活動比重": [50, 50],
        "制作・研究比重": [100, 100]
      }
    },
    {
      id: 14,
      labNumber: 226,
      name: "谷口",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [30, 70],
        "個人・団体の活動比重": [60, 40],
        "制作・研究比重": [10, 90]
      }
    },
    {
      id: 15,
      labNumber: 330,
      name: "近澤",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [0, 100],
        "個人・団体の活動比重": [30, 70],
        "制作・研究比重": [100, 0]
      }
    },
    {
      id: 16,
      labNumber: 223,
      name: "辻",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [80, 20],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [80, 20]
      }
    },
    {
      id: 17,
      labNumber: 129,
      name: "新井山",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [0, 100],
        "個人・団体の活動比重": [100, 0],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 18,
      labNumber: 136,
      name: "隼田",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [30, 70],
        "個人・団体の活動比重": [60, 40],
        "制作・研究比重": [80, 20]
      }
    },
    {
      id: 19,
      labNumber: 128,
      name: "平山",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [90, 10],
        "制作・研究比重": [20, 30]
      }
    },
    {
      id: 20,
      labNumber: 318,
      name: "広奥", profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [90, 10],
        "個人・団体の活動比重": [10, 90],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 21,
      labNumber: 134,
      name: "藤原",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [10, 90],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 22,
      labNumber: 327,
      name: "甫喜本",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [20, 50],
        "制作・研究比重": [10, 90]
      }
    },
    {
      id: 23,
      labNumber: 224,
      name: "松井",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [20, 80],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 24,
      labNumber: 221,
      name: "三浦",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [90, 10],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 25,
      labNumber: 125,
      name: "向田",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [30, 70],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 26,
      labNumber: 225,
      name: "守",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [50, 50],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 27,
      labNumber: 856,
      name: "森川",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [100, 0],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [0, 100]
      }
    },
    {
      id: 28,
      labNumber: 135,
      name: "安田",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [40, 60],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 29,
      labNumber: 139,
      name: "山北",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [90, 10],
        "個人・団体の活動比重": [20, 80],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 30,
      labNumber: 315,
      name: "湯村",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [0, 100],
        "個人・団体の活動比重": [10, 90],
        "制作・研究比重": [20, 80]
      }
    },
    {
      id: 31,
      labNumber: 227,
      name: "綿谷",
      profile: "profile.png",
      image: "nekocyanPAKE4725-457_TP_V4.jpg",
      favorite: false,
      barData: {
        "場所別活動比重": [70, 30],
        "個人・団体の活動比重": [80, 20],
        "制作・研究比重": [20, 80]
      }
    },
  ];


  // === DOM取得 ===
  const loginRequiredModal = document.getElementById("login-required-modal");
  const loginModalTrigger = document.getElementById("login-modal-trigger");
  const closeLoginRequired = document.getElementById("close-login-required");
  const resetButton = document.getElementById("reset-button");
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  const searchError = document.getElementById("search-error");
  const filterButton = document.getElementById("filter-button");
  const sortPopup = document.getElementById("sort-popup");
  const sortButtons = document.querySelectorAll(".sort-button");
  const applySortBtn = document.getElementById("apply-sort");
  const resetSortBtn = document.getElementById("reset-sort");

  const profileButton = document.getElementById("profile-button");
  const profileList = document.getElementById("profile-list");
  const profileModal = document.getElementById("profile-modal");
  const profileTitle = document.getElementById("profile-title");
  const profileImage = document.getElementById("profile-image");
  const prevProfile = document.getElementById("prev-profile");
  const nextProfile = document.getElementById("next-profile");
  const closeProfile = document.getElementById("close-profile");

  const loginModal = document.getElementById("login-modal");
  const closeLoginModalBtn = document.getElementById("close-login-modal");
  const loginEmailInput = document.getElementById("login-email");
  const loginPasswordInput = document.getElementById("login-password");
  const confirmLoginBtn = document.getElementById("confirm-login");

  const signupNameInput = document.getElementById("signup-name");
  const signupEmailInput = document.getElementById("signup-email");
  const signupPasswordInput = document.getElementById("signup-password");
  const signupButton = document.getElementById("signup-button");

  const loginButton = document.getElementById("login-button");
  const usernameSpan = document.getElementById("username");
  const userInfo = document.getElementById("user-info");
  const matchResetButton = document.getElementById("match-reset-button");

  let loginFailCount = {};
  let currentUser = null;
  let currentProfileIndex = 0;
  let currentCardsData = [...cardsData];
  let selectedSort = null;
  let selectedOrder = "asc";
  let pendingFavoriteId = null; // ログイン後に反映するIDを保持


  const normalizationMap = { "斎": "斎", "齋": "斎", "斉": "斎", "齊": "斎" };

  function normalizeString(str)
  {
    return str.replace(/./g, char => normalizationMap[char] || char);
  }
  filterButton.textContent = "ランダム▽";
  filterButton.addEventListener("click", () =>
  {
    sortPopup.style.display = "block";
  });

  // タブ切り替え：基本 / 活動傾向
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach(button =>
  {
    button.addEventListener("click", () =>
    {
      const selectedTab = button.dataset.tab;
      tabButtons.forEach(btn => btn.classList.remove("selected"));
      button.classList.add("selected");

      tabPanels.forEach(panel =>
      {
        panel.classList.remove("active");
        panel.style.display = "none";
      });

      const targetPanel = document.getElementById(`${selectedTab}-sort-panel`);
      targetPanel.classList.add("active");
      targetPanel.style.display = "block";
    });
  });

  const matchConditions = {};

  document.querySelectorAll(".match-button").forEach(btn =>
  {
    btn.addEventListener("click", () =>
    {
      const key = btn.dataset.key;
      const index = btn.dataset.index;
      const keyIndex = `${key}-${index}`;
      const sameKeyButtons = document.querySelectorAll(`.match-button[data-key="${key}"]`);

      const isSelected = btn.classList.contains("selected");

      if (isSelected)
      {
        // ✅ 選択済みだったら解除
        delete matchConditions[keyIndex];
        btn.classList.remove("selected");
      } else
      {
        // ✅ 同じカテゴリの他のボタンを解除し、自分を選択
        sameKeyButtons.forEach(b =>
        {
          const otherKeyIndex = `${b.dataset.key}-${b.dataset.index}`;
          delete matchConditions[otherKeyIndex];
          b.classList.remove("selected");
        });

        matchConditions[keyIndex] = true;
        btn.classList.add("selected");
      }
    });
  });



  window.addEventListener("click", (event) =>
  {
    // 並べ替えポップアップを閉じる処理
    if (!sortPopup.contains(event.target) && event.target !== filterButton)
    {
      sortPopup.style.display = "none";
    }

    // ログインモーダルの外側クリックで閉じる処理
    if (event.target.id === "login-modal-overlay")
    {
      loginModal.style.display = "none";
    }
  });


  function generateCards(data, showMatchScore = false)
  {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    data.forEach(card =>
    {
      const cardEl = document.createElement("div");
      cardEl.className = "card";

      let scoreClass = "";
      let symbol = "";

      if (card.matchScore >= 80)
      {
        scoreClass = "score-high";
        symbol = "◉";
      } else if (card.matchScore >= 60)
      {
        scoreClass = "score-medium";
        symbol = "◎";
      } else if (card.matchScore >= 40)
      {
        scoreClass = "score-low";
        symbol = "◯";
      } else
      {
        scoreClass = "score-very-low";
        symbol = "△";
      }

      const matchScoreHTML = showMatchScore && card.matchScore !== undefined
        ? `<p class="match-score">
           <span class="${scoreClass}">一致度：</span>
           <span class="${scoreClass}">${card.matchScore}% ${symbol}</span>
         </p>`
        : "";

      cardEl.innerHTML = `
      <button class="favorite-btn ${card.favorite ? "favorited" : ""}" data-id="${card.id}">★</button>
      <img src="${card.image}" alt="${card.name}ゼミ" class="card-image">
      <div class="card-info">
        <p class="lab-number">研究室：${card.labNumber}</p>
        <div class="card-title">${card.name}ゼミ</div>
        ${matchScoreHTML}
      </div>
    `;



      // ✅ お気に入りボタンにログインチェック追加
      const favBtn = cardEl.querySelector(".favorite-btn");
      favBtn.addEventListener("click", (e) =>
      {
        e.stopPropagation(); // カードのクリックイベントを止める

        if (!currentUser)
        {
          pendingFavoriteId = card.id; // ログイン後のために保存
          loginRequiredModal.style.display = "block"; // ログイン促すポップアップを表示
          return;
        }

        toggleFavorite(card.id, favBtn);
      });

      // ✅ カードクリックで詳細へ（ただし一致度検索時のみ sessionStorage を記録）
      cardEl.addEventListener("click", (e) =>
      {
        if (e.target.classList.contains("favorite-btn")) return;

        if (localStorage.getItem("matchSortActive") === "true")
        {
          sessionStorage.setItem("justRestoredFromDetail", "true");
        }

        window.location.href = `detail.html?id=${card.id}`;
      });

      cardContainer.appendChild(cardEl);
    });
  }
  function toggleFavorite(id, btn)
  {
    const card = cardsData.find(c => c.id === id);
    if (card)
    {
      card.favorite = !card.favorite;
      btn.classList.toggle("favorited", card.favorite);
      const favorites = cardsData.filter(c => c.favorite).map(c => c.id);
      localStorage.setItem(`favorites_${currentUser}`, JSON.stringify(favorites));

      // お気に入り表示中だったら即反映
      if (selectedSort === "favorite")
      {
        const container = document.getElementById("card-container");
        const newFavoriteCards = cardsData.filter(c => c.favorite);
        if (newFavoriteCards.length === 0)
        {
          container.innerHTML = `<p class="no-favorites-message">お気に入りがありません。</p>`;
        } else
        {
          currentCardsData = newFavoriteCards;
          generateCards(currentCardsData);
        }
      }
      if (currentUser)
      {
        const favorites = cardsData.filter(c => c.favorite).map(c => c.id);
        localStorage.setItem(`favorites_${currentUser}`, JSON.stringify(favorites));
      }
    }
  }

  loginModalTrigger.addEventListener("click", () =>
  {
    loginRequiredModal.style.display = "none";
    loginModal.style.display = "block";
  });

  closeLoginRequired.addEventListener("click", () =>
  {
    loginRequiredModal.style.display = "none";
  });

  loginButton.addEventListener("click", () =>
  {
    loginModal.style.display = "block";
  });

  closeLoginModalBtn.addEventListener("click", () =>
  {
    loginModal.style.display = "none";
  });

  const logoutButton = document.getElementById("logout-button");

  logoutButton.addEventListener("click", () =>
  {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentUsername");
    currentUser = null;

    loginButton.style.display = "inline";
    userInfo.style.display = "none";

    cardsData.forEach(card => card.favorite = false);
    generateCards(currentCardsData);

    // ✅ お気に入りソートボタンを非表示
    document.querySelector('[data-sort="favorite"]').style.display = "none";

    filterButton.textContent = "ランダム▽";

    // ✅ 一致度ソート状態も完全リセット
    localStorage.removeItem("matchSortActive");
    localStorage.removeItem("matchSortConditions");
    Object.keys(matchConditions).forEach(key => delete matchConditions[key]);

    document.querySelectorAll(".match-button").forEach(btn => btn.classList.remove("selected"));
    matchResetButton.classList.add("hidden");
  });




  // フォーム切り替え
  const switchToLogin = document.getElementById("switch-to-login");
  const switchToSignup = document.getElementById("switch-to-signup");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  switchToLogin.addEventListener("click", () =>
  {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    switchToLogin.classList.add("active");
    switchToSignup.classList.remove("active");
  });

  switchToSignup.addEventListener("click", () =>
  {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    switchToSignup.classList.add("active");
    switchToLogin.classList.remove("active");
  });

  confirmLoginBtn.addEventListener("click", () =>
  {
    const email = loginEmailInput.value.trim();
    const password = loginPasswordInput.value.trim();
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email])
    {
      if (users[email].password === password)
      {
        // ✅ ログイン成功処理
        const name = users[email].name;
        currentUser = email;
        localStorage.setItem("currentUser", email);
        localStorage.setItem("currentUsername", name);
        // 🔐 パスワードをクリア
        loginPasswordInput.value = "";

        loginFailCount[email] = 0;

        if (pendingFavoriteId !== null)
        {
          const favBtn = document.querySelector(`.favorite-btn[data-id='${pendingFavoriteId}']`);
          if (favBtn)
          {
            toggleFavorite(pendingFavoriteId, favBtn);
          }
          pendingFavoriteId = null;
        }

        loginModal.style.display = "none";
        loginButton.style.display = "none";
        userInfo.style.display = "inline";
        usernameSpan.textContent = name;

        const savedFavorites = JSON.parse(localStorage.getItem(`favorites_${currentUser}`)) || [];
        cardsData.forEach(card =>
        {
          card.favorite = savedFavorites.includes(card.id);
        });
        // ✅ 一致度ソート状態だったら再スコアリングして並べ替えを復元
        if (localStorage.getItem("matchSortActive") === "true")
        {
          const savedConditions = JSON.parse(localStorage.getItem("matchSortConditions") || "{}");
          Object.assign(matchConditions, savedConditions);

          currentCardsData.forEach(card =>
          {
            let score = 0;
            let count = 0;
            for (const key in matchConditions)
            {
              const [axis, idxStr] = key.split("-");
              const idx = parseInt(idxStr);
              const value = card.barData?.[axis]?.[idx];
              if (value !== undefined)
              {
                score += value;
                count++;
              }
            }
            card.matchScore = count ? Math.round((score / (count * 100)) * 100) : 0;
          });

          currentCardsData.sort((a, b) => b.matchScore - a.matchScore);
          generateCards(currentCardsData, true);
        } else
        {
          // 通常表示
          generateCards(currentCardsData);
        }


        // ✅ お気に入りソートボタンを表示（ここを追加）
        document.querySelector('[data-sort="favorite"]').style.display = "inline-block";

      } else
      {
        // ❌ パスワード間違い時の処理
        loginFailCount[email] = (loginFailCount[email] || 0) + 1;

        if (loginFailCount[email] >= 3)
        {
          alert(
            "⚠️ パスワードを3回連続で間違えたため、登録情報をリセットしました。\n再度新規登録をお願いします。"
          );

          delete users[email];
          localStorage.setItem("users", JSON.stringify(users));
          loginFailCount[email] = 0;

          loginForm.style.display = "none";
          signupForm.style.display = "block";
          switchToSignup.classList.add("active");
          switchToLogin.classList.remove("active");

        } else
        {
          const remaining = 3 - loginFailCount[email];
          alert(`パスワードが正しくありません（残り ${remaining} 回でリセットされます）`);
        }
      }

    } else
    {
      // メールアドレスが登録されていない
      alert("このメールアドレスは登録されていません。\n新規登録をお願いします。");

      loginForm.style.display = "none";
      signupForm.style.display = "block";
      switchToSignup.classList.add("active");
      switchToLogin.classList.remove("active");
    }
  });

  signupButton.addEventListener("click", () =>
  {
    const name = signupNameInput.value.trim();
    const email = signupEmailInput.value.trim();
    const password = signupPasswordInput.value.trim();

    // 🔒 大学ドメインチェック
    if (
      !email.endsWith("@do-johodai.ac.jp") &&
      !email.endsWith("@s.do-johodai.ac.jp")
    )
    {
      alert("大学指定のメールアドレス（@do-johodai.ac.jp または @s.do-johodai.ac.jp）を入力してください。");
      return;
    }

    if (!email || !password || !name)
    {
      alert("すべての項目を入力してください。");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[email])
    {
      alert("このメールアドレスはすでに登録されています。");
      return;
    }

    users[email] = { name, password };
    localStorage.setItem("users", JSON.stringify(users));
    alert("新規登録が完了しました！ログインしてください。");

  });


  document.querySelectorAll(".toggle-password").forEach((btn) =>
  {
    btn.addEventListener("click", () =>
    {
      const targetId = btn.dataset.target;
      const input = document.getElementById(targetId);
      const isPassword = input.getAttribute("type") === "password";
      input.setAttribute("type", isPassword ? "text" : "password");
      btn.textContent = isPassword ? "非表示" : "表示";
    });
  });


  // ===== 検索機能 =====
  function executeSearch()
  {
    const query = normalizeString(searchInput.value.trim().toLowerCase());
    if (!query) return;

    const results = cardsData.filter((card) =>
    {
      const normalizedName = normalizeString(card.name.toLowerCase());
      return normalizedName.includes(query) || String(card.labNumber).includes(query);
    });

    if (results.length > 0)
    {
      currentCardsData = results;
      generateCards(results);
      resetButton.style.display = "inline-block";
    } else
    {
      searchError.style.display = "block";
      setTimeout(() =>
      {
        searchError.style.display = "none";
      }, 3000);
      resetButton.style.display = "none";
    }

    searchInput.value = "";
  }

  function resetSearch()
  {
    currentCardsData = [...cardsData].sort(() => Math.random() - 0.5); // 🔁 ランダム並び
    generateCards(currentCardsData);
    filterButton.textContent = "ランダム▽"; // 🔁 ボタン表記リセット

    searchError.style.display = "none";
    searchInput.value = "";
    resetButton.style.display = "none";
  }


  searchButton.addEventListener("click", executeSearch);
  resetButton.addEventListener("click", resetSearch);
  searchInput.addEventListener("keypress", (e) =>
  {
    if (e.key === "Enter") executeSearch();
  });

  // ===== 並び替え機能 =====
  sortButtons.forEach(button =>
  {
    button.addEventListener("click", () =>
    {
      const isSort = button.dataset.sort !== undefined;
      const isOrder = button.dataset.order !== undefined;

      const isSelected = button.classList.contains("selected");

      // 同じカテゴリのボタンを全て非選択に
      if (isSort)
      {
        document.querySelectorAll(".sort-button[data-sort]").forEach(b => b.classList.remove("selected"));
      }
      if (isOrder)
      {
        document.querySelectorAll(".sort-button[data-order]").forEach(b => b.classList.remove("selected"));
      }

      // トグル処理：今押されたボタンが非選択だった場合のみ選択する
      if (!isSelected)
      {
        button.classList.add("selected");

        if (isSort) selectedSort = button.dataset.sort;
        if (isOrder) selectedOrder = button.dataset.order;
      } else
      {
        if (isSort) selectedSort = null;
        if (isOrder) selectedOrder = null;
      }
    });
  });


  applySortBtn.addEventListener("click", () =>
  {
    if (selectedSort)
    {
      const baseCards = [...cardsData]; // 🔸 並び替えは常に元データから！

      if (selectedSort === "favorite")
      {
        const savedFavorites = JSON.parse(localStorage.getItem(`favorites_${currentUser}`)) || [];
        const favoriteCards = baseCards.filter(card => savedFavorites.includes(card.id));

        if (favoriteCards.length === 0)
        {
          const container = document.getElementById("card-container");
          container.innerHTML = `<p class="no-favorites-message">お気に入りがありません。</p>`;
          filterButton.textContent = "お気に入り▽";
          sortPopup.style.display = "none";
          return;
        }

        currentCardsData = favoriteCards;
      } else
      {
        // 他の並び替えは cardsData をベースに
        currentCardsData = baseCards;
        sortCards(selectedSort, selectedOrder);
      }

      generateCards(currentCardsData);

      const sortText = selectedSort === "lab-number" ? "研究室"
        : selectedSort === "name" ? "名前"
          : "お気に入り";
      const orderText = selectedOrder === "asc" ? "昇順" : "降順";
      filterButton.textContent = `${sortText} / ${orderText}▽`;
    }

    sortPopup.style.display = "none";

    // 🎯 通常通りフィルタ状態をリセット
    const justRestored = sessionStorage.getItem("justRestoredFromDetail");
    if (!justRestored)
    {
      localStorage.removeItem("matchSortActive");
      localStorage.removeItem("matchSortConditions");
      Object.keys(matchConditions).forEach(key => delete matchConditions[key]);
      document.querySelectorAll(".match-button").forEach(btn => btn.classList.remove("selected"));
    }
  });

  resetSortBtn.addEventListener("click", () =>
  {
    document.querySelectorAll(".sort-button").forEach(b => b.classList.remove("selected"));
    localStorage.removeItem("matchSortActive");
    localStorage.removeItem("matchSortConditions");
    generateCards(currentCardsData, false); // 🔁 一致度は非表示に
    displayRandomCards();
    filterButton.textContent = "ランダム▽";
    sortPopup.style.display = "none";
    document.querySelectorAll(".match-button").forEach(btn => btn.classList.remove("selected"));
  });

  // 🔁 活動傾向フィルタ並び替え処理と状態保存
  const matchSortButton = document.getElementById("match-sort-button");

  matchSortButton.addEventListener("click", () =>
  {
    matchResetButton.classList.remove("hidden"); // 🔁 リセットボタン表示
    matchResetButton.classList.remove("hidden"); // 🔁 戻りでも表示
    document.querySelectorAll(".sort-button[data-sort]").forEach(btn =>
    {
      btn.classList.remove("selected");
    });
    document.querySelectorAll(".sort-button[data-order]").forEach(btn =>
    {
      btn.classList.remove("selected");
    });

    currentCardsData.forEach(card =>
    {
      let score = 0;
      let count = 0;
      for (const key in matchConditions)
      {
        const [axis, idxStr] = key.split("-");
        const idx = parseInt(idxStr);
        const value = card.barData?.[axis]?.[idx];
        if (value !== undefined)
        {
          score += value;
          count++;
        }
      }
      // ✅ 修正：100点満点基準に変更
      card.matchScore = count ? Math.round((score / (count * 100)) * 100) : 0;
    });
    currentCardsData.sort((a, b) => b.matchScore - a.matchScore);
    generateCards(currentCardsData, true);

    document.getElementById("sort-popup").style.display = "none";

    // ✅ 選択内容に応じてラベル変更
    const labels = Object.keys(matchConditions).map(key =>
    {
      const [axis, idx] = key.split("-");
      const btn = document.querySelector(`.match-button[data-key='${axis}'][data-index='${idx}']`);
      return btn ? btn.textContent : "";
    });

    if (labels.length > 0)
    {
      filterButton.textContent = `${labels.join("・")}▽`;
    } else
    {
      filterButton.textContent = "ランダム▽";
      displayRandomCards();
      return;
    }

    // ✅ 状態保存
    localStorage.setItem("matchSortActive", "true");
    localStorage.setItem("matchSortConditions", JSON.stringify(matchConditions));
    document.getElementById("match-reset-button").classList.remove("hidden");
  });

  document.getElementById("match-reset-button").addEventListener("click", () =>
  {
    // フィルタ解除
    localStorage.removeItem("matchSortActive");
    localStorage.removeItem("matchSortConditions");
    Object.keys(matchConditions).forEach(key => delete matchConditions[key]);

    // ボタンの見た目をリセット
    document.querySelectorAll(".match-button").forEach(btn => btn.classList.remove("selected"));

    // ✅ 一致度モーダルを閉じる
    const matchModal = document.getElementById("sort-popup");
    if (matchModal) matchModal.style.display = "none";

    // 一致度リセットボタンを非表示に
    document.getElementById("match-reset-button").classList.add("hidden");

    // 表示をランダムに戻す
    displayRandomCards();
    filterButton.textContent = "ランダム▽";
  });

  // 🔁 ページ読み込み時に復元
  window.addEventListener("DOMContentLoaded", () =>
  {
    const justRestored = sessionStorage.getItem("justRestoredFromDetail") === "true";

    // ✅ ここに追加 ↓↓↓
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser)
    {
      currentUser = storedUser;
      document.querySelector('[data-sort="favorite"]').style.display = "inline-block";
    }

    if (justRestored)
    {
      // ✅ 戻ったとき → フィルタ復元
      sessionStorage.removeItem("justRestoredFromDetail");

      const savedConditions = JSON.parse(localStorage.getItem("matchSortConditions") || "{}");
      Object.assign(matchConditions, savedConditions);

      for (const key in savedConditions)
      {
        const [axis, idx] = key.split("-");
        const btn = document.querySelector(`.match-button[data-key='${axis}'][data-index='${idx}']`);
        if (btn) btn.classList.add("selected");
      }

      currentCardsData.forEach(card =>
      {
        let score = 0;
        let count = 0;
        for (const key in matchConditions)
        {
          const [axis, idxStr] = key.split("-");
          const idx = parseInt(idxStr);
          const value = card.barData?.[axis]?.[idx];
          if (value !== undefined)
          {
            score += value;
            count++;
          }
        }
        card.matchScore = count ? Math.round((score / (count * 100)) * 100) : 0;
      });

      currentCardsData.sort((a, b) => b.matchScore - a.matchScore);
      generateCards(currentCardsData, true);

      const labels = Object.keys(matchConditions).map(key =>
      {
        const [axis, idx] = key.split("-");
        const btn = document.querySelector(`.match-button[data-key='${axis}'][data-index='${idx}']`);
        return btn ? btn.textContent : "";
      });
      filterButton.textContent = labels.length > 0 ? `${labels.join("・")}▽` : "ランダム▽";
      document.getElementById("match-reset-button").classList.remove("hidden");


    } else
    {
      // ✅ リロード時 → フィルタ完全リセット＋ランダム表示
      localStorage.removeItem("matchSortActive");
      localStorage.removeItem("matchSortConditions");
      Object.keys(matchConditions).forEach(key => delete matchConditions[key]);

      document.querySelectorAll(".match-button").forEach(btn => btn.classList.remove("selected"));
      document.querySelectorAll(".sort-button").forEach(btn => btn.classList.remove("selected"));

      selectedSort = null;
      selectedOrder = "asc";

      displayRandomCards();
      filterButton.textContent = "ランダム▽";
      document.getElementById("match-reset-button").classList.add("hidden");

    }
  });



  function sortCards(type, order)
  {
    if (type === "lab-number")
    {
      currentCardsData.sort((a, b) => order === "asc" ? a.labNumber - b.labNumber : b.labNumber - a.labNumber);
    } else if (type === "name")
    {
      // 「名前」ボタンを押したときに id でソートするように変更
      currentCardsData.sort((a, b) => order === "asc" ? a.id - b.id : b.id - a.id);
    } else if (type === "favorite")
    {
      currentCardsData = currentCardsData.filter((card) => card.favorite);
    }
    generateCards(currentCardsData);
  }

  // ===== プロフ帳 =====
  function generateProfileList()
  {
    profileList.innerHTML = "";
    cardsData.forEach((card, index) =>
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

  // ===== 初期表示 =====
  function displayRandomCards()
  {
    currentCardsData = [...cardsData].sort(() => Math.random() - 0.5);
    generateCards(currentCardsData);
  }

  const storedUser = localStorage.getItem("currentUser");
  const storedUsername = localStorage.getItem("currentUsername");

  if (storedUser && storedUsername)
  {
    currentUser = storedUser;
    loginButton.style.display = "none";
    userInfo.style.display = "inline";
    usernameSpan.textContent = storedUsername;

    // ユーザーごとのお気に入りを取得
    let savedFavorites = JSON.parse(localStorage.getItem(`favorites_${currentUser}`)) || [];

    // 👇 pendingFavoriteId（未ログイン中に押されたID）を追加（重複なし）
    if (pendingFavoriteId !== null && !savedFavorites.includes(pendingFavoriteId))
    {
      savedFavorites.push(pendingFavoriteId);
      localStorage.setItem(`favorites_${currentUser}`, JSON.stringify(savedFavorites));
    }

    // カードに反映
    cardsData.forEach(card =>
    {
      card.favorite = savedFavorites.includes(card.id);
    });

    // 表示反映
    generateCards(currentCardsData);

    // リセット
    pendingFavoriteId = null;

  } else
  {
    // 未ログインの場合は全て非お気に入りで表示
    cardsData.forEach(card =>
    {
      card.favorite = false;
    });
    generateCards(currentCardsData);
  }

  // 未ログイン時は「お気に入り」並び替えボタンを非表示
  const isLoggedIn = !!localStorage.getItem("loginUser");
  const favoriteSortBtn = document.querySelector("button[data-sort='favorite']");
  if (!isLoggedIn && favoriteSortBtn)
  {
    favoriteSortBtn.style.display = "none";
  }

  // その他の初期化
  generateProfileList();
  profileList.style.display = "none";
});

