const modal = document.querySelector('.tlz-modal');
const modalErr = document.querySelector('.tlz-modal-error');

const forms = document.querySelectorAll('form')

const sendAd = (body) => {
  fetch(
    '/sendmail.php',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (!response.ok) {
        modalErr.classList.remove('tlz-modal--closed');
        modalErr.classList.add('tlz-modal--active');

        setTimeout(() => {
          modalErr.classList.remove('tlz-modal--active');
          modalErr.classList.add('tlz-modal--closed');
        }, 2000);
      } else {
        modal.classList.remove('tlz-modal--closed');
        modal.classList.add('tlz-modal--active');

        setTimeout(() => {
          modal.classList.remove('tlz-modal--active');
          modal.classList.add('tlz-modal--closed');
        }, 2000);
      }
    })
    .catch(() => {
      modalErr.classList.remove('tlz-modal--closed');
      modalErr.classList.add('tlz-modal--active');

      setTimeout(() => {
        modalErr.classList.remove('tlz-modal--active');
        modalErr.classList.add('tlz-modal--closed');
      }, 2000);
    });
};

forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    sendAd(data)
  })
})

// leaflet map

const InitialCoord = {
  LAT: 57.18282469277588,
  LNG: 65.56896086902842
};

const PinSize = {
  WIDTH: 40,
  HEIGHT: 40
};

const PinAnchorPos = {
  VERT: 20,
  HOR: 40
};

const MapAtribute = {
  PROVIDER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
};

const mapScale = 16;

const map = L.map('map');

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [PinSize.WIDTH, PinSize.HEIGHT],
  iconAnchor: [PinAnchorPos.VERT, PinAnchorPos.HOR],
});

const markerGroup = L.layerGroup().addTo(map);

const marker = L.marker({
  lat: InitialCoord.LAT,
  lng: InitialCoord.LNG
},
  {
    pinIcon,
  }
);

marker.addTo(markerGroup)

map.setView({
  lat: InitialCoord.LAT,
  lng: InitialCoord.LNG
}, mapScale);

L.tileLayer(
  MapAtribute.PROVIDER,
  {
    attribution: MapAtribute.ATRIBUTION,
  },
).addTo(map);

var phone = document.getElementById('phone');
var maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: false
}
new IMask(phone, maskOptions);

var email = document.getElementById('email');
var maskOptions2 = {
  mask: function (value) {
    if (/^[a-z0-9_\.-]+$/.test(value))
      return true;
    if (/^[a-z0-9_\.-]+@$/.test(value))
      return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
      return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
      return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
      return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
      return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
      return true;
    return false;
  },
  lazy: false
}
new IMask(email, maskOptions2);

var phone1 = document.getElementById('phone1');
var maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: false
}
new IMask(phone1, maskOptions);

var email1 = document.getElementById('email1');
var maskOptions2 = {
  mask: function (value) {
    if (/^[a-z0-9_\.-]+$/.test(value))
      return true;
    if (/^[a-z0-9_\.-]+@$/.test(value))
      return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
      return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
      return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
      return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
      return true;
    if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
      return true;
    return false;
  },
  lazy: false
}
new IMask(email1, maskOptions2);
