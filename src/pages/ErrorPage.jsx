import { Link } from "react-router-dom"

export default function ErrorPage() {
  return(
    <div className="w-full h-screen flex justify-center items-center bg-orange-100 flex-col -mt-20">
      <img src="src/assets/404error.png" alt="imagem" />
      <h1 className="text-5xl mb-16 mt-8 font-bold bg-orange-300 p-8 rounded-2xl shadow-2xl">Sorry, the page you were looking was not found.</h1>
      <Link to='/'>
        <button className="bg-zinc-900 cursor-pointer text-white text-xl px-28 py-4 rounded-xl hover:bg-zinc-800/90">Return to Home</button>
      </Link>
    </div>
  )
}