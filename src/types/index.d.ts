export interface User {
  Type: string,
  dateOfBirth: string,
  email: string,
  username: string,
  __v: number,
  _id: string
}

export interface Apartment {
  id: number,
  name: string,
  address: string,
  numberOfRooms: number,
  numberOfOccupants: number
}

export interface Room {
  roomNumber: number,
  roomType: "RENTAL" | "OWNED",
  description: string
  price: number,
  location: string,
  bedrooms: number,
  bathrooms: number,
  size: number,
  images: string[]
  agent: {
    name: string,
    contact: number
  },
}
