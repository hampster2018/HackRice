const get_name = async (setName, id) => {
    await fetch("https://highly-boss-dodo.ngrok-free.app/get_name/" + id)
          
    .then((response) => {
        return response.text();
          })
    .then((text) => {
        setName(text);
          });
  }
  
  export default get_name;