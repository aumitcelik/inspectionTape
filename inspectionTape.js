// local data
const reviews = [
  {
    id: 1,
    name: "Ümit Çelik",
    job: "web designer",
    img:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/avatars/ahsen_%C3%BCmit_%C3%A7elik_sGgNu4z.jpg",
    text:
      "Mükemmel karenin köşeleri yoktur, Mükemmel gemi en son inşa edilendir, Harika nota karmaşık olandır, Harika görselin belirli bir formu yoktur.",
  },
  {
    id: 2,
    name: "Ahsen Çelik",
    job: "web developer",
    img:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/avatars/ahsen_%C3%BCmit_%C3%A7elik_sGgNu4z.jpg",
    text:
      "Bütün taksim edildiğinde, her birinin isme ihtiyacı var. Yeteri kadar isim var. Kişi ne zaman duracağını bilmeli.",
  },
  {
    id: 3,
    name: "Ümit Ç.",
    job: "CTO",
    img:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/avatars/ahsen_%C3%BCmit_%C3%A7elik_sGgNu4z.jpg",
    text:
      "İRONİ Gerçekten de bir yandan super..., harika..., mega... gibi kullanmış fakat diğer yandan hiçbir detay vermemiş olursunuz. Okuyucunun bunun altında yatan anlamı bulması için bir kaç saat meditasyon yapıp hayatını sorgulaması gerekmektedir.",
  },
  {
    id: 4,
    name: "Ahsen Ümit Çelik",
    job: "the boss",
    img:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/avatars/ahsen_%C3%BCmit_%C3%A7elik_sGgNu4z.jpg",
    text:
      "İRONİ Kodunuzu olabildiğince kısa tutmalısınız. Bu sizin ne kadar zeki olduğunuzu gösterir! kaynak: https://tr.javascript.info/ninja-code",
  },
];
// select 
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting 
let currentItem = 0;

// load initial 
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person 
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
