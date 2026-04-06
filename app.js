// デフォルトのテンプレートデータ
const DEFAULT_TEMPLATES = [
  {
    id: 1,
    category: "返信",
    title: "参加します！",
    text: "参加します！よろしくお願いします🙌"
  },
  {
    id: 2,
    category: "返信",
    title: "欠席の連絡",
    text: "申し訳ありません、今回は都合が合わず参加できません😢\nまた次の機会によろしくお願いします！"
  },
  {
    id: 3,
    category: "返信",
    title: "遅刻連絡",
    text: "少し遅れて行きます！\n〇〇分ほど遅刻しそうです、先に始めておいてください🙏"
  },
  {
    id: 4,
    category: "案内文",
    title: "オフ会開催告知",
    text: "【オフ会のお知らせ】\n📅 日時：\n📍 場所：\n💰 費用：\n\n参加希望の方は〇〇までご連絡ください！"
  },
  {
    id: 5,
    category: "案内文",
    title: "集合場所の案内",
    text: "集合場所はこちらです！\n📍 \n\n迷ったら気軽に連絡してください😊"
  },
  {
    id: 6,
    category: "お礼",
    title: "参加お礼",
    text: "今日はありがとうございました！\nとても楽しかったです😊\nまたよろしくお願いします！"
  },
  {
    id: 7,
    category: "お礼",
    title: "幹事へのお礼",
    text: "幹事お疲れ様でした！\n素敵な会を開いてくださってありがとうございます🎉\nまたぜひ参加させてください！"
  }
];

const STORAGE_KEY = "template_board_data";
let templates = [];
let currentCategory = "すべて";

// 起動時に読み込み
function init() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    templates = JSON.parse(saved);
  } else {
    templates = DEFAULT_TEMPLATES;
    save();
  }
  render();

  // Service Worker 登録
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
}

function getCategories() {
  const cats = [...new Set(templates.map(t => t.category))];
  return ["すべて", ...cats];
}

function getFiltered() {
  if (currentCategory === "すべて") return templates;
  return templates.filter(t => t.category === currentCategory);
}

function render() {
  renderTabs();
  renderCards();
  renderCategorySelect();
}

function renderTabs() {
  const tabs = document.getElementById("tabs");
  tabs.innerHTML = "";
  getCategories().forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "tab" + (cat === currentCategory ? " active" : "");
    btn.textContent = cat;
    btn.onclick = () => {
      currentCategory = cat;
      render();
    };
    tabs.appendChild(btn);
  });
}

function renderCards() {
  const list = document.getElementById("card-list");
  const filtered = getFiltered();
  list.innerHTML = "";

  if (filtered.length === 0) {
    list.innerHTML = '<p style="text-align:center;color:#8e8e93;margin-top:40px;">テンプレートがありません</p>';
    return;
  }

  filtered.forEach(t => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-title">${escapeHtml(t.title)}</div>
      <div class="card-text">${escapeHtml(t.text)}</div>
      <button class="card-delete" onclick="deleteTemplate(event, ${t.id})">✕</button>
    `;
    card.addEventListener("click", () => copyTemplate(t));
    list.appendChild(card);
  });
}

function renderCategorySelect() {
  const sel = document.getElementById("form-category");
  const cats = getCategories().filter(c => c !== "すべて");
  sel.innerHTML = cats.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  // 新規カテゴリ入力欄を追加
  sel.innerHTML += `<option value="__new__">＋ 新しいカテゴリを入力...</option>`;
}

function copyTemplate(t) {
  navigator.clipboard.writeText(t.text).then(() => {
    showToast();
  }).catch(() => {
    // iOSでのフォールバック
    const ta = document.createElement("textarea");
    ta.value = t.text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand("copy"); } catch(e) {}
    document.body.removeChild(ta);
    showToast();
  });
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function deleteTemplate(e, id) {
  e.stopPropagation();
  if (!confirm("このテンプレートを削除しますか？")) return;
  templates = templates.filter(t => t.id !== id);
  save();
  render();
}

function showAddForm() {
  renderCategorySelect();
  document.getElementById("form-title").value = "";
  document.getElementById("form-text").value = "";
  document.getElementById("modal-overlay").classList.remove("hidden");
  document.getElementById("add-form").classList.remove("hidden");
  setTimeout(() => document.getElementById("form-title").focus(), 100);
}

function hideAddForm() {
  document.getElementById("modal-overlay").classList.add("hidden");
  document.getElementById("add-form").classList.add("hidden");
}

function addTemplate() {
  let category = document.getElementById("form-category").value;
  const title = document.getElementById("form-title").value.trim();
  const text = document.getElementById("form-text").value.trim();

  if (category === "__new__") {
    category = prompt("新しいカテゴリ名を入力してください：");
    if (!category || !category.trim()) return;
    category = category.trim();
  }

  if (!title || !text) {
    alert("タイトルとテキストを入力してください");
    return;
  }

  const newId = templates.length > 0 ? Math.max(...templates.map(t => t.id)) + 1 : 1;
  templates.push({ id: newId, category, title, text });
  save();
  hideAddForm();
  currentCategory = category;
  render();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

init();
