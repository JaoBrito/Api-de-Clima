document.querySelector('#search').addEventListener('submit', (event) => {
  event.preventDefault();

  const cityName = document.querySelector('#city_name').value;

  if (!cityName){
    return alert("Digite o nome de uma cidade...")
  } 

  console.log(cityName)
});