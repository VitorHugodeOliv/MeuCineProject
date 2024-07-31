const apiRequestSearch = async (query: any) => {
    const apiKey = 'da380199dd5023ac813dce59f693d6d2';
    const apiUrl = 'https://api.themoviedb.org/3/search/movie';

    try {
        const response = await fetch(`${apiUrl}?api_key=${apiKey}&query=${query}&language=pt-BR`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
};

export default apiRequestSearch;