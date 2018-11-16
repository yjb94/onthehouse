export function getHeaderHeight() {
    const header = document.getElementById('header');
    return header ? header.clientHeight : 0;
}