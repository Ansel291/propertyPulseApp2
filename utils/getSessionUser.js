//import { getServerSession } from 'next-auth'
import { getServerSession } from 'next-auth/next'
//import { auth } from '@/auth'
import { authOptions } from '@/utils/authOptions'

export const getSessionUser = async () => {
  const session = await getServerSession(authOptions)
  //const session = await auth(authOptions)

  if (!session || !session.user) {
    return null
  }

  return {
    user: session.user,
    userId: session.user.id,
  }
}
