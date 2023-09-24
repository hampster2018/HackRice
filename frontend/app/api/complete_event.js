const complete_event = (event, completed, user_id, max_points) => {
  const data = new FormData();
  data.append("event_name", event);
  data.append("completed", completed);
  data.append("user_id", user_id);
  data.append("carbon_points", max_points);

  // make post form request to backend
  fetch("https://highly-boss-dodo.ngrok-free.app/complete_event", {
    method: "POST",
    body: data,
  });

  return max_points;
};

export default complete_event;
