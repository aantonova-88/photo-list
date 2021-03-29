export default class ApiService {
  _apiBase = 'https://boiling-refuge-66454.herokuapp.com';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }
}

getAllPhotos = async () => {
  const res = await this.getResource(`/images/`);
  return console.log(res);
}
