// Guard: ไม่ให้สคริปต์ล่มทั้งไฟล์
(function(){
  // Mobile menu
  try{
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    if (burger && menu){ burger.addEventListener('click', ()=> menu.classList.toggle('open')); }
  }catch(e){ console.warn('menu init', e); }

  // Reveal on view (ใช้ได้เฉพาะเมื่อมี IntersectionObserver)
  try{
    if ('IntersectionObserver' in window){
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
      },{ threshold:.12 });
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    } else {
      // เบราว์เซอร์เก่าจะโชว์ไปเลย
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    }
  }catch(e){ console.warn('reveal init', e); }

  /* =================== i18n packs =================== */
  const T = {
    en:{nav_home:"Home",nav_shop:"Shop",nav_contact:"Contact",nav_about:"About Us",
      promo_ship:"Free shipping $75+",promo_return:"30-day returns",promo_secure:"Secure checkout",
      hero_title:"I’m NosuTakashi — gamer caster",
      hero_sub:"Watch my latest gameplay and support me with official goods. Start with my LINE stickers below.",
      hero_cta_shop:"Visit the Shop",hero_cta_stickers:"Get LINE Stickers",hero_cta_join:"Join the Channel",
      latest_videos:"Latest videos",highlight_title:"Featured: LINE Stickers",
      highlight_body:"Bring my stream energy to your chats. Two sticker sets available now on LINE Store.",
      browse_stickers:"Browse Stickers",coming_apparel:"Apparel (Coming Soon)",
      home_products:"Latest from the Shop",see_all:"See all",
      shop_title:"Shop",shop_sub_gamer:"Official LINE sticker sets available now. Apparel and more gamer merch coming soon.",
      tab_stickers:"LINE Stickers",tab_apparel:"Apparel (Soon)",
      sticker_set1_title:"NosuTakashi Stickers — Set 1",sticker_set2_title:"NosuTakashi Stickers — Set 2",
      sticker_set_desc:"Stream reactions & inside jokes for your chats.",sticker_set_desc2:"New emotes & memes from the channel.",
      buy_on_line:"Buy on LINE Store",view_details:"View details",
      coming_soon:"Coming Soon",apparel_tee:"Creator Tee",notify_when_drop:"Merch drops soon — stay tuned!",notify_me:"Notify me (soon)",
      contact_title:"Contact",contact_sub:"For business inquiries and collaborations.",contact_name:"Your name",contact_email:"Email",contact_msg:"Message",contact_send:"Send Message",
      about_title:"About NosuTakashi",about_body:"Gamer caster and community builder. This site brings together my content and official merch. Thanks for the support!",
      footer:"© 2025 NosuTakashi. All rights reserved."},
    th:{nav_home:"หน้าแรก",nav_shop:"ร้านค้า",nav_contact:"ติดต่อ",nav_about:"เกี่ยวกับเรา",
      promo_ship:"ส่งฟรีเมื่อซื้อครบ $75+",promo_return:"คืนสินค้าได้ใน 30 วัน",promo_secure:"ชำระเงินปลอดภัย",
      hero_title:"ฉันคือ NosuTakashi — นักแคสเกม",
      hero_sub:"ชมเกมเพลย์ล่าสุดและสนับสนุนฉันด้วยสินค้าทางการ เริ่มจาก LINE Stickers ได้เลย",
      hero_cta_shop:"เข้าร้านค้า",hero_cta_stickers:"ซื้อ LINE Stickers",hero_cta_join:"สมัครสมาชิก",
      latest_videos:"วิดีโอล่าสุด",highlight_title:"แนะนำ: LINE Stickers",
      highlight_body:"พลังจากสตรีมสู่แชตของคุณ มี 2 ชุดให้ซื้อบน LINE Store",
      browse_stickers:"ดูสติ๊กเกอร์",coming_apparel:"เสื้อผ้า (เร็ว ๆ นี้)",
      home_products:"สินค้าใหม่จากร้าน",see_all:"ดูทั้งหมด",
      shop_title:"ร้านค้า",shop_sub_gamer:"ตอนนี้มี LINE Stickers พร้อมขาย อนาคตจะมีเสื้อผ้าและสินค้าเกมเมอร์เพิ่ม",
      tab_stickers:"สติ๊กเกอร์ LINE",tab_apparel:"เสื้อผ้า (เร็ว ๆ นี้)",
      sticker_set1_title:"NosuTakashi Stickers — ชุด 1",sticker_set2_title:"NosuTakashi Stickers — ชุด 2",
      sticker_set_desc:"ท่าทางและมุกจากสตรีม ใส่ในแชตได้เลย",sticker_set_desc2:"อีโมตใหม่และมีมจากช่อง",
      buy_on_line:"ซื้อที่ LINE Store",view_details:"ดูรายละเอียด",
      coming_soon:"เร็ว ๆ นี้",apparel_tee:"เสื้อยืด Creator",notify_when_drop:"เมอร์ช์จะเปิดขายเร็ว ๆ นี้ ติดตามได้เลย!",notify_me:"แจ้งเตือนฉัน (เร็ว ๆ นี้)",
      contact_title:"ติดต่อ",contact_sub:"สำหรับการติดต่อธุรกิจและคอลแลบ",contact_name:"ชื่อของคุณ",contact_email:"อีเมล",contact_msg:"ข้อความ",contact_send:"ส่งข้อความ",
      about_title:"เกี่ยวกับ NosuTakashi",about_body:"นักแคสเกมและผู้สร้างคอมมูนิตี้ เว็บไซต์นี้รวมคอนเทนต์และสินค้าทางการ ขอบคุณที่สนับสนุน!",
      footer:"© 2025 NosuTakashi สงวนลิขสิทธิ์"},
    ja:{nav_home:"ホーム",nav_shop:"ショップ",nav_contact:"お問い合わせ",nav_about:"私たちについて",
      promo_ship:"$75以上で送料無料",promo_return:"30日間返品可",promo_secure:"安全な決済",
      hero_title:"私はNosuTakashi — ゲーム配信者です",
      hero_sub:"最新のゲームプレイをチェックして、公式グッズで応援してください。まずはLINEスタンプから。",
      hero_cta_shop:"ショップへ",hero_cta_stickers:"LINEスタンプを見る",hero_cta_join:"チャンネルに参加",
      latest_videos:"最新の動画",highlight_title:"注目：LINEスタンプ",
      highlight_body:"配信の勢いをチャットへ。LINEストアで2セット販売中。",
      browse_stickers:"スタンプ一覧",coming_apparel:"アパレル（近日公開）",
      home_products:"ショップの最新情報",see_all:"すべて見る",
      shop_title:"ショップ",shop_sub_gamer:"現在はLINEスタンプを販売中。今後アパレルなども予定。",
      tab_stickers:"LINEスタンプ",tab_apparel:"アパレル（近日）",
      sticker_set1_title:"NosuTakashi スタンプ — セット1",sticker_set2_title:"NosuTakashi スタンプ — セット2",
      sticker_set_desc:"配信のリアクション＆内輪ネタをチャットで！",sticker_set_desc2:"新しいエモートやミームも収録。",
      buy_on_line:"LINEストアで購入",view_details:"詳細を見る",
      coming_soon:"近日公開",apparel_tee:"クリエイターTシャツ",notify_when_drop:"まもなくリリース！お楽しみに。",notify_me:"通知を受け取る（近日）",
      contact_title:"お問い合わせ",contact_sub:"ビジネスのご相談・コラボ依頼はこちら。",contact_name:"お名前",contact_email:"メール",contact_msg:"メッセージ",contact_send:"送信",
      about_title:"NosuTakashi について",about_body:"ゲーム配信者＆コミュニティビルダー。コンテンツと公式グッズをまとめています。応援ありがとうございます！",
      footer:"© 2025 NosuTakashi. All rights reserved."}
  };

  function applyLang(lang){
    try { localStorage.setItem('lang', lang); } catch {}
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const pack = T[lang] || T.en;
      if (!key || !pack[key]) return;
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

  function initProductCards(){
    document.querySelectorAll('.product').forEach(card=>{
      card.addEventListener('click', e=>{
        if (e.target.closest('.btn') || e.target.closest('.link')) return;
        card.classList.toggle('active');
      });
    });
  }

  function initTabs(){
    const tabs = document.querySelectorAll('.tab');
    if (!tabs.length) return;
    const items = document.querySelectorAll('.product');
    const show = k => items.forEach(it => it.classList.toggle('hidden', it.dataset.category !== k));
    tabs.forEach(t=>{
      t.addEventListener('click', ()=>{
        tabs.forEach(x=>x.classList.remove('active'));
        t.classList.add('active');
        show(t.dataset.tab);
        document.getElementById('products')?.scrollIntoView({behavior:'smooth', block:'start'});
      });
    });
    const hash = location.hash.replace('#','');
    const target = Array.from(tabs).find(t => t.id === hash);
    if (target) target.click(); else show('stickers');
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    const saved = (()=>{
      try { return localStorage.getItem('lang'); } catch { return null; }
    })() || (navigator.language || 'en').slice(0,2);
    const lang = ['en','th','ja'].includes(saved) ? saved : 'en';
    applyLang(lang);
    document.getElementById('lang-select')?.addEventListener('change', e=> applyLang(e.target.value));
    initProductCards();
    initTabs();
  });
})();
