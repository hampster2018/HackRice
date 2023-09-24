const get_events = async (setEvents) => {
  try {
    await fetch("https://highly-boss-dodo.ngrok-free.app/get_events/1")
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
      })
      .then((data) => {
        setEvents(data);
      });
  } catch (error) {
    console.log(error);
  }
};

export default get_events;
