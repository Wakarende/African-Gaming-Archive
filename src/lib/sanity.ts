import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '5ybmnwoi', // Replace with your actual ID
  dataset: 'production',
  useCdn: true, // Set to false if you want fresh data
  apiVersion: '2024-01-10',
})

// Helper function to get image URLs
export function urlFor(source: any) {
  return `https://cdn.sanity.io/images/${sanityClient.config().projectId}/${sanityClient.config().dataset}/${source.asset._ref.split('-')[1]}-${source.asset._ref.split('-')[2]}.${source.asset._ref.split('-')[3]}`
}