import { redirect } from "react-router-dom"

export default async function AuthRequired() {
  const isLoggedIn = localStorage.getItem('loggedIn') 

  if(!isLoggedIn) {
    const response = redirect('/login?message=You must log in first')
    response.body = true
    throw response
  }
  return null
}