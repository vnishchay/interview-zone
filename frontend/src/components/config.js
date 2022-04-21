const headers = {
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
    }
}
export {
    headers
}