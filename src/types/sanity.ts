export interface Studio {
  _id: string
  name: string
  slug: {
    current: string
  }
  location: {
    city: string
    country: string
  }
  founded: number
  platform: string[]
  status: 'active' | 'inactive'
  heroImage: any
  logo?: any
  shortDescription: string
  narrative: any[]
  supportingImages: any[]
}

export interface Game {
  _id: string
  title: string
  studio: {
    _ref: string
    name?: string
  }
  releaseYear: number
  platform: string[]
  status: 'released' | 'in-development'
  screenshot: any
  gameUrl?: string
}

export interface Interview {
  _id: string
  studio: {
    _ref: string
  }
  publication: string
  headline: string
  date: string
  url: string
}