export const addFavorite = async(product) => {
    try {
        const options = {
            method: 'POST',
            headers:{
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }
        const response = await fetch(window.location.href, options)
        const result = await response.json()
            return result
        
    } catch (error) {
        alert(error)
    }
    console.log(result)
}