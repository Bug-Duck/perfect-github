export async function getUserData(user: string) {
  return await (await fetch(`https://api.github.com/users/${user}`)).json()
}