(function installAtlasEnhancements(){
  "use strict";
  if(typeof DB==="undefined"||typeof state==="undefined"||typeof renderProfile!=="function"||typeof fitScore!=="function")return;
  const extra={
    octavia:[
      ["Aussen · Heck","https://cdn.skoda-storyboard.com/2019/11/OCTAVIA_054-1440x960.jpg","Škoda Storyboard","https://www.skoda-storyboard.com/en/octavia_054/"],
      ["Laderaum · Praxis","https://pic.clubic.com/07f49dca1907082/1200x800/smart/essai-skoda-octavia-combi-iv.jpg","Clubic","https://www.clubic.com/skoda/essai-auto-380497-essai-skoda-octavia-combi-iv-le-meilleur-de-volkswagen-en-moins-cher.html"]
    ],
    byd:[
      ["Aussen · Heck","https://www.sternauto.de/fileadmin/_processed_/1/1/csm_03___SEAL_6_LHD_Atlantis_Blue_Exterior_Rear_download_JPG_5000px_RGB_0f243bf939.jpg","BYD / STERN AUTO","https://www.sternauto.de/marken/byd/byd-seal-6-dm-i-touring/"],
      ["Aussen · Fahrt","https://i.auto-bild.de/ir_img/3/9/8/9/5/2/5/BYD-Seal-6-DM-i-Touring-3675-4800x3200-c8626ec1d586cd90.jpg","AUTO BILD","https://www.autobild.de/marken-modelle/byd/seal-6/"]
    ],
    kia:[
      ["Aussen · Laden","https://www.autopista.es/uploads/s1/96/93/98/8/r5a7500-3-4-rear-with-charger.jpeg","Kia / Autopista","https://www.autopista.es/novedades-coches/kia-sportage-phev-2022-todos-detalles-nuevo-suv-con-etiqueta-0-emisiones-dgt_241836_102.html"]
    ],
    peugeot:[
      ["Aussen · Heck","https://autonotizen.de/imagick?align_x=center&align_y=center&h=1500&mode=cropZoom&signature=adee9f64734ccaa69f09081b418400fa4de95bd59b699648841b3d74462011e9&url=%2Fimages%2Fp%2Fe%2Fu%2Fg%2Fe%2Fpeugeot-308-sw--2022-peugeot-308-sw-2021-heck-links-laden1624302859-e9ccaf2c.jpg&w=2000","Peugeot / Autonotizen","https://autonotizen.de/neuigkeiten/peugeot-308-sw-kombi-neu-fotos-motoren-hybrid-marktstart-2022"],
      ["Aussen · Fahrt","https://www.larevueautomobile.com/images/fiche-technique/2023/Peugeot/308-SW/Peugeot_308-SW_MD_1.jpg","La Revue Automobile","https://www.larevueautomobile.com/fiche-technique-auto/Caracteristique-peugeot-308-sw-hybrid-180-e-eat8-2023"]
    ],
    jac:[
      ["Aussen · Studio","https://api.awverlag.ch/uploads/car_image/js6-phev-ex-002-1-69a1b090ecb17159821223.jpg","JAC / AW Verlag","https://drivingday.aboutfleet.ch/"]
    ],
    seat:[
      ["Aussen · Fahrt","https://www.diariomotor.com/imagenes/2020/03/seat-leon-sportstourer-2020-xcellence-azul-1.jpg?class=OG","SEAT / Diariomotor","https://www.diariomotor.com/noticia/seat-leon-sportstourer-e-hybrid-precio-2025/"]
    ],
    mazda:[
      ["Aussen · Heck","https://car-images.bauersecure.com/wp-images/4758/mazda_cx-60_51.jpg","Mazda / CAR Magazine","https://www.carmagazine.co.uk/car-news/first-official-pictures/mazda/cx-60/"]
    ],
    superb:[
      ["Aussen · Heck","https://www.larevueautomobile.com/images/fiche-technique/2021/Skoda/Superb-Combi/iV-Hybride-Rechargeable/Skoda_Superb-Combi_iV_Hybride_Rechargeable_MD_4.jpg","La Revue Automobile","https://www.larevueautomobile.com/fiche-technique-auto/Caracteristique-skoda-superb-combi-1-4-tsi-phev-218-2021"]
    ],
    astra:[
      ["Aussen · Heck","https://www.opel.de/fahrzeuge/astra-modelle/astra-hybrid/sports-tourer/uebersicht/_jcr_content/pageContent/grid_builder_v2/col1/tiled_gallery/item_1655214451270.coreimg.87.1440.jpeg/1680856629910/opel-astra-sports-tourer-hybrid-exterior-rear-16x9-asstsol22-e01-062.jpeg","Opel Presse","https://www.auto-team.de/opel-astra-sports-tourer-plug-in-hybrid/"]
    ],
    mg:[
      ["Aussen · Heck","https://images.carexpert.com.au/crop/1600/1067/app/uploads/2024/10/2025-mg-hs-phev-1.jpeg","MG / CarExpert","https://www.carexpert.com.au/car-news/2025-mg-hs-phev-set-to-get-a-huge-bump-in-electric-range"]
    ],
    tucson:[
      ["Aussen · Heck","https://pics.auto-commerce.eu/ac6376/foto/large_173874795748902.JPG","Van Driel Automotive","https://www.vandrielautomotive.com/aanbod/hyundai/tucson/hyundai-tucson-1-6-t-gdi-phev-n-line-sky-4wd/2969197/"]
    ],
    passat:[
      ["Aussen · Heck","https://www.motorpoint.com/bancodeimagenes/21/Volkswagen-Passat-GTE-Variant-2020-motorpoint05.jpg","VW / Motorpoint","https://www.motorpoint.com/album/605/volkswagen-passat-gte-variant-2020/5/imagen.html"]
    ],
    ceed:[
      ["Aussen · Heck","https://der-autotester.de/wp-content/uploads/2021/06/image1-5.jpeg","Der-Autotester","https://der-autotester.de/2021-kia-ceed-sportswagon-phev/"]
    ],
    citroen:[
      ["Aussen · Heck","https://images.motor.es/galerias/coches-nuevos/citroen-c5-aircross-hybrid-color-azul-eclipse/citroen-c5-aircross-hybrid-color-azul-eclipse-36829-1677861905_9.jpg","Motor.es","https://www.motor.es/citroen/c5-aircross/fotos/citroen-c5-aircross-hybrid-color-azul-eclipse-my2022-337"]
    ],
    kuga:[
      ["Aussen · Heck","https://www.honestjohn.co.uk/media/rzoi3lrb/dsc_0617.jpeg","Honest John","https://www.honestjohn.co.uk/long-term-tests/ford-kuga-phev/"]
    ],
    leapmotor:[
      ["Aussen · Heck","https://parkers-images.bauersecure.com/wp-images/385256/static-exterior/1024x768/082-leapmotor-c10-reev.jpg?mode=max&quality=90&scale=down","Parkers","https://www.parkers.co.uk/leapmotor/c10/reev/review/"]
    ],
    geely:[
      ["Aussen · Heck","https://d2s8i866417m9.cloudfront.net/photo/50353759/photo/medium-db1f6f56f06f08e5e375205b17ba3f1e.jpg","Macarthur Automotive","https://www.macarthurautomotive.com.au/cars/demo-jungle-green-2026-geely-starray-em-i-gn303065"]
    ],
    chery:[
      ["Aussen · Heck","https://images.carexpert.com.au/resize/1920/-/app/uploads/2025/06/T7-CSH-Boot.jpg","Chery / CarExpert","https://www.carexpert.com.au/car-news/2025-chery-tiggo-7-super-hybrid-is-australias-cheapest-phev"]
    ],
    cx30:[
      ["Aussen · Heck","https://m.atcdn.co.uk/a/media/b83a56dd7ebe430c9d487e520a90aef8.jpg","Mazda / What Car?","https://www.whatcar.com/mazda/cx-30/hatchback/review/n19748"]
    ]
  };
  let added=0;
  for(const car of DB.cars){
    const list=extra[car.id]||[];
    if(!Array.isArray(car.gallery))car.gallery=[];
    const existing=new Set(car.gallery.map(p=>p.src));
    for(const [label,src,credit,source] of list){
      if(existing.has(src))continue;
      car.gallery.push({label,src,credit,source});
      existing.add(src);added++;
    }
  }
  const currentGalleryStrip=galleryStrip;
  galleryStrip=function(c){
    return currentGalleryStrip(c).replace("<h4>Fotogalerie ","<h4>Fotogalerie <small class=\"photoCount\">"+c.gallery.length+" Fotos</small> ");
  };

  const clamp=(x,low,high)=>Math.min(high,Math.max(low,x));
  const breakdown=(c)=>{
    const midpoint=(c.priceMin+c.priceMax)/2;
    return [
      {key:"price",label:"Kaufpreis",score:clamp(12-midpoint/5000,2,10),basis:"Suchpreis-Mittelwert "+currency(midpoint)+". Je günstiger die Orientierungsspanne, desto mehr Punkte.",formula:"12 − (Suchpreis / 5’000), begrenzt auf 2–10"},
      {key:"boot",label:"Kofferraum",score:clamp((c.boot-380)/22,3,10),basis:c.boot+" Liter laut Modellangabe (PHEV-Version, wenn verfügbar). Form und Ladeboden sind nicht separat bewertet.",formula:"(Liter − 380) / 22, begrenzt auf 3–10"},
      {key:"electric",label:"Elektrischer Alltag",score:c.powertrain==="MHEV"?0:clamp(5+c.range/25,4,10),basis:c.powertrain==="MHEV"?"Mildhybrid: kein rein elektrischer Fahrbetrieb möglich.":c.range+" km WLTP. Winterreichweite und Batteriealter nicht direkt eingepreist.",formula:c.powertrain==="MHEV"?"0 Punkte (kein Stecker-/E-Fahrbetrieb)":"5 + (WLTP-km / 25), begrenzt auf 4–10"},
      {key:"evidence",label:"Risiko & Reife",score:Number(c.evidence),basis:"Redaktionelle Einschätzung der Erfahrungs-, Test- und Risikolage. Keine amtliche Zuverlässigkeits- oder Rückrufstatistik.",formula:"Redaktioneller Ausgangswert"}
    ];
  };
  fitScore=function(c){
    const parts=breakdown(c),denom=parts.reduce((sum,p)=>sum+state.weights[p.key],0);
    return parts.reduce((sum,p)=>sum+p.score*state.weights[p.key],0)/denom;
  };
  const originalRenderProfile=renderProfile;
  function criterionHtml(p,totalWeight){
    const weight=Number(state.weights[p.key]),contribution=p.score*weight/totalWeight;
    return `<div class="scoreCriterion">
      <div class="scoreCriterionHeading"><strong>${escapeHtml(p.label)}</strong><span>${p.score.toFixed(1)}/10 · Gewicht ${weight}/5</span></div>
      <div class="scoreBar" role="img" aria-label="${escapeHtml(p.label)}: ${p.score.toFixed(1)} von 10 Punkten"><span style="width:${(p.score*10).toFixed(1)}%"></span></div>
      <p>${escapeHtml(p.basis)}</p>
      <div class="scoreCriterionFormula"><span>${escapeHtml(p.formula)}</span><b>Beitrag: +${contribution.toFixed(2)} Punkte</b></div>
    </div>`;
  }
  renderProfile=function(){
    const root=document.getElementById("dynamicRanking");
    const wasOpen=new Set(root?[...root.querySelectorAll("details.rankDetails[open]")].map(el=>el.dataset.carId):[]);
    originalRenderProfile();
    if(!root)return;
    if(!document.getElementById("scoreIntro")){
      const lead=document.createElement("p");
      lead.id="scoreIntro";lead.className="scoreIntro";
      lead.textContent="Tippe auf ein Fahrzeug, um die vier Teilbewertungen und ihren Beitrag zur Gesamtnote zu sehen. Die Gewichtungen oben lassen sich verändern.";
      root.before(lead);
    }
    const ordered=DB.cars.slice().sort((a,b)=>fitScore(b)-fitScore(a));
    const nodes=[...root.querySelectorAll(":scope > .rankrow")];
    const totalWeight=Object.values(state.weights).reduce((sum,value)=>sum+Number(value),0);
    nodes.forEach((row,index)=>{
      const car=ordered[index];if(!car)return;
      const parts=breakdown(car),score=fitScore(car);
      const detail=document.createElement("details");
      detail.className="rankDetails";detail.dataset.carId=car.id;
      if(wasOpen.has(car.id))detail.open=true;
      const name=escapeHtml(car.brand+" "+car.name);
      detail.innerHTML=`<summary class="rankrow scoreSummary">
        <div class="ranknum">${String(index+1).padStart(2,"0")}</div>
        <div class="rankname">${name}<div class="rankSubtitle">${escapeHtml(car.fitLabel)}</div></div>
        <div class="rankscore">${score.toFixed(1)} <small>/ 10</small></div>
        <span class="scoreChevron" aria-hidden="true">⌄</span>
      </summary>
      <div class="scoreBreakdown">
        <div class="scoreHead"><strong>So setzt sich der Score zusammen</strong><span>gewichtete Orientierung, keine Testnote</span></div>
        <div class="scoreGrid">${parts.map(p=>criterionHtml(p,totalWeight)).join("")}</div>
        <div class="scoreTotal"><span>Gesamt <small>Summe der gewichteten Beiträge</small></span><strong>${score.toFixed(2)} / 10</strong></div>
        <p class="scoreFootnote">Die Werte sind vereinfachte Modellannahmen und keine Vorhersage von Unterhaltskosten, Sicherheit oder Zuverlässigkeit. Einzelfahrzeug, Batteriezustand, Rückrufe, Ausstattung und tatsächlichen Preis zusätzlich prüfen.</p>
      </div>`;
      row.replaceWith(detail);
    });
  };
  if(state.page==="profile")renderProfile();
  if(state.page==="discover")renderCards();
  console.info("AutoFinder: zusätzliche Fahrzeugbilder",added,"und aufklappbare Score-Erklärungen aktiviert");
})();
