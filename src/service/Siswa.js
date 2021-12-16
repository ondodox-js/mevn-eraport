const url = 'http://localhost:5000/api/siswa/';

class Siswa {
  static get() {
    return new Promise((resolve, reject) => {
      try {
        const result = fetch(url).then(result => result.json());
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
  static insert(body) {
    return new Promise((resolve, reject) => {
      try {
        const result = fetch(`${url}`, {
          method: 'post',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(body),
        }).then(r => r.json());
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
  static destroy(id) {
    return new Promise((resolve, reject) => {
      try {
        const result = fetch(`${url}${id}`, {
          method: 'delete',
        }).then(result => result.json());
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default Siswa;
