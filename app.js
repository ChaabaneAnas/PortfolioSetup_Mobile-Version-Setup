const humb = document.querySelector('.humb');
const navMenu = document.querySelector('.nav');
const closeBtn = document.querySelector('.closebtn');
const menuElement = document.querySelector('.navL');

function active() {
  navMenu.classList.add('active');
}
function uActive() {
  navMenu.classList.remove('active');
}

humb.addEventListener('click', active);
closeBtn.addEventListener('click', uActive);
menuElement.addEventListener('click', uActive);

const win = document.querySelector('.container')
const overlay = document.querySelector('.overlay')
const buttons = document.querySelectorAll('.card button')
const data = {
  Image: 'src="images/SnapshootPortfolio.png" alt="" class="img"',
  header: 'Keeping track of hundreds of components',
  techs: ['Ruby on Rails','css','javascript'],
  descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
}

console.log(win)

win.innerHTML = (`
<div class="imgs">
<img class="img" ${data.Image}>
<span class="clsbtn">X</span>
</div>
<h3 class="title">${data.header}</h3>
<ul class="tech">
   <li>Ruby on rails</li>
   <li>css</li>
   <li> JavScript</li>
</ul>
<p class="description">${data.descrip}</p>
<div class="buttons">
<button class="live">See Live <img src="/images/seeliveicon.png" alt=""></button>
<button class="source">See Source <img src="/images/Vector.png" alt=""></button>
</div>`)



const clsbtn = document.querySelector('.clsbtn')


buttons.forEach (button => button.addEventListener('click', () => {
  popIt(win);
}));



clsbtn.addEventListener('clik', () => clsIt(win));

function popIt (win) {
  if (win == null) return
  win.classList.add('active');
  overlay.classList.add('active');
}

function clsIt (win) {
  if (win == null) return
  win.classList.remove('active');
  overlay.classList.remove('active');
}
