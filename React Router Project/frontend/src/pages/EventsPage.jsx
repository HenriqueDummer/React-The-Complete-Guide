import { useEffect, useState } from "react";

import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // React Router will automatically send the user to the closest erroElement in the Route
    // throw new Response(
    //   JSON.stringify({ message: "Could not fetch events data!"}),
    //   {status: 500,}
    // );
    throw json(
      {message: "Could not fetch events data"},
      {
        status: 500
      }
    )
  } else {
    return response;
  }
};
