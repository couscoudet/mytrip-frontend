import { useApi } from "../../hooks/useApi";

const api = useApi();

export async function addTrip(trip) {
  try {
    const response = await api.post("trip", trip);
    console.log(response.status);
  } catch (e) {
    console.error(e);
  }
}
