// Mobile menu toggle
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu){
  burger.addEventListener('click', ()=> menu.classList.toggle('open'));
}

// Intersection reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
},{ threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Language i18n
const T = {
  en: {
    nav_home: "Home",
    nav_shop: "Shop",
    nav_contact: "Contact",
    nav_about: "About Us",
    hero_title: "Welcome to my YouTube hub",
    hero_sub: "Watch my latest videos, shop official merch, and get in touch — all in one place.",
    hero_cta: "Visit the Shop",
    latest_videos: "Latest videos",
    shop_title: "Shop",
    shop_sub: "Tap a product to flip image. Replace images & prices in HTML.",
    contact_title: "Contact",
    contact_sub: "For business inquiries and collaborations.",
    contact_name: "Your name",
    contact_email: "Email",
    contact_msg: "Message",
    contact_send: "Send Message",
    about_title: "About Me",
    about_body: "Creator, gamer, and community builder. This site showcases my content and products. Thank you for your support!",
    footer: "© 2025 My Channel. All rights reserved."
  },
  th: {
    nav_home: "หน้าแรก",
    nav_shop: "ร้านค้า",
    nav_contact: "ติดต่อ",
    nav_about: "เกี่ยวกับเรา",
    hero_title: "ยินดีต้อนรับสู่ศูนย์รวมช่อง YouTube ของฉัน",
    hero_sub: "ชมวิดีโอล่าสุด ซื้อสินค้า และติดต่อเรา — ครบจบในที่เดียว",
    hero_cta: "ไปที่ร้านค้า",
    latest_videos: "วิดีโอล่าสุด",
    shop_title: "ร้านค้า",
    shop_sub: "แตะที่สินค้าเพื่อสลับภาพ แก้ไขรูปและราคาได้ในไฟล์ HTML",
    contact_title: "ติดต่อ",
    contact_sub: "สำหรับการติดต่อธุรกิจและคอลแลบ",
    contact_name: "ชื่อของคุณ",
    contact_email: "อีเมล",
    contact_msg: "ข้อความ",
    contact_send: "ส่งข้อความ",
    about_title: "เกี่ยวกับฉัน",
    about_body: "ครีเอเตอร์ เกมเมอร์ และผู้สร้างคอมมูนิตี้ เว็บไซต์นี้รวมคอนเทนต์และสินค้า ขอบคุณที่สนับสนุน!",
    footer: "© 2025 ช่องของฉัน สงวนลิขสิทธิ์"
  },
  ja: {
    nav_home: "ホーム",
    nav_shop: "ショップ",
    nav_contact: "お問い合わせ",
    nav_about: "私たちについて",
    hero_title: "YouTubeハブへようこそ",
    hero_sub: "最新動画の視聴・公式グッズの購入・お問い合わせをこのサイトで。",
    hero_cta: "ショップへ",
    latest_videos: "最新の動画",
    shop_title: "ショップ",
    shop_sub: "商品をタップすると画像が切り替わります。画像や価格はHTMLで変更できます。",
    contact_title: "お問い合わせ",
    contact_sub: "ビジネスのご相談・コラボ依頼はこちら。",
    contact_name: "お名前",
    contact_email: "メール",
    contact_msg: "メッセージ",
    contact_send: "送信",
    about_title: "私について",
    about_body: "クリエイター、ゲーマー、コミュニティビルダー。このサイトでは私のコンテンツと商品を紹介しています。応援ありがとうございます！",
    footer: "© 2025 My Channel. All rights reserved."
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
    } else {
      el.textContent = pack[key];
    }
  });
  const select = document.getElementById('lang-select');
  if (select) select.value = lang;
}

document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('lang') || (navigator.language || 'en').slice(0,2);
  const lang = ['en','th','ja'].includes(saved) ? saved : 'en';
  applyLang(lang);
  const select = document.getElementById('lang-select');
  if (select) select.addEventListener('change', e=> applyLang(e.target.value));

  // Shop flip logic
  document.querySelectorAll('.product').forEach(card=>{
    card.addEventListener('click', ()=> card.classList.toggle('active'));
  });
});
