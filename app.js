// デフォルトのテンプレートデータ
const DEFAULT_TEMPLATES = [
  {
    id: 1,
    category: "未分類",
    title: "すぐに対応できないとき",
    text: "ご連絡ありがとうございます！\n\n後ほど確認し、○時までに返答しますのでもうしばらくお待ちいただけますと幸いです。\n\n引き続きよろしくお願いいたします。"
  },
  {
    id: 2,
    category: "未分類",
    title: "概算の見積りを出すとき",
    text: "正確な見積りが確定したら見積書を提出するイメージ\n\n【確認依頼】\n〇〇株式会社\n〇〇様\n\nご相談いただきありがとうございます！\n以下にお見積もりをまとめましたのでご確認ください。\n\n【見積もり】\n計：○○円\n\n●内訳\n基本料金（○秒）：\nシナリオ費：\n絵コンテ費：\nナレーション外注費：\n\n【納期】\nヒアリング：約2日\nシナリオ制作：約2日\n絵コンテ制作：約7日\nアニメーション制作：約7日\n調整期間：約7日\nナレーション手配~導入：約5日\n-----------------\n計：約30日\n\n※納期につきましては貴社の検収期間にもよりますので、あくまでも目安であることをご了承ください。\n\n何かご不明点があればお気軽にご連絡ください。\n引き続きよろしくお願いいたします。"
  },
  {
    id: 3,
    category: "未分類",
    title: "請求書を提出するとき",
    text: "【確認依頼】\nお世話になっております。\n請求書をお送りいたします。\nお手隙の際にご確認いただけますと幸いです。\n\n何かご不明点があればお気軽にご連絡ください。\n引き続きよろしくお願いいたします。"
  },
  {
    id: 4,
    category: "未分類",
    title: "ヒアリングシートを渡すとき",
    text: "【記入依頼】\nお世話になっております！\nこちらヒアリングシートになりますので、お手数ですが○日までにご記入いただけますと幸いです。\n\n●ヒアリングシート\nhttps://app.milanote.com/1T4ju61TTILDci?p=GUEsMglLghw\n\nまた、ご依頼内容について理解を深めるためにMTGを行いたいのですが、以下にご都合の良い日程はございますか？\n\n①○日　○時～\n②○日　○時～\n③○日　○時～\n\nもし厳しければ、面談可能な日程をご教示いただけますと幸いです。\n何卒よろしくお願いいたします。"
  },
  {
    id: 5,
    category: "未分類",
    title: "初回MTG終了後",
    text: "先ほどは貴重なお時間をいただきありがとうございました。\n以下に議事録をまとめましたのでご確認いただけますと幸いです。\n\n後ほど制作スケジュールを提案いたしますので、もうしばらくお待ちいただけますと幸いです。\n引き続きよろしくお願いいたします。\n\n●議事録\nhttps://docs.google.com/document/d/1utJJtKflQ6Pk8wVdIz0pT3-iqs2sdXfDe6qd0cMg6qI/edit?usp=sharing"
  },
  {
    id: 6,
    category: "未分類",
    title: "スケジュールを提案するとき",
    text: "【確認依頼】\nお世話になっております！\nスケジュールについてご連絡です。\n\n納品までに以下のスケジュールで進めたいと存じますが、いかがでしょうか？\n\nご検討のほどよろしくお願いいたします。\n\n●スケジュール\nhttps://docs.google.com/spreadsheets/d/1qTIwV3389XbqVvtFcTH6iA7dleCjDmyTJk8HZ3PB584/edit?usp=sharing\n\n※修正の量や検収期間によりスケジュールが前後する場合がございますこと、ご了承ください。\n＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝\n以上です。\nお手数ですが○日までにご確認いただければ幸いです。\n何卒よろしくお願いいたします。"
  },
  {
    id: 7,
    category: "未分類",
    title: "保留案件についてきくとき",
    text: "お世話になっております。\n〇〇につきまして、ご状況いかがでしょうか。\n進展ございましたら、ご教示いただけますと幸いです。\n引き続きまして、どうぞよろしくお願いいたします。"
  },
  {
    id: 8,
    category: "未分類",
    title: "初稿提案するとき",
    text: "【確認依頼】\nお世話になっております！\n〇〇を制作させていただきました。\n\nお手数ですが○日までにご確認いただければ幸いです。\n修正点があればお気軽にお申し付けください。\n\n何卒よろしくお願いいたします。\n\n●○○初稿\nhttps://～\n\n※シナリオ、絵コンテ、アニメーションなど"
  },
  {
    id: 9,
    category: "未分類",
    title: "進捗報告（トンマナなど）",
    text: "【確認依頼】\nお世話になっております。\nデザインを○カット制作しましたので、こちらの方向性で問題ないかご確認いただけますと幸いです。\n\nお手数ですが○日までにご確認いただければ幸いです。\n修正点があればお気軽にお申し付けください。\n\n何卒よろしくお願いいたします。"
  },
  {
    id: 10,
    category: "未分類",
    title: "修正依頼への返信",
    text: "【連絡】\nご連絡いただきありがとうございます！\n頂いたご要望につきまして、承知いたしました。\n\n修正は、○日○時を目処にお送りいたします。\n引き続きよろしくお願いいたします。"
  },
  {
    id: 11,
    category: "未分類",
    title: "修正校を提案するとき",
    text: "アニメーションの修正校を提出するときは、YouTubeのタイムスタンプで修正点をまとめると親切です。\n→クライアントがすぐに修正点を確認できるため\n\n【確認依頼】\nお世話になっております！\n\nご依頼をもとに、〇〇を修正させていただきました。\nお手数ですが○日までにご確認いただければ幸いです。\n\n何卒よろしくお願いいたします。\n\n●○○修正校（アニメーション修正校など）\nhttps://～\n\n●変更点\n・\n・\n・"
  },
  {
    id: 12,
    category: "未分類",
    title: "次のステップに進むとき",
    text: "【連絡】\nご確認ありがとうございます！\nそれではこちらの○○（デザインなど）で進行させていただきます。\n\n次回は○○（アニメーションなど）の提出です。\n○○は○日までに共有させていただきます。\n\n引き続きよろしくお願いいたします。"
  },
  {
    id: 13,
    category: "未分類",
    title: "BGMを提案するとき",
    text: "Vコンテ提案時にBGMを選んでもらうのがおすすめ。（VコンテにBGMを挿入して提出）\n\n【確認依頼】\nお世話になっております！\n\nBGMを3つ選定しましたので、イメージのものがありましたらご教示いただけますと幸いです。\n\nお手数ですがよろしくお願いいたします。\n\n●BGM01\nhttps://～\n●BGM02\nhttps://～\n●BGM03\nhttps://～"
  },
  {
    id: 14,
    category: "未分類",
    title: "ナレーションを提案するとき",
    text: "【確認依頼】\nお世話になっております！\n\nナレーションのイメージを3つ添付いたしましたので、ご希望のものがございましたらご教示いただけますと幸いです。\n\nお手数ですがよろしくお願いいたします。\n\n●カジュアルな女性\nhttps://～\n●フォーマルな女性\nhttps://～\n●元気な女性\nhttps://～"
  },
  {
    id: 15,
    category: "未分類",
    title: "納品時の連絡",
    text: "【連絡】\nお世話になっております。\nmp4データをお送りしますので、ご確認いただければ幸いです。\n\nご不明な点やご質問がございましたら、お気軽にお知らせください。"
  }
];

const STORAGE_KEY = "template_board_data";
let templates = [];
let currentCategory = "すべて";
let editingId = null;

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
      <button class="card-edit" onclick="showEditForm(event, ${t.id})">✏️</button>
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
  sel.innerHTML += `<option value="__new__">＋ 新しいカテゴリを入力...</option>`;
}

function copyTemplate(t) {
  navigator.clipboard.writeText(t.text).then(() => {
    showToast();
  }).catch(() => {
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
  editingId = null;
  renderCategorySelect();
  document.getElementById("form-title").value = "";
  document.getElementById("form-text").value = "";
  document.getElementById("form-heading").textContent = "テンプレートを追加";
  document.getElementById("modal-overlay").classList.remove("hidden");
  document.getElementById("add-form").classList.remove("hidden");
  setTimeout(() => document.getElementById("form-title").focus(), 100);
}

function showEditForm(event, id) {
  event.stopPropagation();
  const t = templates.find(t => t.id === id);
  if (!t) return;
  editingId = id;
  renderCategorySelect();
  const sel = document.getElementById("form-category");
  let found = false;
  for (let opt of sel.options) {
    if (opt.value === t.category) { sel.value = t.category; found = true; break; }
  }
  if (!found) {
    const opt = document.createElement("option");
    opt.value = t.category;
    opt.textContent = t.category;
    sel.insertBefore(opt, sel.options[sel.options.length - 1]);
    sel.value = t.category;
  }
  document.getElementById("form-title").value = t.title;
  document.getElementById("form-text").value = t.text;
  document.getElementById("form-heading").textContent = "テンプレートを編集";
  document.getElementById("modal-overlay").classList.remove("hidden");
  document.getElementById("add-form").classList.remove("hidden");
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

  if (editingId !== null) {
    templates = templates.map(t =>
      t.id === editingId ? { ...t, category, title, text } : t
    );
    editingId = null;
  } else {
    const newId = templates.length > 0 ? Math.max(...templates.map(t => t.id)) + 1 : 1;
    templates.push({ id: newId, category, title, text });
    currentCategory = category;
  }

  save();
  hideAddForm();
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
