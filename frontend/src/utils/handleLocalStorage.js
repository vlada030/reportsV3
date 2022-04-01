export const getFromLocalStorage = (name) => {
    return localStorage.getItem(name)
}

export const setToLocalStorage = (name, value) => {
        localStorage.setItem(name, value)
}