export async function getEvents(user: string) {
  const response = await fetch(
    `https://api.github.com/users/${user}/events/public`,
  );
  const data = await response.json();
  return data;
}