import { sanityClient } from './sanity'
import type { Studio, Game, Interview } from '@/types/sanity'

// Get all studios
export async function getAllStudios(): Promise<Studio[]> {
  const query = `*[_type == "studio"] | order(name asc) {
    _id,
    name,
    slug,
    location,
    founded,
    platform,
    status,
    heroImage,
    logo,
    shortDescription
  }`
  
  return await sanityClient.fetch(query)
}

// Get single studio by slug
export async function getStudioBySlug(slug: string): Promise<Studio | null> {
  const query = `*[_type == "studio" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    location,
    founded,
    platform,
    status,
    heroImage,
    logo,
    shortDescription,
    narrative,
    supportingImages
  }`
  
  return await sanityClient.fetch(query, { slug })
}

// Get games for a studio
export async function getGamesByStudio(studioId: string): Promise<Game[]> {
  const query = `*[_type == "game" && studio._ref == $studioId] | order(releaseYear desc) {
    _id,
    title,
    releaseYear,
    platform,
    status,
    screenshot,
    gameUrl
  }`
  
  return await sanityClient.fetch(query, { studioId })
}

// Get interviews for a studio
export async function getInterviewsByStudio(studioId: string): Promise<Interview[]> {
  const query = `*[_type == "interview" && studio._ref == $studioId] | order(date desc) {
    _id,
    publication,
    headline,
    date,
    url
  }`
  
  return await sanityClient.fetch(query, { studioId })
}