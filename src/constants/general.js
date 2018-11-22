export function getBaseUri () {
    return 'https://onthe-house.firebaseapp.com/api/v1';
}
export function getEndpoint(route) {
    return `${getBaseUri()}/${route}`;
}
  
export function getConfig() {
    const idToken = localStorage.getItem('idToken');
    return {
        headers: { 'Content-Type': 'application/json', 'Authorization':idToken }
    }
}


export const config = {
    color:{
        key:"rgba(247, 112, 60, 1.0)",
        disabled:"#777"
    },
}