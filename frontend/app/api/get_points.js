const get_points = async (setPoints, id) => {
  await fetch("https://highly-boss-dodo.ngrok-free.app/get_points/" + id)
        .then((response) => response.json())
        .then((data) => {
            setPoints(data);
        });
}

export default get_points;