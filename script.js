const swiper = new Swiper(".swiper", {
  loop: false,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



const sucursales = [
  {
    nombre: "Aeropuerto Internacional Las Américas",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/3mE69U8572Yj6utLA"
  },
  {
    nombre: "Churchill",
    lunes_viernes: "8:00 AM a 6:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/bjjsY65KCZa7cCPC6"
  },
  {
    nombre: "República de Colombia",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/nXRia6CUqfuKjNgK7"
  },
  {
    nombre: "Coral Mall",
    lunes_viernes: "8:00 AM a 7:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/kc5Q9Vr2jtTmPUWN9"
  },
  {
    nombre: "Diamond",
    lunes_viernes: "8:00 AM a 6:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/w65HCkrSVkMsAbV37"
  },
  {
    nombre: "Los Prados",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/ZX2oLQsA8LyMfoW6A"
  },
  {
    nombre: "Luperon",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/BgVeu8Gg8zkpE83A8"
  },
  {
    nombre: "Megacentro",
    lunes_viernes: "8:00 AM a 6:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/Asvr3XynZwqKnp6R8"
  },
  {
    nombre: "Occidental Mall",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/RWcaCby6iEJ9cqDbA"
  },
  {
    nombre: "Pantoja",
    lunes_viernes: "8:00 AM a 6:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/cCVxi1mJmhkjSivr8"
  },
  {
    nombre: "Plaza Las Palmas",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: ""
  },
  {
    nombre: "Plaza Palmares",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/E9qYxR8oBycngkjj9"
  },
  {
    nombre: "Sambil",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/nPxWVtmpRsbX2r3D9"
  },
  {
    nombre: "Silver Sun Gallery",
    lunes_viernes: "8:00 AM a 6:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/vL6ZkHQFR3i7aDhv9"
  },
  {
    nombre: "Villa Mella",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: "https://maps.app.goo.gl/3JbfBedkKUez5rwLA"
  },
  {
    nombre: "Charles",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: ""
  },
  {
    nombre: "La Fuente (Zona Norte)",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: ""
  },
  {
    nombre: "Plaza Coral (Zona Norte)",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: ""
  },
  {
    nombre: "Tamboril (Zona Norte)",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: ""
  },
  {
    nombre: "San Cristóbal (Zona Sur)",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: ""
  },
  {
    nombre: "Romana (Zona Este)",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: ""
  },
  {
    nombre: "Multiplaza La Romana (Zona Este)",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: ""
  },
  {
    nombre: "Higuey (Zona Este)",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: ""
  },
  {
    nombre: "Bavaro City Center (Zona Este)",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: ""
  },
  {
    nombre: "Vital Las Américas",
    lunes_viernes: "8:00 AM a 5:00 PM",
    sabado: "8:00 AM a 12:00 PM",
    link: ""
  },
];
  
const swiperWrapper = document.querySelector('.new-wrapper');

sucursales.forEach(sucursal => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';

  slide.innerHTML = `
    <h3>${sucursal.nombre}</h3>
    <div class="horario">
      <p><img src="assets/reloj-de-pared.png" alt="" /> <strong>Lun - Vie:</strong> ${sucursal.lunes_viernes}</p>
      <p><strong>Sáb:</strong> ${sucursal.sabado}</p>
    </div>
    ${
      sucursal.link
        ? `<a class="btn-mapa" href="${sucursal.link}" target="_blank">Ver Mapa</a>`
        : `<button class="btn-mapa" disabled style="opacity: 0.5; cursor: default;">Ver Mapa</button>`
    }
  `;
  
  swiperWrapper.appendChild(slide);
});
