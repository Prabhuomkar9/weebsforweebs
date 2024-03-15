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
