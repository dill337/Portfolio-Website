let theme = localStorage.getItem('theme')

if (theme == null) {
  setTheme('dark')
} else {
  setTheme(theme)
}

let themeSelector = document.getElementsByClassName('theme-selector')

for (var i = 0; themeSelector.length > i; i++) {
  themeSelector[i].addEventListener('click', function () {
    let mode = this.dataset.mode
    console.log('you clicked', mode)
    setTheme(mode)
  })
}

function setTheme(mode) {
  if (mode == 'dark') {
    document.getElementById('theme-style').href = 'css/styles.css'
  }
  if (mode == 'white') {
    document.getElementById('theme-style').href = 'css/white.css'
  }
  if (mode == 'purple') {
    document.getElementById('theme-style').href = 'css/purple.css'
  }
  if (mode == 'green') {
    document.getElementById('theme-style').href = 'css/green.css'
  }

  localStorage.setItem('theme', mode)
};

const hamburger = document.getElementById('hamburger');
const navigationList = document.getElementById('navigation-list');

hamburger.addEventListener('click', () => {
  navigationList.classList.toggle('show');
});