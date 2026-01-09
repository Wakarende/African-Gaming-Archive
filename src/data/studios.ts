import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import studio3 from "@/assets/studio-3.jpg";
import studio4 from "@/assets/studio-4.jpg";

export interface Studio {
  id: string;
  name: string;
  location: string;
  country: string;
  founded: string;
  platform: string;
  status: "Active" | "Inactive" | "Acquired";
  tagline: string;
  description: string[];
  heroImage: string;
  galleryImages: string[];
}

export const studios: Studio[] = [
  {
    id: "savanna-interactive",
    name: "Savanna Interactive",
    location: "Nairobi",
    country: "Kenya",
    founded: "2019",
    platform: "Mobile, PC",
    status: "Active",
    tagline: "Bringing African wildlife to life through play",
    description: [
      "Founded in a small apartment in Westlands, Savanna Interactive has grown to become one of East Africa's most recognized game studios. Their debut title, a wildlife management simulation, captured global attention for its authentic portrayal of African ecosystems.",
      "The team of twelve works from a converted warehouse in Nairobi's industrial district, surrounded by concept art and mounted monitors displaying their latest prototypes. Their commitment to ecological accuracy has led to partnerships with conservation organizations across the continent.",
      "Currently, the studio is developing an ambitious multiplayer experience that aims to connect players across Africa in a shared virtual savanna, funded through a combination of grants and private investment."
    ],
    heroImage: studio1,
    galleryImages: [studio1, studio2]
  },
  {
    id: "lamu-digital",
    name: "Lamu Digital Arts",
    location: "Mombasa",
    country: "Kenya",
    founded: "2021",
    platform: "Mobile",
    status: "Active",
    tagline: "Preserving coastal heritage through interactive storytelling",
    description: [
      "Lamu Digital Arts emerged from a cultural preservation project that sought to document the Swahili coast's rich history. The founders, a mix of historians and technologists, realized that interactive media could reach audiences that traditional documentation could not.",
      "Their first release transported players to ancient trading ports, solving puzzles rooted in maritime archaeology. The game has been adopted by schools across Kenya as an educational tool, introducing a new generation to their coastal heritage.",
      "The studio operates from a restored Swahili townhouse, its walls lined with artifacts that inspire their digital creations."
    ],
    heroImage: studio2,
    galleryImages: [studio2, studio1]
  },
  {
    id: "kampala-rhythm",
    name: "Kampala Rhythm Studios",
    location: "Kampala",
    country: "Uganda",
    founded: "2020",
    platform: "Mobile, Web",
    status: "Active",
    tagline: "Where East African music meets interactive art",
    description: [
      "What began as a side project by three music producers has evolved into Uganda's premier rhythm game studio. Kampala Rhythm Studios creates games that celebrate the diverse musical traditions of East Africa, from traditional drumming to contemporary Afrobeats.",
      "Their flagship title features collaborations with over fifty artists from across the region, each contributing original tracks and cultural context. The game has become an unexpected platform for musical discovery, introducing global audiences to East African sounds.",
      "The studio's headquarters doubles as a recording space, allowing seamless integration between music production and game development."
    ],
    heroImage: studio3,
    galleryImages: [studio3, studio4]
  },
  {
    id: "dar-futures",
    name: "Dar Futures Collective",
    location: "Dar es Salaam",
    country: "Tanzania",
    founded: "2018",
    platform: "PC, Console",
    status: "Active",
    tagline: "Imagining African cities of tomorrow",
    description: [
      "Dar Futures Collective occupies a unique position in the African gaming landscape, focusing exclusively on Afrofuturist narratives. Their games imagine African cities a century from now, blending speculative technology with traditional aesthetics.",
      "The collective operates on a cooperative model, with all members sharing equally in creative decisions and financial outcomes. This structure has attracted talent from across East Africa, creating a diverse team united by a shared vision of the future.",
      "Their current project, an open-world exploration of a transformed Dar es Salaam, has received critical acclaim and funding from international arts councils."
    ],
    heroImage: studio4,
    galleryImages: [studio4, studio3]
  }
];

export const getStudioById = (id: string): Studio | undefined => {
  return studios.find(studio => studio.id === id);
};

export const getAdjacentStudios = (currentId: string): { prev: Studio | null; next: Studio | null } => {
  const currentIndex = studios.findIndex(s => s.id === currentId);
  return {
    prev: currentIndex > 0 ? studios[currentIndex - 1] : null,
    next: currentIndex < studios.length - 1 ? studios[currentIndex + 1] : null
  };
};
