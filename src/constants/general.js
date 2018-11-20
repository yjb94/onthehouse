export function getBaseUri () {
    return 'https://onthe-house.firebaseapp.com/api/v1';
}
export function getEndpoint(route) {
    return `${getBaseUri()}/${route}`;
}
export function getConfig() {
    return {
        headers: { 'Content-Type': 'application/json' }
    }
}