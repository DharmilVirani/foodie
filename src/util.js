export const isUserLoggedIn = () => {
    const token = localStorage.getItem('token')
    let isLoggedIn = false
    // Check if the token exists and is a non-empty string
    if (token) isLoggedIn = true
    return isLoggedIn
}
