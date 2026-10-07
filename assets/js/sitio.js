/* Verano Café — comportamiento del sitio (sin dependencias) */
(function () {
  'use strict';

  // Abierto o cerrado según la hora de Buenos Aires (todos los días de 8 a 21)
  var estado = document.querySelector('[data-estado]');
  if (estado) {
    try {
      var hora = Number(new Intl.DateTimeFormat('en-US', {
        hour: 'numeric', hourCycle: 'h23', timeZone: 'America/Argentina/Buenos_Aires'
      }).format(new Date()));
      var abierto = hora >= 8 && hora < 21;
      estado.textContent = abierto ? 'Abierto ahora, hasta las 21' : 'Cerrado ahora, abrimos a las 8';
      estado.setAttribute('data-abierto', abierto ? 'si' : 'no');
    } catch (e) { /* queda el horario estático */ }
  }

  // Visor de la carta: pliegos en escritorio, hojas sueltas en celular
  var visor = document.querySelector('[data-carta]');
  if (!visor) return;
  var anterior = document.querySelector('[data-carta-anterior]');
  var siguiente = document.querySelector('[data-carta-siguiente]');
  var puntos = document.querySelector('[data-carta-puntos]');
  var angosto = window.matchMedia('(max-width: 919px)');
  var paginas = [];
  var actual = 0;

  function nombre(el) {
    return el.getAttribute('aria-label') ||
      Array.prototype.map.call(el.querySelectorAll('.hoja'), function (h) {
        return h.getAttribute('aria-label');
      }).join(' y ');
  }

  function armar() {
    paginas = Array.prototype.slice.call(
      visor.querySelectorAll(angosto.matches ? '.hoja' : '.pliego'));
    puntos.textContent = '';
    paginas.forEach(function (p, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Página ' + (i + 1) + ': ' + nombre(p));
      b.appendChild(document.createElement('span'));
      b.addEventListener('click', function () { ir(i); });
      puntos.appendChild(b);
    });
    actual = 0;
    marcar();
    visor.scrollLeft = 0;
  }

  function marcar() {
    anterior.disabled = actual === 0;
    siguiente.disabled = actual === paginas.length - 1;
    Array.prototype.forEach.call(puntos.children, function (b, i) {
      b.setAttribute('aria-current', i === actual ? 'true' : 'false');
    });
  }

  function ir(i) {
    i = Math.max(0, Math.min(paginas.length - 1, i));
    var p = paginas[i];
    var destino = p.offsetLeft - (visor.clientWidth - p.offsetWidth) / 2;
    visor.scrollTo({ left: destino });
    actual = i;
    marcar();
  }

  var espera;
  visor.addEventListener('scroll', function () {
    clearTimeout(espera);
    espera = setTimeout(function () {
      var centro = visor.scrollLeft + visor.clientWidth / 2;
      var mejor = 0, dist = Infinity;
      paginas.forEach(function (p, i) {
        var d = Math.abs(p.offsetLeft + p.offsetWidth / 2 - centro);
        if (d < dist) { dist = d; mejor = i; }
      });
      if (mejor !== actual) { actual = mejor; marcar(); }
    }, 80);
  }, { passive: true });

  anterior.addEventListener('click', function () { ir(actual - 1); });
  siguiente.addEventListener('click', function () { ir(actual + 1); });
  visor.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); ir(actual + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); ir(actual - 1); }
  });
  if (angosto.addEventListener) angosto.addEventListener('change', armar);
  armar();
})();
