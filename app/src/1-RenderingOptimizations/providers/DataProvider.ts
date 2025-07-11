class DataProvider {
  static getData(selectedValue: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { selectedValue: selectedValue },
          { id: 1, name: 'Item 1', description: 'Description for Item 1' },
          { id: 2, name: 'Item 2', description: 'Description for Item 2' },
          { id: 3, name: 'Item 3', description: 'Description for Item 3' },
          { id: 4, name: 'Item 4', description: 'Description for Item 4' },
          { id: 5, name: 'Item 5', description: 'Description for Item 5' }
        ]);
      }, 2000); // Simulate a delay of 1 second
    });
  }
}

export default DataProvider;
