let currentRotation = 0; // 0: front, 1: side, 2: back
let gender = 'male';

const avatar = document.getElementById('avatar');
const avatarDress = document.getElementById('avatarDress');
const avatarShoes = document.getElementById('avatarShoes');
const avatarHair = document.getElementById('avatarHair');

document.getElementById('maleButton').addEventListener('click', function () {
    gender = 'male';
    avatar.classList.remove('flip-horizontal');
    updateAvatar();
});

document.getElementById('femaleButton').addEventListener('click', function () {
    gender = 'female';
    avatar.classList.add('flip-horizontal');
    updateAvatar();
});

document.getElementById('rotateLeft').addEventListener('click', function () {
    currentRotation = (currentRotation + 2) % 3; // Rotate left
    updateAvatar();
});

document.getElementById('rotateRight').addEventListener('click', function () {
    currentRotation = (currentRotation + 1) % 3; // Rotate right
    updateAvatar();
});

function updateAvatar() {
    let avatarSrc;
    if (gender === 'male') {
        avatarSrc = ['images/male_avatar_front.png', 'images/male_avatar_side.png', 'images/male_avatar_back.png'];
    } else {
        avatarSrc = ['images/female_avatar_front.png', 'images/female_avatar_side.png', 'images/female_avatar_back.png'];
    }
    avatar.src = avatarSrc[currentRotation];
}

// Dress selection
document.querySelectorAll('.dress').forEach(item => {
    item.addEventListener('click', function () {
        avatarDress.src = this.src;
        avatarDress.style.display = 'block';
    });
});

// Shoe selection
document.querySelectorAll('.shoe').forEach(item => {
    item.addEventListener('click', function () {
        avatarShoes.src = this.src;
        avatarShoes.style.display = 'block';
    });
});

// Hair selection
document.querySelectorAll('.hair').forEach(item => {
    item.addEventListener('click', function () {
        avatarHair.src = this.src;
        avatarHair.style.display = 'block';
    });
});
