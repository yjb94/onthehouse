export function getHeaderHeight() {
    const header = document.getElementById('header');
    return header ? header.clientHeight : 0;
}

export function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getLocale() {
    let locale = localStorage.getItem('locale');
    if(!locale || locale === 'auto') {
        locale = navigator.language || navigator.userLanguage || 'auto'
    }
    return locale;
}
export function setLocale(locale = 'auto') {
    localStorage.setItem('locale', locale);
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}