let backendhost;
const hostname = window && window.location && window.location.hostname;

if(hostname == "location"){
    backendhost="http://localhost:8080"
}
export const API_BASE_RUL = `${backendhost}`;
