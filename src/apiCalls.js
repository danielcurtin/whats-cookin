let apiCalls;

const userData = fetch('http://localhost:3001/api/v1/users')
.then(response => response.json())
.then(data => data)
.catch(err => console.log(err))

const ingData = fetch('	http://localhost:3001/api/v1/ingredients')
.then(response => response.json())
.then(data => data)
.catch(err => console.log(err))

const recData = fetch('http://localhost:3001/api/v1/recipes')
.then(response => response.json())
.then(data => data)
.catch(err => console.log(err))

apiCalls = [userData, ingData, recData]

function saveFavorites() {

};

export { apiCalls, saveFavorites }











