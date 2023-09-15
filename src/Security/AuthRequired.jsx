import { redirect } from "react-router-dom"

export default async function AuthRequired(request) {
  const isLoggedIn = localStorage.getItem('loggedIn') 
  const pathname = new URL(request.url).pathname
  console.log(pathname)
  
  if(!isLoggedIn) {
    const response = redirect(`/login?message=You must log in first&redirectTo=${pathname}`)
    response.body = true
    throw response
  }
  return null
}