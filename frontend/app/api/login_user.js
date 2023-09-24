const login_user = async (email) => {
  if (email == "") {
    email = "abigailsmith@example.com";
  }
  const id = await fetch(
    "https://highly-boss-dodo.ngrok-free.app/get_userid/" + email,
  )
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      return data;
    });
  console.log(id);
  return id;
};

export default login_user;
