export interface User {
  id: number,
  name: string,
  email: string,
  role: string,
  phoneNumber: string,
  apartment: string
}

export interface Apartment {
  id: number,
  name: string,
  address: string,
  numberOfRooms: number,
  numberOfOccupants: number
}
