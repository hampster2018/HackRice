const get_events = async (id) => {
  try {
    const response = await fetch(
      "https://highly-boss-dodo.ngrok-free.app/get_events/" + id,
    )
      .then((response) => response.json())
      .then((data) => {
        return data.reduce((acc, event) => {
          const date = event.date;
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(event);
          return acc;
        }, {});
      });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default get_events;
