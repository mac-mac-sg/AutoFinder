/* PHEV Atlas PWA bootstrap. No changes to vehicle model data or swipe state. */
(() => {
  'use strict';
  const button = document.getElementById('pwaInstallButton');
  const overlay = document.getElementById('pwaInstallOverlay');
  const steps = document.getElementById('pwaInstallSteps');
  const help = document.getElementById('pwaInstallHelp');
  const close = document.getElementById('pwaInstallClose');
  const done = document.getElementById('pwaInstallDone');
  let installEvent = null;
  let previousFocus = null;
  const standalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const appleMobile = () => /iPad|iPhone|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const step = (num, message) => {
    const item = document.createElement('div'); item.className = 'installStep';
    const n = document.createElement('span'); n.className = 'installNumber'; n.textContent = String(num);
    const description = document.createElement('span'); description.textContent = message;
    item.append(n,description);return item;
  };
  const refreshButton = () => {
    if (standalone()) {
      button.classList.add('isInstalled'); button.setAttribute('aria-label','PHEV Atlas ist als App geöffnet');
      button.title='Als App geöffnet'; button.innerHTML='<span aria-hidden="true">✓</span> <span class="pwaButtonLabel">App</span>';
    }
  };
  const openHelp = () => {
    if (standalone()) return;
    previousFocus = document.activeElement;
    steps.replaceChildren();
    if (location.protocol === 'file:') {
      help.textContent = 'Die Installationsfunktion ist erst nach Veröffentlichung unter einer HTTPS-Adresse verfügbar.';
      steps.append(step(1,'Den PHEV Atlas auf GitHub Pages oder Cloudflare Pages veröffentlichen.'),step(2,'Die HTTPS-Adresse im Smartphone-Browser öffnen und danach zum Homescreen hinzufügen.'));
    } else if (appleMobile()) {
      help.textContent = 'So erscheint der PHEV Atlas als eigenes App-Icon auf deinem iPhone oder iPad:';
      steps.append(step(1,'PHEV Atlas in Safari öffnen.'),step(2,'Auf «Teilen» (Quadrat mit Pfeil nach oben) tippen.'),step(3,'«Zum Home-Bildschirm» auswählen und mit «Hinzufügen» bestätigen.'));
    } else {
      help.textContent = 'Wenn der Browser keinen direkten Installationsdialog anbietet, kannst du die App manuell hinzufügen:';
      steps.append(step(1,'Die HTTPS-Adresse im Chrome- oder Edge-Browser öffnen.'),step(2,'Im Browsermenü «App installieren» bzw. «Zum Startbildschirm hinzufügen» wählen.'),step(3,'Die Installation bestätigen.'));
    }
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    close.focus();
  };
  const closeHelp = () => {
    overlay.hidden = true;
    document.body.style.overflow = '';
    previousFocus?.focus?.();
  };
  window.addEventListener('beforeinstallprompt', (event) => {event.preventDefault();installEvent=event;button.title='PHEV Atlas als App installieren';});
  window.addEventListener('appinstalled', () => {installEvent=null;refreshButton();});
  button.addEventListener('click', async () => {
    if (standalone()) return;
    if (installEvent) {
      const event = installEvent; installEvent=null;
      try {await event.prompt(); await event.userChoice;} catch (error) {console.info('Installationsdialog nicht verfügbar',error);}
      return;
    }
    openHelp();
  });
  for (const el of [close,done]) el.addEventListener('click',closeHelp);
  overlay.addEventListener('click',(event)=>{if(event.target===overlay)closeHelp();});
  document.addEventListener('keydown',(event)=>{if(event.key==='Escape'&&!overlay.hidden){closeHelp();event.stopPropagation();}});
  refreshButton();
  if ('serviceWorker' in navigator && window.isSecureContext) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js', {scope:'./'}).then((registration)=>{
        registration.update().catch(()=>{});
      }).catch((error)=>console.warn('Offline-Funktion konnte nicht aktiviert werden',error));
    });
  }
})();
