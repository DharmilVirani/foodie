export const isUserLoggedIn = () => {
    const token = localStorage.getItem('token')
    let isLoggedIn = false
    if (token && JSON.parse(token)) isLoggedIn = true
    return isLoggedIn
}
