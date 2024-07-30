const apiRequest = async () => {
    const apiKey = 'da380199dd5023ac813dce59f693d6d2'
    const apiUrl = 'https://api.themoviedb.org/3/movie/'

    try {
        const response = await fetch(`${apiUrl}popular?api_key=${apiKey}&language=pt-BR&page=1`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export default apiRequest