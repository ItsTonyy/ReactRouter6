import { redirect } from "react-router-dom"

export default async function AuthRequired() {
  const isLoggedIn = false

  if(!isLoggedIn) {
    const response = redirect('/login')
    response.body = true
    throw response
  }
  return null
}