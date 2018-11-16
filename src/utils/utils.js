export function getHeaderHeight() {
    const header = document.getElementById('header');
    return header ? header.clientHeight : 0;
}

export function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}