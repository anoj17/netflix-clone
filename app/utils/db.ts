import { PrismaClient } from '@prisma/client'


// best practice for prisma and then db.js ko code ho
// tespaxi npx prisma init garna parxa

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma