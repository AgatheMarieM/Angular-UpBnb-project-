interface HousesData {
  page: number
  total: number
  pages: number
  limit: number
  data: House[]
}

export {HousesData};

interface House  {
  id: number,
  title: string,
  country: string,
  city: string,
  rating: number,
  price: number,
  host_type: string,
  featured_photo: string
}

export {House};

interface HouseDetails{
  id: number,
  title: string,
  country: string,
  city: string,
  rating: number,
  price: number,
  featured_photo: string,
  description: string
}

export {HouseDetails};
