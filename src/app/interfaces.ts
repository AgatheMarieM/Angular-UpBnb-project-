interface HousesData {
  page: number
  total: number
  pages: number
  limit: number
  data: House[]
}

export {HousesData};

interface House {
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

interface HouseHost {
  name: string,
  photo: string,
  type: string,
  rating: number
}

export {HouseHost};


interface HouseDetails {
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


interface HouseFeatures {
  features: string[]
}

export {HouseFeatures};

interface Features {
  smokingAllowed?: string,
  washingMachine?: string,
  airConditioner?: string,
  fireplace?: string,
  tv?: string,
  petsAllowed?: string,
  wifi?: string,
  microwave?: string
}

export {Features};
