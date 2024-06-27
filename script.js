// Массив с путями к фоновым изображениям
const backgroundImages = [
    'img/vetchina.jpg',
    'img/diablo.jpg',
    'img/ovosi.jpg'
];

function logo() {
    window.location.replace("index.html");
}

let currentBackgroundIndex = 0;
const intervalDuration = 5000; // Интервал смены фонового изображения в миллисекундах

function changeBackground(index) {
    currentBackgroundIndex = index - 1;
    updateBackground();
}

function updateBackground() {
    const mainContent = document.getElementById('main-content');
    mainContent.style.backgroundImage = `url(${backgroundImages[currentBackgroundIndex]})`;
}

function autoChangeBackground() {
    setInterval(() => {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
        updateBackground();
    }, intervalDuration);
}

// Инициализация при загрузке страницы
window.onload = () => {
    updateBackground();
    autoChangeBackground();
};

function toggleMenu() {
    var menu = document.getElementById('popupMenu');
    var btn = document.querySelector('.btn');
    btn.classList.toggle('active');
    if(menu.style.marginTop === "0px"){
        menu.style.marginTop = "-245px"
    }else{
        menu.style.marginTop = "0px";
    }
}
function changeContent(contentId, event) {
    // Скрываем все дивы
    var allContents = document.querySelectorAll('.content');
    allContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Показываем выбранный див
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
    
    // Отмена стандартного поведения ссылки (перехода на новую страницу)
    event.preventDefault();
}
