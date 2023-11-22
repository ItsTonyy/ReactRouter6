import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom"
import { loginUser } from "../GetVans"

interface AuthLoaderProps {
  request: {
    url: string
  }
}

interface ActionProps {
  request: {
    formData: () => Promise<FormData>
    url: string
  }
}

export function authLoader({ request }: AuthLoaderProps) {
  return new URL(request.url).searchParams.get("message")
}

export async function action({ request }: ActionProps) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")

  try {
    await loginUser({ email, password })
    localStorage.setItem("loggedIn", true)

    // alternative to directly returning the redirect propetie due to mirageJs errors
    const gettingRedirectParams =
      new URL(request.url).searchParams.get("redirectTo") || "/host"
    const response = redirect(gettingRedirectParams)
    response.body = true
    return response
  } catch (err) {
    return err.message
  }
}

export default function Login() {
  const loaderData = useLoaderData()
  const actionData = useActionData()
  const navigation = useNavigation()

  return (
    <div className='h-max w-full bg-orange-100 flex justify-center items-center '>
      <div
        className='w-5/12 m-16 py-36 bg-orange-300/90 border-2 border-black shadow-2xl
       flex items-center flex-col rounded-xl'
      >
        {loaderData && (
          <h2 className='p-3 font-medium bg-red-200/70 text-red-600 rounded-lg mb-4'>
            {loaderData}
          </h2>
        )}
        {actionData && (
          <h2 className='p-3 font-medium bg-red-200/70 text-red-600 rounded-lg mb-4'>
            {actionData}
          </h2>
        )}
        <h1 className='text-4xl font-semibold pb-12 top-1'>
          Sign in to your account
        </h1>

        <Form method='post' replace>
          <div className='flex flex-col'>
            <input
              type='email'
              name='email'
              placeholder='Email Adress'
              className='w-96 h-14 p-2 rounded-t-md border-black/50 border-x border-t border-b'
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              className='w-96 h-14 p-2 rounded-b-md border-black/50 border-x border-b'
            />
          </div>

          <button
            disabled={navigation.state === "submitting"}
            className={`w-96 ${actionData ? "bg-red-600 hover:bg-red-500" : "bg-black"}
            text-white mt-12 py-2 rounded-lg disabled:bg-zinc-900/50 hover:bg-zinc-800`}
          >
            {navigation.state === "idle" ? "Log in" : "submitting..."}
          </button>
        </Form>

        <div className='flex flex-row mt-12'>
          <h3 className='text-sm font-semibold'>Don&apos;t have an account?</h3>
          <h3 className='text-sm ml-1 cursor-pointer text-white font-semibold'>
            Create one Now.
          </h3>
        </div>
      </div>
    </div>
  )
}
