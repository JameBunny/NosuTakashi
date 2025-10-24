// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu){ burger.addEventListener('click', ()=> menu.classList.toggle('open')); }

// Reveal on view
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
},{ threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const T = {
  en: {
    nav_home:"Home", nav_shop:"Shop", nav_contact:"Contact", nav_about:"About Us",
    hero_title:"I’m a gamer caster — watch, support, and collect my LINE stickers!",
    hero_sub:"Catch my latest gaming videos and grab official goodies. Start with my LINE sticker sets below.",
    hero_cta_shop:"Visit the Shop", hero_cta_stickers:"Get LINE Stickers",
    latest_videos:"Latest videos",
    highlight_title:"Featured: My LINE Stickers",
    highlight_body:"Love my streams? Grab these official LINE sticker sets to use with your friends.",
    browse_stickers:"Browse Stickers", coming_apparel:"Apparel (Coming Soon)",
    shop_title:"Shop",
    shop_sub_gamer:"Official LINE sticker sets are available now. Apparel and more gamer merch coming soon.",
    tab_stickers:"LINE Stickers", tab_apparel:"Apparel (Soon)",
    sticker_set1_title:"Sticker Set 1",
    sticker_set2_title:"Sticker Set 2",
    sticker_set_desc:"Use my signature reactions from the stream!",
    sticker_set_desc2:"Fresh emotes and inside jokes from my channel.",
    buy_on_line:"Buy on LINE Store", view_details:"View details",
    coming_soon:"Coming Soon", apparel_tee:"Creator Tee",
    notify_when_drop:"Merch drops soon — stay tuned!", notify_me:"Notify me (soon)",
    footer:"© 2025 My Channel. All rights reserved."
  },
  th: {
    nav_home:"หน้าแรก", nav_shop:"ร้านค้า", nav_contact:"ติดต่อ", nav_about:"เกี่ยวกับเรา",
    hero_title:"ฉันเป็นนักแคสเกม — มาดูคลิปและสะสม LINE Stickers ของฉัน!",
    hero_sub:"ชมคลิปเกมล่าสุดและอุดหนุนสินค้าทางการ เริ่มจากชุดสติ๊กเกอร์ไลน์ได้เลย",
    hero_cta_shop:"เข้าร้านค้า", hero_cta_stickers:"ซื้อ LINE Stickers",
    latest_videos:"วิดีโอล่าสุด",
    highlight_title:"แนะนำ: LINE Stickers ของฉัน",
    highlight_body:"ชอบสตรีมของฉันไหม? ใช้สติ๊กเกอร์ลายทางการชุดนี้กับเพื่อนได้เลย",
    browse_stickers:"ดูสติ๊กเกอร์", coming_apparel:"เสื้อผ้า (เร็ว ๆ นี้)",
    shop_title:"ร้านค้า",
    shop_sub_gamer:"ตอนนี้มีสติ๊กเกอร์ไลน์ให้ซื้อแล้ว อนาคตจะมีเสื้อผ้าและสินค้ากีฬาเกมเมอร์เพิ่ม",
    tab_stickers:"สติ๊กเกอร์ LINE", tab_apparel:"เสื้อผ้า (เร็ว ๆ นี้)",
    sticker_set1_title:"สติ๊กเกอร์ชุด 1",
    sticker_set2_title:"สติ๊กเกอร์ชุด 2",
    sticker_set_desc:"มีท่าทางซิกเนเจอร์จากสตรีมของฉัน!",
    sticker_set_desc2:"อีโมตใหม่และมุกลับจากช่อง",
    buy_on_line:"ซื้อที่ LINE Store", view_details:"ดูรายละเอียด",
    coming_soon:"เร็ว ๆ นี้", apparel_tee:"เสื้อยืด Creator",
    notify_when_drop:"สินค้าเมอร์ช์จะเปิดขายเร็ว ๆ นี้ ติดตามได้เลย!", notify_me:"แจ้งเตือนฉัน (เร็ว ๆ นี้)",
    footer:"© 2025 ช่องของฉัน สงวนลิขสิทธิ์"
  },
  ja: {
    nav_home:"ホーム", nav_shop:"ショップ", nav_contact:"お問い合わせ", nav_about:"私たちについて",
    hero_title:"ゲーム配信者です — 視聴＆応援＆LINEスタンプをゲット！",
    hero_sub:"最新のゲーム動画をチェックして、公式グッズを手に入れよう。まずはLINEスタンプから。",
    hero_cta_shop:"ショップへ", hero_cta_stickers:"LINEスタンプを見る",
    latest_videos:"最新の動画",
    highlight_title:"注目：公式LINEスタンプ",
    highlight_body:"配信が好きなら、この公式スタンプを友だちと使ってね。",
    browse_stickers:"スタンプ一覧", coming_apparel:"アパレル（近日公開）",
    shop_title:"ショップ",
    shop_sub_gamer:"現在はLINEスタンプを販売中。今後アパレルなども予定。",
    tab_stickers:"LINEスタンプ", tab_apparel:"アパレル（近日）",
    sticker_set1_title:"スタンプセット 1",
    sticker_set2_title:"スタンプセット 2",
    sticker_set_desc:"配信の決めポーズを収録！",
    sticker_set_desc2:"新しいエモート＆内輪ネタも！",
    buy_on_line:"LINEストアで購入", view_details:"詳細を見る",
    coming_soon:"近日公開", apparel_tee:"クリエイターTシャツ",
    notify_when_drop:"まもなくリリース！お楽しみに。", notify_me:"通知を受け取る（近日）",
    footer:"© 2025 My Channel. All rights reserved."
  }
};

function applyLang(lang){
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const pack = T[lang] || T.en;
    if (el.tagName === 'INPUT' && (el.type === 'submit' || el.type === 'button')){
      el.value = pack[key];
    } else if (el.placeholder) {
      el.placeholder = pack[key];
    } else if (pack[key]) {
      el.textContent = pack[key];
    }
  });
  const select = document.getElementById('lang-select');
  if (select) select.value = lang;
}

// Flip images on product cards (ignore clicks on buttons/links)
function initProductCards(){
  document.querySelectorAll('.product').forEach(card=>{
    card.addEventListener('click', e=>{
      if (e.target.closest('.btn') || e.target.closest('.link')) return;
      card.classList.toggle('active');
    });
  });
}

// Simple tabs: show/hide categories
function initTabs(){
  const tabs = document.querySelectorAll('.tab');
  const items = document.querySelectorAll('.product');
  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
      tabs.forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.dataset.tab;
      items.forEach(it=>{
        const match = it.getAttribute('data-category') === key;
        it.classList.toggle('hidden', !match);
      });
      // scroll to first row after switching
      const products = document.getElementById('products');
      if (products) products.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
  // If URL hash matches tab id (e.g. #stickers)
  const hash = location.hash.replace('#','');
  const target = Array.from(tabs).find(t => t.id === hash);
  if (target){ target.click(); }
}

document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('lang') || (navigator.language || 'en').slice(0,2);
  const lang = ['en','th','ja'].includes(saved) ? saved : 'en';
  applyLang(lang);
  const select = document.getElementById('lang-select');
  if (select) select.addEventListener('change', e=> applyLang(e.target.value));

  initProductCards();
  initTabs();
});
