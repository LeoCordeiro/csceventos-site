/* ─── Dynamic year ─── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ─── Mobile nav ─── */
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMobile.classList.toggle('open');
});

/* ─── Contact form: build WhatsApp message and redirect ─── */
const WHATSAPP_NUMBER = '5516996051729';

const contatoForm = document.getElementById('contatoForm');
const formCardInner = document.getElementById('formCardInner');
const formSuccess = document.getElementById('formSuccess');

contatoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('f-nome').value;
  const empresa = document.getElementById('f-empresa').value;
  const whatsapp = document.getElementById('f-whatsapp').value;
  const email = document.getElementById('f-email').value;
  const tipoEvento = document.getElementById('f-tipo').value;
  const convidados = document.getElementById('f-convidados').value;
  const data = document.getElementById('f-data').value;
  const descricao = document.getElementById('f-descricao').value;

  const msg = `Olá! Tenho interesse nos serviços da CSC Eventos.

Nome: ${nome}
Empresa: ${empresa}
WhatsApp: ${whatsapp}
E-mail: ${email || 'Não informado'}
Tipo de evento: ${tipoEvento || 'Não definido'}
Nº de convidados: ${convidados || 'Não informado'}
Data do evento: ${data || 'A definir'}

${descricao || ''}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');

  formCardInner.style.display = 'none';
  formSuccess.style.display = 'block';
});

/* ─── Intersection Observer ─── */
const ioOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, ioOptions);

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-up').forEach(el => io.observe(el));
