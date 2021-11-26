class CatService {
    _apiBase = 'https://api.thecatapi.com/v1/images/search';
    _apiKey = '30fef1f0-b2dd-4dde-9d57-c7235355b024';

    getResourse = async () => {
        const res = await fetch(`${this._apiBase}?api_key=${this._apiKey}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}
            , received: ${res.status} `);
        }

        return await res.json();
    }
}
export default CatService;