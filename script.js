const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        tabButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        tabContents.forEach(function (content) {
            content.classList.remove('active');
            content.style.display = '';  // <- ini WAJIB, buang inline style lama
        });

        const tabName = button.dataset.tab;
        const matchingContent = document.querySelector(`.tab-content[data-content="${tabName}"]`);
        if (matchingContent) {
            matchingContent.classList.add('active');
        }
    });
});

document.querySelectorAll('.tab-content.active').length