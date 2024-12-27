function openMyketDevLink() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var link = isMobile ? 'myket://developer/com.BazdarGames.FreeDriving' : 'https://myket.ir/developer/dev-90509';
    window.location.href = link;
}
function openMobarezLink() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var link = isMobile ? 'myket://details?id=com.Mobarez.Mobarez' : 'https://myket.ir/app/com.Mobarez.Mobarez';
    window.location.href = link;
}
function openFreeDrivingLink() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var link = isMobile ? 'myket://details?id=com.BazdarGames.FreeDriving' : 'https://myket.ir/app/com.BazdarGames.FreeDriving';
    window.location.href = link;
}
