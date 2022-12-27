/* eslint-disable */ 
export default class LocalStorage {
    // save items to local storage
  
    setItems(item) {
      window.localStorage.setItem('search', JSON.stringify(item));
    }

    getItems() {
      const result = JSON.parse(window.localStorage.getItem('search'));
      return result;
    }

    deleteItems(id) {
      const search = this.getItems();
      const results = search.filter((item) => item.id !== id);
      return results;
    }
}
