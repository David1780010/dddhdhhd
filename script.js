document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surpriseButton');
    const surprise = document.getElementById('surprise');
    const revealButton = document.getElementById('revealButton');
    const hiddenWord = document.getElementById('hiddenWord');
    const additionalText = document.getElementById('additionalText');
    const leftImage = document.getElementById('leftImage');
    const rightImage = document.getElementById('rightImage');

    // Добавляем эффект пульсации для кнопки
    setInterval(() => {
        surpriseButton.style.transform = `translate(-50%, -50%) scale(${1 + Math.sin(Date.now() / 500) * 0.02})`;
    }, 16);

    surpriseButton.addEventListener('click', () => {
        // Анимация исчезновения кнопки
        surpriseButton.style.animation = 'flyAway 0.5s forwards';
        
        // Показываем сюрприз после небольшой задержки
        setTimeout(() => {
            surpriseButton.classList.add('hidden');
            surprise.classList.remove('hidden');
        }, 500);
    });

    revealButton.addEventListener('click', () => {
        // Анимация исчезновения кнопки "посмотреть"
        revealButton.style.transform = 'scale(0)';
        revealButton.style.opacity = '0';
        
        // Показываем скрытое слово
        setTimeout(() => {
            revealButton.style.display = 'none';
            hiddenWord.style.opacity = '1';
            
            // Показываем дополнительный текст через небольшую задержку
            setTimeout(() => {
                additionalText.classList.remove('hidden');
                additionalText.style.opacity = '1';
                
                // Показываем обе картинки через небольшую задержку
                setTimeout(() => {
                    leftImage.classList.remove('hidden');
                    rightImage.classList.remove('hidden');
                    leftImage.style.opacity = '1';
                    rightImage.style.opacity = '1';
                }, 500);
            }, 500);
        }, 300);
    });
}); 