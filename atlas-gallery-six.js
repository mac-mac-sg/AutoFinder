/* AutoFinder gallery expansion: six distinct reference photos per vehicle.
   Vehicle data and existing gallery entries remain unchanged. */
(function setupSixPhotoGalleriesAndImageActions() {
  "use strict";
  const additions = {"octavia":[["Cockpit · iV","https://images.autoexpress.co.uk/autoexpress/2021/04/Skoda%20Octavia%20iV%202021.jpg?w=800&h=500&fit=crop&q=80","Auto Express","https://www.autoexpress.co.uk/skoda/octavia/354765/new-skoda-octavia-iv-2021-review-pictures"],["Rücksitze · iV","https://images.autoexpress.co.uk/autoexpress/2021/04/Skoda%20Octavia%20iV%202021-3.jpg?w=800&h=500&fit=crop&q=80","Auto Express","https://www.autoexpress.co.uk/skoda/octavia/354765/new-skoda-octavia-iv-2021-review-pictures"]],"byd":[["Rücksitze","https://images.prismic.io/carwow/aM191p5xUNkB06fz_LHDBYDSeal6DM-iTouring2025-14.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=1920","Carwow","https://www.carwow.es/byd/seal-6-dm-i-touring/interior"]],"kia":[["Kofferraum","https://media.cdnws.com/_i/131565/RAW-34863/3324/66/coffre-kia-sportage-volume-chargement-suv-compact-hayon-ouvert.png","BlaBlaStore / Kia","https://www.blablastore.fr/blog/actualites/kia-sportage-phev-notre-essai-du-suv-hybride-familial.html"],["Rücksitzkomfort","https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/kia-sportage-nq5-my22/discover/kia-sportage-phev-gtl-my22-carousel-spaciousness-backseat.jpg","Kia Österreich","https://www.kia.com/at/modelle/sportage-nq5/entdecken/"]],"peugeot":[["Heckansicht · PHEV","https://i.auto-bild.de/ir_img/4/0/5/3/6/9/9/Peugeot-308-SW-PHEV-195-1840-2048x1365-7c13e2a3a4f97dff.jpg","AUTO BILD (jüngerer PHEV 195)","https://www.autobild.de/artikel/peugeot-308-sw-phev-195-test-28587827.html"]],"jac":[["Heckansicht","https://jac-schweiz.ch/wp-content/uploads/2026/04/JS6-PHEV-EX-013-scaled.jpg","JAC Schweiz","https://jac-schweiz.ch/en/js6-phev/"],["Ladeöffnung / Heck","https://jac-schweiz.ch/wp-content/uploads/2026/04/JS6-PHEV-EX-014-scaled.jpg","JAC Schweiz","https://jac-schweiz.ch/en/js6-phev/"]],"seat":[["Kofferraum","https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/primo_contatto_galleria/2021/03/seat-leon-st-hybrid-2021-03_02.jpg","alVolante","https://www.alvolante.it/primo_contatto/seat-leon-st-14-e-hybrid/foto"],["Cockpit","https://v.wpimg.pl/YTUyOTVjdjU0GzlneRF7IHdDbT0_SHV2IFt1dnkJdmBjS3ssZFxpZHofJjgzGDwkOlcoJiMaOCMlVz84eQspPXoPfnsyAyokORg2ezMHOzExVi1mMlJsNWBJYmZvXjp5YUF-MHtSODJiVCpsZwtsZmxMLGA1CXsp","Autokult","https://e.autokult.pl/test-seat-leon-sportstourer-fr-1-4-e-hybrid-emocje-zeszly-na-drugi-plan%2C7016067180407712a"],["Aussen · Heck 2021","https://cdn.prod.website-files.com/67accbaf184700d839dafe81/68930d041558af84ae00f9e7_seat-leon-phev-st-e-hybrid-alcantara-led-2021-oradea-exterior-7.jpeg","Car Finder One","https://www.carfinderone.ro/masini/seat-leon-1-4-e-hybrid"],["Cockpit · iV","https://www.largus.fr/images/styles/max_1300x1300/public/images/seat-leon-e-hybrid-2021-31.jpg?itok=FukTWVil","L’Argus","https://www.largus.fr/actualite-automobile/prix-seat-leon-2021-des-tarifs-en-hausse-qui-debutent-des-21-970-e-10513392-12572391-photos.html"]],"mazda":[["Kofferraum","https://www.goodwood.com/globalassets/.road--racing/reviews/mazda/cx-60-first-drive-sep-22/mazda-cx-60-first-drive-20.jpg?rxy=0.5","Goodwood","https://www.goodwood.com/grr/car-reviews/mazda/cx-60-phev/"],["Rücksitze","https://media.whichcar.com.au/uploads/2023/07/f4abc6eb-2023-mazda-cx-60-d50e-gt-with-vision-technology-pack33-1920x1281.jpg","WhichCar (andere Antriebsvariante)","https://www.whichcar.com.au/reviews/2023-mazda-cx-60-review-australian-launch"]],"superb":[["Kofferraum · umgeklappt","https://dagensps.rlvnc.cloud/app/uploads/2020/01/SUPERB_int_0002-1920x1440-1024x768.jpg","Dagens PS","https://www.dagensps.se/motor/biltest-skoda-superb-iv-koncernens-basta-laddhybrid/"],["Rücksitze","https://dagensps.rlvnc.cloud/app/uploads/2020/01/SUPERB_LK_49-1920x1280-1024x683.jpg","Dagens PS","https://www.dagensps.se/motor/biltest-skoda-superb-iv-koncernens-basta-laddhybrid/"],["Aussen · unterwegs","https://cdn.skoda-storyboard.com/2019/11/SUPERB_iV_COMBI_011.jpg","Škoda Storyboard","https://www.skoda-storyboard.com/cs/superb_iv_combi_011/"]],"astra":[["Kofferraum","https://cdn.automobile-propre.com/uploads/2022/07/Essai-Opel-Astra-Sports-Tourer-PHEV-08.jpg","Automobile Propre","https://www.automobile-propre.com/articles/essai-opel-astra-sports-tourer-phev-un-lion-a-laccent-allemand/"],["Rücksitze","https://media.1815.io/topgear/i/width%3D1920%26height%3D1080/2022/08/opel-astra-sports-tourer-plug-in-hybrid-ultimate-interieur-achterbank-2022.jpg","TopGear NL","https://topgear.nl/autotest/opel-astra-sports-tourer-plug-in-hybrid-review-2022/"],["Cockpit","https://images.autoreview.nl/original/opel-astra-sports-tourer-2022-4-8d13f1.jpg","AutoReview NL","https://www.autoreview.nl/autotests/id/32012/eerste-review-opel-astra-sports-tourer-2022-stoere-stationwagon-met-stekker"]],"mg":[["Rücksitze · 2025","https://www.completecar.ie/img/galleries/13533/mg_hs_suv_2025_black_042.jpg","Complete Car","https://www.completecar.ie/car-reviews/article/MG/HS/HS_PHEV_%282025_prototype%29/2405/13533/2024-MG-HS-PHEV-%282025-prototype%29-review.html"],["Kofferraum · 2025","https://images.squarespace-cdn.com/content/v1/56893da11c1210fead067d42/1753283327579-G9P25A7UJFSHEL2H4Q2R/IMG_3320%2BLarge.jpeg","The Mud Life","https://www.themudlife.co.uk/articles/2025/7/23/review-2025-mg-hs-phev"]],"tucson":[["Rücksitze","https://maynardsgarage.com/wp-content/uploads/2022/05/TucsonPlug-in_BackSeat.jpg","Maynards Garage","https://maynardsgarage.com/2022/05/18/hyundai-tucson-plug-in-hybrid-review/"],["Cockpit","https://www.drive.gr/sites/default/files/inline-images/HYUNDAI_TUCSON_PLUG_IN_HYBRID_M.Y.2022_00.JPG","Drive","https://www.drive.gr/test-drives/dokimi/test-drive-hyundai-tucson-plug-hybrid-16t-265-ps-4wd"]],"passat":[["Rücksitze","https://cdn.aquelamaquina.pt/images/2019-10/img_944x629%242019_10_13_16_33_55_167884.jpg","Aquela Máquina","https://www.aquelamaquina.pt/novos-modelos/detalhe/vw-passat-variant-gte-pratica-e-eficaz.html"],["Kofferraum","https://cdn.aquelamaquina.pt/images/2020-01/img_944x629%242020_01_06_18_02_57_175574.jpg","Aquela Máquina","https://www.aquelamaquina.pt/ensaio/detalhe/vw-passat-gte-variant-218-cv-e-55-km-puramente-electricos.html"],["Aussen · Fahrt","https://autofans.be/sites/default/files/2020-Volkswagen-anderefotos__volkswagen-passat-gte-2020-review-facelift-autofans_4.jpg","Autofans","https://autofans.be/nl/rijtesten/45535-rijtest-volkswagen-passat-gte-2020"]],"ceed":[["Rücksitze","https://images.autoreview.nl/original/kia-ceed-sportswagon-phev-962-9fa6a9.jpg","AutoReview NL","https://www.autoreview.nl/autotests/id/29184/review-kia-ceed-sw-phev-test"],["Cockpit","https://press.kia.com/content/dam/kiapress/FR/Communiques_de_presse_fr/2020/xceed-ceedsw-phev/051.jpg","Kia Presse","https://press.kia.com/fr/fr/home/press-releases/2020/kia-motors-france-lance-la-commercialisation-des-versions-hybrides-rechargeables-des-modeles-ceed-sw-et-x-ceed.html"]],"citroen":[["Rücksitze","https://images.caradisiac.com/images/2/1/7/6/202176/S8-essai-citroen-c5-aircross-hybride-rechargeable-que-vaut-l-entree-de-gamme-de-180-ch-754856.jpg","Caradisiac","https://www.caradisiac.com/essai-citroen-c5-aircross-phev-180-ch-2023-que-vaut-l-hybride-d-entree-de-gamme-202176.htm"],["Kofferraum","https://images.caradisiac.com/images/2/1/7/6/202176/S8-essai-citroen-c5-aircross-hybride-rechargeable-que-vaut-l-entree-de-gamme-de-180-ch-754854.jpg","Caradisiac","https://www.caradisiac.com/essai-citroen-c5-aircross-phev-180-ch-2023-que-vaut-l-hybride-d-entree-de-gamme-202176.htm"],["Cockpit","https://www.automobilrevue.cz/obrazek/6407908ea1e8b/citroen-c5-%286%29.jpg","Automobil Revue","https://www.automobilrevue.cz/rubriky/presunuto-na-trucker-cz-truck-bus/predstavujeme/citroen-c5-aircross-plug-in-hybrid-225-shine-pack-zvyrazneni-stylu_49383.html"]],"kuga":[["Rücksitze","https://billeder.bilinfo.net/bilinfo/22c64a17-2de1-467c-b7b6-ce37d6b74d61.jpeg?class=S1600X1600","Tyttes Auto","https://tyttesauto.dk/biler/ford-kuga-phev-vignale-cvt-7aeyy6syy78"],["Kofferraum","https://cdn.motor1.com/images/mgl/VzXrg7/s1/ford-kuga-vignale-2.5-phev-225-cv-2022.jpg","Motor1","https://es.motor1.com/reviews/621610/ford-kuga-vignale-phev-prueba/"]],"leapmotor":[["Rücksitze","https://zecar.com/_next/image?q=75&url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fo5m1ex7g%2Fproduction%2F0d6da4541f956e3e6cd52a501f95f150e2671866-3000x2001.webp&w=2048","Zecar","https://zecar.com/reviews/2025-leapmotor-c10-reev-lands-in-australia"],["Ladeanschluss","https://www.largus.fr/images/styles/max_1300x1300/public/2024-12/leapmotor-C10-REEV-prise-recharge-bd_2.jpg?itok=nSSdaQl4","L’Argus","https://www.largus.fr/actualite-automobile/leapmotor-c10-reev-2025-un-prolongateur-d-autonomie-pour-le-suv-electrique-chinois-30037916-30484067-photos.html"]],"geely":[["Rücksitze","https://images.carexpert.com.au/resize/960/-/cms/v1/media/2025-09-2026-geely-starray-em-i2025geelystarrayem-iglacierblue028.jpg","CarExpert","https://www.carexpert.com.au/car-reviews/2026-geely-starray-em-i-review"],["Aussen · Landschaft","https://images.carsguide.com.au/image/upload/c_fit%2Ch_810%2Cw_1215%2Cf_auto%2Ct_cg_base/v1/editorial/2026-Geely-Starray-EM-i-SUV-Blue-SUV-1200x800p-1.jpg","CarsGuide","https://www.carsguide.com.au/ev/geely-starray-em-i-99655"]],"chery":[["Cockpit","https://editorial.pxcrush.net/carsales/general/editorial/chery-tiggo-7-2025-review-28.jpg?height=682&width=1024","Carsales AU","https://www.carsales.com.au/editorial/details/chery-tiggo-7-super-hybrid-2025-review-149953/?isModal=true"],["Rücksitze","https://www.cherycar.co.uk/images/UK/models/tiggo-7-csh/gallery/gi-13.png","Chery UK","https://www.cherycar.co.uk/models/tiggo-7-csh"]],"cx30":[["Rücksitze","https://s3-eu-west-1.amazonaws.com/eurekar-v2/uploads/images/original/cxseats_2.jpg","Eurekar","https://www.eurekar.co.uk/articles/2019-12-08/mazda-plans-big-with-cx-30"],["Aussen · Seite","https://e-cdn.carpla.vn/carpla-ecom/blog/thiet-ke-ngoai-that-xe-mazda-cx-30-2023-1758700750.491.jpg","Carpla","https://carpla.vn/blog/danh-gia-xe-mazda-cx-30-2023"]]};
  const normalizeUrl = url => { try { const u = new URL(url);return u.origin + u.pathname; } catch {return url;} };
  for (const car of DB.cars) {
    const present = new Set((car.gallery || []).map(p => normalizeUrl(p.src)));
    for (const [label,src,credit,source] of (additions[car.id] || [])) {
      if (car.gallery.length >= 6) break;
      const norm=normalizeUrl(src);
      if (present.has(norm)) continue;
      car.gallery.push({label,src,credit,source});
      present.add(norm);
    }
  }
  const originalRenderCards=renderCards;
  renderCards=function(...args) {
    originalRenderCards(...args);
    document.querySelectorAll('#cargrid .carcard').forEach(card => {
      const cover=card.querySelector('.cover');
      const details=card.querySelector('button[data-open]');
      if (!cover || !details) return;
      const id=details.dataset.open;
      cover.setAttribute('role','button');
      cover.setAttribute('tabindex','0');
      cover.setAttribute('aria-label','Details für '+DB.cars.find(c=>c.id===id).name+' öffnen');
      cover.addEventListener('click', event => {
        if (event.target.closest('button, a')) return;
        openModal(id);
      });
      cover.addEventListener('keydown', event => {
        if (event.target !== cover) return;
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault(); openModal(id);
        }
      });
    });
  };
  /* Swipe photo: tap opens details; a horizontal drag keeps its existing voting action. */
  const originalSwipeDeck=renderSwipeDeck;
  renderSwipeDeck=function(queue) {
    originalSwipeDeck(queue);
    const active=queue[0],card=document.getElementById('activeSwipeCard');
    const photo=card?.querySelector('.swipeCardPhoto');
    if (!active || !card || !photo) return;
    photo.setAttribute('role','button'); photo.setAttribute('tabindex','0');
    photo.setAttribute('aria-label','Details und Fotos von '+active.brand+' '+active.name+' öffnen');
    let press=null;
    card.addEventListener('pointerdown',event=>{
      if (!event.target.closest('.swipeCardPhoto') || event.button !== 0) {press=null;return;}
      press={id:event.pointerId,x:event.clientX,y:event.clientY};
    });
    card.addEventListener('pointerup',event=>{
      const prev=press; press=null;
      if (!prev || prev.id !== event.pointerId || state.swipeBusy) return;
      if (Math.abs(event.clientX-prev.x) < 10 && Math.abs(event.clientY-prev.y) < 10) openModal(active.id);
    });
    card.addEventListener('pointercancel',()=>{press=null;});
    photo.addEventListener('keydown',event=>{
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();event.stopPropagation();openModal(active.id);
      }
    });
  };
  renderCards();
  if(state.page==='swipe')renderSwipe();
})();