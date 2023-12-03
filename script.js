let con = document.getElementById("con");
const btn = document.getElementById("button")
const api = "https://meowfacts.herokuapp.com/";

function button(){
 fetch(api)
  .then((response) => response.json())
  .then((data) => {
    const formattedData = `
        <p>Facts: ${data.data}</p>
        
        
        
      `;

    con.innerHTML = formattedData;

    console.log(data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
}

button()

btn.addEventListener("click", button);