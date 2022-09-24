import { UsersMock } from 'Assets/Mocks'

const getAllUsers = async (
  page: number,
  itemsPerPage: number,
  hasPagination: boolean = true
) => {
  return hasPagination
    ? [...UsersMock].slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : [...UsersMock]
}

const getUserById = async (id: string) => {
  return [...UsersMock].find((item) => item._id === id)
}

export const UserAPI = {
  getAllUsers,
  getUserById
}
