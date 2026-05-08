const MAX_CARDS = 10;
const MAX_WEIGHT = 15;
const MAX_ZERO = 3;
const MAX_USE = 5;

const cards = [
  { id: 1, name: "飲料水", weight: 2, category: "自己完結・安全管理", description: "支援者自身の水分補給。現地の水を消費せず活動を継続できる。" },
  { id: 2, name: "非常食", weight: 2, category: "自己完結・安全管理", description: "支援者自身の食事確保。長時間活動時のエネルギー補給に使える。" },
  { id: 3, name: "常備薬", weight: 1, category: "自己完結・安全管理", description: "自分の体調管理。支援者が活動不能になることを防ぐ。" },
  { id: 4, name: "モバイルバッテリー", weight: 2, category: "自己完結・安全管理", description: "連絡・情報収集・地図確認を継続する。" },
  { id: 5, name: "充電ケーブル", weight: 1, category: "自己完結・安全管理", description: "スマートフォンや機器の充電に必要。バッテリーと組み合わせると強い。" },
  { id: 6, name: "雨具", weight: 2, category: "自己完結・安全管理", description: "雨・風・寒さから身を守り、屋外活動を継続できる。" },
  { id: 7, name: "着替え", weight: 2, category: "自己完結・安全管理", description: "汗・雨・汚れへの対応。衛生と活動継続に役立つ。" },
  { id: 8, name: "休憩用のお菓子", weight: 1, category: "自己完結・安全管理", description: "支援者の疲労回復。チーム内の休憩や気分転換にも使える。" },
  { id: 9, name: "スリッパ・室内履き", weight: 1, category: "自己完結・安全管理", description: "避難所内や宿泊場所で足元を守る。ガラス片や冷え対策にもなる。" },
  { id: 10, name: "小型ライト", weight: 1, category: "自己完結・安全管理", description: "停電時や夕方以降の移動・作業に使える。" },

  { id: 11, name: "軍手", weight: 1, category: "現場作業・衛生", description: "物資運搬、片づけ、掲示作業などで手を守る。" },
  { id: 12, name: "マスク", weight: 1, category: "現場作業・衛生", description: "感染対策、粉じん対策、避難所内活動時の基本装備。" },
  { id: 13, name: "消毒液", weight: 1, category: "現場作業・衛生", description: "手指衛生を保つ。避難所支援や交流活動前後に使える。" },
  { id: 14, name: "ウェットティッシュ", weight: 1, category: "現場作業・衛生", description: "手指・机・物品の清拭に使える。水が使いにくい場面で便利。" },
  { id: 15, name: "タオル", weight: 1, category: "現場作業・衛生", description: "清拭、防寒、応急処置、目隠しなど多用途。" },
  { id: 16, name: "ビニール袋", weight: 1, category: "現場作業・衛生", description: "ごみ分別、汚物処理、物品整理、防水、簡易仕分けに使える。" },
  { id: 17, name: "養生テープ", weight: 1, category: "現場作業・衛生", description: "掲示、導線づくり、物品固定、簡易補修に使える。" },
  { id: 18, name: "掲示用紙", weight: 1, category: "現場作業・衛生", description: "受付案内、物資配布情報、サロン告知などを見える化できる。" },
  { id: 19, name: "簡易トイレ", weight: 3, category: "現場作業・衛生", description: "断水時の排泄対策。避難所支援で非常に重要だが重め。" },
  { id: 20, name: "トイレットペーパー", weight: 1, category: "現場作業・衛生", description: "排泄・衛生の基本。避難所や支援活動時に不足しやすい。" },

  { id: 21, name: "スマートフォン", weight: 2, category: "情報整理・つなぐ", description: "連絡、地図、記録、写真、情報確認に使える。ただし個人情報管理に注意。" },
  { id: 22, name: "筆記用具", weight: 1, category: "情報整理・つなぐ", description: "困りごと、物資ニーズ、気づきを記録し、専門職や運営者につなげる。" },
  { id: 23, name: "メモ帳", weight: 1, category: "情報整理・つなぐ", description: "聞き取り内容や支援メモを残す。筆記用具と組み合わせると強い。" },
  { id: 24, name: "名札・学生証", weight: 1, category: "情報整理・つなぐ", description: "自分たちが何者かを示し、住民や運営者の安心につながる。" },
  { id: 25, name: "相談先リスト", weight: 1, category: "情報整理・つなぐ", description: "保健師、看護師、自治会、行政、支援団体などにつなぐための情報。" },
  { id: 26, name: "地域マップ", weight: 2, category: "情報整理・つなぐ", description: "仮設住宅、集会所、避難所、医療・福祉資源の位置確認に使える。" },
  { id: 27, name: "予定表テンプレート", weight: 1, category: "情報整理・つなぐ", description: "サロン活動、見守り、支援予定を見える化し、継続支援につなげる。" },
  { id: 28, name: "受付チェックシート", weight: 1, category: "情報整理・つなぐ", description: "受付補助、参加者確認、ニーズ整理に使える。" },
  { id: 29, name: "多言語メモカード", weight: 1, category: "情報整理・つなぐ", description: "外国人住民や観光客への簡単な案内に使える。" },
  { id: 30, name: "ホワイトボードマーカー", weight: 1, category: "情報整理・つなぐ", description: "避難所掲示板や説明用ボードに情報を書き出せる。" },

  { id: 31, name: "体温計", weight: 2, category: "健康支援", description: "体調不良者への気づき、感染症疑いの把握に使える。診断はしない。" },
  { id: 32, name: "血圧計", weight: 3, category: "健康支援", description: "高齢者や慢性疾患を持つ人の健康確認に使えるが、測定後のつなぎも必要。" },
  { id: 33, name: "お薬手帳", weight: 1, category: "健康支援", description: "服薬情報を確認し、医療者につなぐ際に役立つ。本人のものを確認する視点。" },
  { id: 34, name: "救急セット", weight: 2, category: "健康支援", description: "軽いけがの応急対応に使える。無理な医療行為はしない。" },
  { id: 35, name: "口腔ケア用品", weight: 1, category: "健康支援", description: "口腔衛生を保つ。高齢者の肺炎予防や生活の質にも関係する。" },
  { id: 36, name: "体操カード", weight: 1, category: "健康支援", description: "避難所・仮設住宅での生活不活発予防に使える。" },
  { id: 37, name: "熱中症・低体温チェックカード", weight: 1, category: "健康支援", description: "暑さ・寒さによる体調変化に気づくための確認ツール。" },
  { id: 38, name: "感染対策ミニポスター", weight: 1, category: "健康支援", description: "手洗い・咳エチケット・換気などをわかりやすく伝える。" },
  { id: 39, name: "水分補給声かけカード", weight: 1, category: "健康支援", description: "トイレ不安などで水分を控える人への声かけに使える。" },
  { id: 40, name: "生活リズムチェック表", weight: 1, category: "健康支援", description: "睡眠、食事、活動、排泄などの生活状況に気づくきっかけになる。" },

  { id: 41, name: "トランプ", weight: 1, category: "交流・心理支援", description: "子どもや高齢者との交流、気分転換、サロン活動に使える。" },
  { id: 42, name: "折り紙", weight: 1, category: "交流・心理支援", description: "子ども、高齢者、多世代交流に使いやすい。静かな活動にも向く。" },
  { id: 43, name: "お茶セット", weight: 2, category: "交流・心理支援", description: "会話の入口、サロン活動、孤立予防に使える。" },
  { id: 44, name: "交流用お菓子", weight: 1, category: "交流・心理支援", description: "住民との会話や場づくりのきっかけ。ただし配布の公平性に注意。" },
  { id: 45, name: "傾聴スキルカード", weight: 0, category: "交流・心理支援", description: "話を遮らず、評価せずに聴く姿勢を思い出す。支援拒否にも有効。" },
  { id: 46, name: "子ども遊びカード", weight: 1, category: "交流・心理支援", description: "子どもの見守り、退屈・不安への対応に使える。" },
  { id: 47, name: "思い出アルバム台紙", weight: 2, category: "交流・心理支援", description: "思い出や語りの支援に使える。ただし感情への配慮が必要。" },

  { id: 48, name: "ボランティア精神", weight: 0, category: "メンタル・ネタ枠", description: "支援の出発点。ただし、これだけでは支援は成立しない。" },
  { id: 49, name: "笑顔", weight: 0, category: "メンタル・ネタ枠", description: "関係づくりの入口。ただし、相手の状況に合わない笑顔は押しつけになる。" },
  { id: 50, name: "休む力", weight: 0, category: "メンタル・ネタ枠", description: "支援者が倒れないために必要。無理せず活動を継続する力。" }
];

const cats = [
  "すべて",
  "自己完結・安全管理",
  "現場作業・衛生",
  "情報整理・つなぐ",
  "健康支援",
  "交流・心理支援",
  "メンタル・ネタ枠"
];

const missions = [
  {
    id: "mission1",
    label: "Mission 1",
    max: 15,
    title: "避難所支援ミッション",
    scenario: `
      <p>災害から3日後。あなたたちは学生支援ボランティアとして、地域の避難所に入りました。</p>
      <p>物資は届き始めていますが、仕分けや配布が追いついていません。受付では、誰がどこにいるのか、どんな困りごとがあるのかを整理する必要があります。</p>
      <p>トイレや手指衛生にも課題があります。咳をしている人が増えてきており、感染対策も気になります。高齢者の中には「トイレが遠いから水を控えている」と話す人がいます。持病の薬が少なくなっている人もいます。</p>
      <p>子どもたちは退屈して走り回り、保護者も疲れています。支援者である皆さん自身も、長時間活動で疲れ始めています。</p>
    `,
    criteria: [
      ["支援内容が具体的", 5, "物資整理、受付、声かけ、衛生、記録など具体的な行動がある。"],
      ["避難所の状況に合っている", 5, "高齢者、子ども、衛生、服薬、疲労などに気づいている。"],
      ["カードをうまく活用している", 5, "選んだカードの使い方が現実的で説明できる。"]
    ],
    model: "避難所支援では、学生がすべてを解決する必要はありません。現地の運営を邪魔せず、困りごとに気づき、記録して、看護師・保健師・避難所運営者などにつなぐことが重要です。衛生と安全を守り、支援者自身も水分補給や休憩を取り、倒れないように活動します。"
  },
  {
    id: "pinch",
    label: "ピンチカード",
    max: 10,
    title: "学生に何ができるの？",
    scenario: `
      <p><strong>【ピンチカード発動】</strong></p>
      <p>避難所で活動していると、ある住民からこう言われました。</p>
      <p><strong>「学生に何ができるの？」<br>「専門職じゃないのに、来ても役に立つの？」</strong></p>
      <p>あなたたちは、どう答えますか？ そして、どのカードを使って、どのように行動しますか？</p>
    `,
    criteria: [
      ["学生にもできる支援を説明できた", 5, "声かけ、記録、物資整理、見守り、つなぐ支援を説明できる。"],
      ["無理せず、つなぐ視点がある", 5, "専門職ぶらず、限界を理解し、適切につなぐ。"]
    ],
    model: "できないことをできるふりをしてはいけません。しかし、学生にもできる支援はあります。物資整理、受付補助、子どもの見守り、困りごとの記録、声かけ、専門職や運営者につなぐことなどです。住民の不信感や疲れを受け止め、支援を押しつけず、学生だけで抱え込まない姿勢が重要です。"
  },
  {
    id: "mission2",
    label: "Mission 2",
    max: 15,
    title: "復興期・地域支援ミッション",
    scenario: `
      <p>災害から数か月が経ちました。避難所は閉じられ、住民は仮設住宅、在宅避難、親族宅、元の住まいなど、さまざまな場所で生活しています。</p>
      <p>仮設住宅で一人暮らしをしている高齢者は「誰とも話さない日がある」と話しています。子どもたちは遊ぶ場所が少なく、保護者も疲れています。サロン活動を開こうとしていますが、参加者は少なく、地域のつながりはまだ戻っていません。</p>
      <p>住民の中には「もう何度も同じことを聞かれた」「支援はもういらない」と話す人もいます。</p>
      <p>あなたたちは、どのカードを使って、どのように地域の人と関わりますか？ 一回限りで終わらせないために、どんな工夫をしますか？</p>
    `,
    criteria: [
      ["住民の気持ちに配慮している", 5, "支援拒否、疲れ、不安、孤立を尊重している。"],
      ["継続性・地域につなぐ視点がある", 5, "一回限りでなく、地域資源や次回につなげている。"],
      ["カードをうまく活用している", 5, "交流・記録・見守り・健康支援にカードを使えている。"]
    ],
    model: "復興期には、孤立、不安、疲労、生活不活発、地域のつながりの低下が見えにくい形で続きます。支援を押しつけず、挨拶、雑談、お茶、遊び、短時間の交流から関係性をつくります。一回限りで終わらせず、予定表や掲示、自治会・保健師・地域包括支援センターなどにつなぐ視点が大切です。"
  }
];

const typeDesc = {
  "自己完結・安全管理": [
    "自己完結型ボランティア",
    "自分たちの安全と活動継続を大切にできるチームです。現地の資源を奪わずに活動できることは、支援者として重要です。"
  ],
  "現場作業・衛生": [
    "現場サポート職人タイプ",
    "物資整理、衛生環境づくり、掲示、導線づくりなど、現場で手を動かす支援に強いチームです。"
  ],
  "情報整理・つなぐ": [
    "つなぐ支援コーディネータータイプ",
    "困りごとを記録し、整理し、専門職や運営者につなぐ力があるチームです。"
  ],
  "健康支援": [
    "まちの保健室タイプ",
    "体調変化、生活不活発、服薬、水分、口腔ケアなど、健康に関わる小さなサインに気づけるチームです。"
  ],
  "交流・心理支援": [
    "交流クリエイタータイプ",
    "子ども、高齢者、住民同士の交流を作ることが得意なチームです。"
  ],
  "メンタル・ネタ枠": [
    "気持ちは満点・準備も忘れずタイプ",
    "支援に向かう気持ちは大切です。ただし、具体的な物品、記録、連携、自己管理も必要です。"
  ]
};

const S = {
  teamName: "",
  members: "",
  sel: [],
  filter: "すべて",
  mi: 0,
  answers: {},
  scores: {},
  godItem: "",
  godReason: "",
  godScore: 0,
  typeKey: "",
  typeTitle: "",
  typeText: ""
};

const $ = id => document.getElementById(id);

let currentScreenId = "start";
let currentBadge = "START";
let navHistory = [];

function show(id, badge, options = {}) {
  const push = options.push !== false;

  if (push && currentScreenId && currentScreenId !== id) {
    navHistory.push({
      screenId: currentScreenId,
      badge: currentBadge,
      mi: S.mi
    });
  }

  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");

  $("stage").textContent = badge;

  currentScreenId = id;
  currentBadge = badge;

  updateBackButton();
  window.scrollTo(0, 0);
}

function goBack() {
  if (!navHistory.length) return;

  const prev = navHistory.pop();

  // ミッション番号も復元する
  S.mi = prev.mi;

  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(prev.screenId).classList.add("active");

  $("stage").textContent = prev.badge;

  currentScreenId = prev.screenId;
  currentBadge = prev.badge;

  updateBackButton();
  window.scrollTo(0, 0);
}

function updateBackButton() {
  const btn = $("backBtn");
  if (!btn) return;

  btn.style.display = navHistory.length ? "inline-block" : "none";
}

function createBackButton() {
  if ($("backBtn")) return;

  const stage = $("stage");
  if (!stage) return;

  const btn = document.createElement("button");
  btn.id = "backBtn";
  btn.type = "button";
  btn.className = "btn secondary back-btn";
  btn.textContent = "← 戻る";
  btn.style.display = "none";
  btn.onclick = goBack;

  stage.parentElement.insertBefore(btn, stage);
}

function selCards() {
  return S.sel.map(id => cards.find(c => c.id === id)).filter(Boolean);
}

function tw() {
  return selCards().reduce((a, c) => a + c.weight, 0);
}

function zc() {
  return selCards().filter(c => c.weight === 0).length;
}

function counters() {
  $("count").textContent = S.sel.length;
  $("weight").textContent = tw();
  $("zero").textContent = zc();
}

function renderFilters() {
  $("filters").innerHTML = cats.map(c => `
    <button class="filter ${S.filter === c ? "active" : ""}" data-f="${escapeHtml(c)}">${escapeHtml(c)}</button>
  `).join("");

  document.querySelectorAll(".filter").forEach(b => {
    b.onclick = () => {
      S.filter = b.dataset.f;
      renderFilters();
      renderGrid();
    };
  });
}

function renderGrid() {
  const arr = S.filter === "すべて"
    ? cards
    : cards.filter(c => c.category === S.filter);

  $("grid").innerHTML = arr.map(c => `
    <div class="item ${S.sel.includes(c.id) ? "selected" : ""}" data-id="${c.id}">
      <span class="no">No.${c.id}</span>
      <span class="w">${c.weight}pt</span>
      <h3>${escapeHtml(c.name)}</h3>
      <span class="cat">${escapeHtml(c.category)}</span>
      <p>${escapeHtml(c.description)}</p>
    </div>
  `).join("");

  document.querySelectorAll(".item").forEach(el => {
    el.onclick = () => toggle(Number(el.dataset.id));
  });

  counters();
}

function toggle(id) {
  const c = cards.find(x => x.id === id);
  $("warn").textContent = "";

  if (S.sel.includes(id)) {
    S.sel = S.sel.filter(x => x !== id);
  } else {
    if (S.sel.length >= MAX_CARDS) {
      $("warn").textContent = "最大10枚までです。";
      return;
    }
    if (tw() + c.weight > MAX_WEIGHT) {
      $("warn").textContent = "15ptを超えます。";
      return;
    }
    if (c.weight === 0 && zc() >= MAX_ZERO) {
      $("warn").textContent = "0ptカードは最大3枚までです。";
      return;
    }
    S.sel.push(id);
  }

  renderGrid();
}

function mini(el) {
  $(el).innerHTML = selCards()
    .map(c => `<span class="mini">${escapeHtml(c.name)}（${c.weight}pt）</span>`)
    .join("");
}

function renderMission() {
  const m = missions[S.mi];

  $("mLabel").textContent = m.label;
  $("mTitle").textContent = m.title;
  $("mScenario").innerHTML = m.scenario;
  $("answer").value = "";
  $("connect").value = "";

  $("useCards").innerHTML = selCards().map(c => `
    <label class="check">
      <input type="checkbox" value="${c.id}">
      <span>
        <strong>${escapeHtml(c.name)}</strong>（${escapeHtml(c.category)}）<br>
        <small>${escapeHtml(c.description)}</small>
      </span>
    </label>
  `).join("");

  document.querySelectorAll("#useCards input").forEach(i => {
    i.onchange = () => {
      if (document.querySelectorAll("#useCards input:checked").length > MAX_USE) {
        i.checked = false;
        alert("最大5枚までです。");
      }
    };
  });

  mini("bagMini");
  show("mission", m.label);
}

function collect() {
  const a = $("answer").value.trim();
  const co = $("connect").value.trim();

  if (!a) {
    alert("支援内容を入力してください。");
    return false;
  }

  const ids = [...document.querySelectorAll("#useCards input:checked")]
    .map(i => Number(i.value));

  const m = missions[S.mi];

  S.answers[m.id] = {
    answer: a,
    connect: co,
    usedIds: ids,
    usedNames: ids.map(id => cards.find(c => c.id === id).name)
  };

  return true;
}

function renderReview() {
  const m = missions[S.mi];
  const a = S.answers[m.id];

  $("rLabel").textContent = m.label;
  $("rTitle").textContent = m.title;
  $("rAnswer").textContent = a.answer;
  $("rConnect").textContent = a.connect || "未記入";
  $("rCards").textContent = a.usedNames.join("、") || "なし";
  $("model").textContent = m.model;
  $("rMax").textContent = `/${m.max}点`;

  $("scores").innerHTML = m.criteria.map((c, i) => `
    <div class="scoreLine">
      <strong>${escapeHtml(c[0])}</strong>：
      <span id="sv${i}">0</span>/${c[1]}点
      <p>${escapeHtml(c[2])}</p>
      <input type="range" min="0" max="${c[1]}" value="0" data-i="${i}">
    </div>
  `).join("");

  document.querySelectorAll("#scores input").forEach(inp => {
    inp.oninput = scoreUpdate;
  });

  scoreUpdate();
  show("review", "自己採点");
}

function scoreUpdate() {
  let t = 0;

  document.querySelectorAll("#scores input").forEach(inp => {
    const v = Number(inp.value);
    t += v;
    $("sv" + inp.dataset.i).textContent = v;
  });

  $("rTotal").textContent = t;
}

function saveScore() {
  const m = missions[S.mi];
  let t = 0;

  document.querySelectorAll("#scores input").forEach(i => {
    t += Number(i.value);
  });

  S.scores[m.id] = {
    total: t,
    max: m.max
  };
}

function renderGod() {
  $("godItem").innerHTML =
    '<option value="">選択してください</option>' +
    selCards().map(c => `<option>${escapeHtml(c.name)}</option>`).join("");

  show("god", "神アイテム");
}

function counts() {
  const o = {};
  cats.slice(1).forEach(c => o[c] = 0);
  selCards().forEach(c => o[c.category]++);
  return o;
}

function type() {
  const cs = counts();
  const top = Object.entries(cs).sort((a, b) => b[1] - a[1])[0][0];

  S.typeKey = top;
  S.typeTitle = typeDesc[top][0];
  S.typeText = typeDesc[top][1];
}

function renderType() {
  type();

  $("typeBox").innerHTML = `
    <h3>${escapeHtml(S.typeTitle)}</h3>
    <p>${escapeHtml(S.typeText)}</p>
  `;

  const cs = counts();
  const mx = Math.max(...Object.values(cs), 1);

  $("bars").innerHTML = Object.entries(cs).map(([k, v]) => `
    <div class="bar">
      <strong>${escapeHtml(k)}</strong>：${v}枚
      <div class="track">
        <div class="fill" style="width:${(v / mx) * 100}%"></div>
      </div>
    </div>
  `).join("");

  show("type", "タイプ診断");
}

function total() {
  return Object.values(S.scores).reduce((a, s) => a + s.total, 0) + S.godScore;
}

function subText() {
  const l = [];

  l.push("【学生支援クエスト 提出用】");
  l.push(`チーム名：${S.teamName || "未記入"}`);
  if (S.members) l.push(`メンバー：${S.members}`);

  l.push("\n■ 支援活動バッグ");
  selCards().forEach(c => {
    l.push(`- No.${c.id} ${c.name}（${c.weight}pt／${c.category}）`);
  });
  l.push(`合計重量：${tw()}/15pt、0ptカード：${zc()}/3枚\n`);

  missions.forEach(m => {
    const a = S.answers[m.id] || {};
    const s = S.scores[m.id] || { total: 0, max: m.max };

    l.push(`■ ${m.label}：${m.title}`);
    l.push(`使用カード：${(a.usedNames || []).join("、") || "なし"}`);
    l.push(`支援内容：${a.answer || "未記入"}`);
    l.push(`つなぐ視点：${a.connect || "未記入"}`);
    l.push(`自己採点：${s.total}/${s.max}点\n`);
  });

  l.push("■ 神アイテム");
  l.push(`カード：${S.godItem}`);
  l.push(`理由：${S.godReason || "未記入"}`);
  l.push(`自己採点：${S.godScore}/5点\n`);

  l.push("■ チームタイプ診断");
  l.push(S.typeTitle);
  l.push(S.typeText);

  l.push(`\n■ 合計得点：${total()}/45点`);

  return l.join("\n");
}

function payload() {
  return {
    eventCode: EVENT_CODE,
    submittedAt: new Date().toISOString(),
    teamName: S.teamName,
    members: S.members,
    selectedCards: selCards(),
    missionAnswers: S.answers,
    missionScores: S.scores,
    godItem: S.godItem,
    godReason: S.godReason,
    godScore: S.godScore,
    teamType: {
      key: S.typeKey,
      title: S.typeTitle,
      text: S.typeText
    },
    totalScore: total(),
    submissionText: subText()
  };
}

function renderResult() {
  $("resTitle").textContent = `${S.teamName || "あなたのチーム"} の結果`;
  $("finalScore").textContent = total();
  $("submission").value = subText();

  $("resType").innerHTML = `
    <strong>${escapeHtml(S.typeTitle)}</strong>
    <p>${escapeHtml(S.typeText)}</p>
  `;

  mini("resBag");

  $("resScores").innerHTML =
    missions.map(m => `
      <div class="box">
        <strong>${escapeHtml(m.label)}：${escapeHtml(m.title)}</strong><br>
        ${S.scores[m.id].total}/${m.max}点
      </div>
    `).join("") +
    `<div class="box">
      <strong>神アイテム</strong><br>
      ${escapeHtml(S.godItem)}：${S.godScore}/5点
    </div>`;

  show("result", "RESULT");
}

function download(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

function submitToGasByForm() {
  if (!GAS_WEB_APP_URL || GAS_WEB_APP_URL.includes("PASTE_")) {
    $("sendMsg").textContent = "GAS_WEB_APP_URLが未設定です。config.jsを編集してください。";
    return;
  }

  try {
    const data = payload();

    $("sendMsg").textContent = "送信中です...";

    const oldFrame = document.getElementById("gasSubmitFrame");
    if (oldFrame) oldFrame.remove();

    const iframe = document.createElement("iframe");
    iframe.name = "gasSubmitFrame";
    iframe.id = "gasSubmitFrame";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const oldForm = document.getElementById("gasSubmitForm");
    if (oldForm) oldForm.remove();

    const form = document.createElement("form");
    form.id = "gasSubmitForm";
    form.method = "POST";
    form.action = GAS_WEB_APP_URL;
    form.target = "gasSubmitFrame";
    form.style.display = "none";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "payload";
    input.value = JSON.stringify(data);

    form.appendChild(input);
    document.body.appendChild(form);

    form.submit();

    setTimeout(() => {
      $("sendMsg").textContent = "送信しました。教員用ダッシュボードを更新して確認してください。";
    }, 1200);

  } catch (e) {
    $("sendMsg").textContent = "送信に失敗しました。提出用テキストをコピーして提出してください。";
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// イベント設定
$("startBtn").onclick = () => show("team", "TEAM");

$("teamNext").onclick = () => {
  S.teamName = $("teamName").value.trim();
  S.members = $("members").value.trim();
  renderFilters();
  renderGrid();
  show("bag", "BAG");
};

$("reset").onclick = () => {
  S.sel = [];
  renderGrid();
};

$("toMission").onclick = () => {
  if (S.sel.length === 0) {
    $("warn").textContent = "少なくとも1枚選んでください。";
    return;
  }

  S.mi = 0;
  renderMission();
};

$("submitMission").onclick = () => {
  if (collect()) renderReview();
};

$("nextReview").onclick = () => {
  saveScore();

  if (S.mi < missions.length - 1) {
    S.mi++;
    renderMission();
  } else {
    renderGod();
  }
};

$("godScore").oninput = () => {
  $("godVal").textContent = $("godScore").value;
};

$("toType").onclick = () => {
  S.godItem = $("godItem").value;
  S.godReason = $("godReason").value.trim();
  S.godScore = Number($("godScore").value);

  if (!S.godItem) {
    alert("神アイテムを選んでください。");
    return;
  }

  renderType();
};

$("toResult").onclick = renderResult;

$("copy").onclick = async () => {
  try {
    await navigator.clipboard.writeText($("submission").value);
    $("sendMsg").textContent = "コピーしました。";
  } catch (e) {
    $("submission").select();
    document.execCommand("copy");
    $("sendMsg").textContent = "コピーしました。";
  }
};

$("downloadTxt").onclick = () => {
  download("student_support_quest.txt", $("submission").value, "text/plain;charset=utf-8");
};

$("downloadJson").onclick = () => {
  download("student_support_quest.json", JSON.stringify(payload(), null, 2), "application/json;charset=utf-8");
};

$("sendGas").onclick = submitToGasByForm;
