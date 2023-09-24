const get_available_points = async (setAvailable, id) => {
  try {
    fetch("https://highly-boss-dodo.ngrok-free.app/get_available_points/" + id)
      .then((response) => response.text())
      .then((data) => {
        setAvailable(parseInt(data, 10));
      });
  } catch (error) {
    console.log(error);
  }
};

export default get_available_points;

