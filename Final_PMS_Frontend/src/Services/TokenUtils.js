
export function getToken(){
    return (localStorage.getItem("token"));
}

export function isAuthenticated(){
    console.log(typeof(getToken()));
    return getToken() ? true:false;
}

export function logout(){
    localStorage.removeItem("token");
}