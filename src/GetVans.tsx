interface Van {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  type: string
  hostId?: string
}

interface ErrorResponse {
  message: string
  statusText: string
  status: number
}

interface Credentials {
  username: string
  password: string
}

export default async function getVans(id?: string): Promise<Van[]> {
  const url = id ? `/api/vans/${id}` : "/api/vans"
  const res = await fetch(url)

  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    }
  }

  const data = await res.json()
  return data.vans
}

export async function getHostVans(id?: string): Promise<Van[]> {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  const res = await fetch(url)

  if (!res.ok) {
    const error: ErrorResponse = {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    }
    throw error
  }

  const data = await res.json()
  return data.vans
}

export async function loginUser(creds: Credentials): Promise<any> {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  })
  const data = await res.json()

  if (!res.ok) {
    const error: ErrorResponse = {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    }
    throw error
  }
  
  return data
}
