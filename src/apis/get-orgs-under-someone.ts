export async function getOrgsUnderSomeone(user: string) {
  return await (await fetch(`https://api.github.com/users/${user}/orgs`)).json()
}