function showPage(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById('page-' + id);
    if(target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Инициализация отзывов о КЛИНИНГЕ
function initReviews() {
    const tracks = ['track-1', 'track-2'];
    const cleaningReviews = [
        "Квартира просто сияет! Огромное спасибо PRO CLEANING.",
        "Заказывал Zoo-cleaning после щенка, запаха как не бывало.",
        "Лучший Car-cleaning в городе, салон как новый.",
        "Очень профессионально. Убрали все пятна с ковролина.",
        "После ремонта спасли мой дом. PRO сервис!",
        "Вежливый персонал и идеальная чистота.",
        "Car-cleaning превзошел ожидания, рекомендую!",
        "Самая качественная уборка, которую я видел."
    ];

    tracks.forEach(trackId => {
        const track = document.getElementById(trackId);
        if(!track) return;
        for(let i=0; i<22; i++) {
            const card = document.createElement('div');
            card.className = 'rev-card';
            const randomText = cleaningReviews[Math.floor(Math.random() * cleaningReviews.length)];
            card.innerHTML = `
                <div style="color:var(--yellow); margin-bottom:10px;">★★★★★</div>
                <p style="font-size:14px; line-height:1.4;">"${randomText}"</p>
                <div style="color:var(--orange); font-size:12px; margin-top:10px; font-weight:900;">CLIENT // PRO CLEANING</div>
            `;
            track.appendChild(card);
        }
        track.innerHTML += track.innerHTML; // Для бесконечности
    });
}

document.addEventListener('DOMContentLoaded', initReviews);

function openOrderModal(service, placeholder) {
    document.getElementById('selected-service-name').innerText = service.toUpperCase();
    document.getElementById('dynamic-detail').placeholder = placeholder;
    document.getElementById('orderModal').style.display = 'flex';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.getElementById('order-form-step').style.display = 'block';
    document.getElementById('order-success-step').style.display = 'none';
}

function submitFinalOrder() {
    const phone = document.getElementById('phone').value;
    if(phone.length < 5) return alert("ОШИБКА: Проверьте номер");
    
    document.getElementById('order-form-step').style.display = 'none';
    document.getElementById('order-success-step').style.display = 'block';
}
