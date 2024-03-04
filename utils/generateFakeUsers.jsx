import { faker } from "@faker-js/faker"

const generateFakeUser = () => {
  return {
    id: faker.datatype.uuid(),
    fullName: faker.name.fullName(),
    email : faker.internet.email(),
    job: faker.name.jobTitle(),
    address : faker.address.streetAddress(),
    avatar: faker.image.avatar(),
  }
}

export const generateFakeUsers = (length) => {
  const users = []

  Array.from({ length: length }).forEach(() => {
    users.push(generateFakeUser())
  })

  return users
}