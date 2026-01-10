import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import studio3 from "@/assets/studio-3.jpg";
import studio4 from "@/assets/studio-4.jpg";

export interface Game {
  id: string;
  title: string;
  year: string;
  platform: string;
  status: "Released" | "In Development";
  coverImage: string;
  playUrl?: string;
}

export interface Interview {
  id: string;
  publication: string;
  date: string;
  headline: string;
  url: string;
}

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
  games: Game[];
  interviews: Interview[];
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
    galleryImages: [studio1, studio2],
    games: [
      {
        id: "savanna-keeper",
        title: "Savanna Keeper",
        year: "2020",
        platform: "Mobile, PC",
        status: "Released",
        coverImage: studio1,
        playUrl: "https://example.com/savanna-keeper"
      },
      {
        id: "migration-trails",
        title: "Migration Trails",
        year: "2021",
        platform: "Mobile",
        status: "Released",
        coverImage: studio2,
        playUrl: "https://example.com/migration-trails"
      },
      {
        id: "serengeti-nights",
        title: "Serengeti Nights",
        year: "2022",
        platform: "PC",
        status: "Released",
        coverImage: studio3,
        playUrl: "https://example.com/serengeti-nights"
      },
      {
        id: "wild-hearts-multiplayer",
        title: "Wild Hearts: Connected Savanna",
        year: "2025",
        platform: "PC, Console",
        status: "In Development",
        coverImage: studio4
      },
      {
        id: "conservation-quest",
        title: "Conservation Quest",
        year: "2023",
        platform: "Mobile",
        status: "Released",
        coverImage: studio1,
        playUrl: "https://example.com/conservation-quest"
      },
      {
        id: "predator-prey",
        title: "Predator & Prey",
        year: "2022",
        platform: "PC",
        status: "Released",
        coverImage: studio2,
        playUrl: "https://example.com/predator-prey"
      },
      {
        id: "safari-simulator",
        title: "Safari Simulator VR",
        year: "2024",
        platform: "VR",
        status: "Released",
        coverImage: studio3,
        playUrl: "https://example.com/safari-vr"
      },
      {
        id: "elephant-journey",
        title: "Elephant Journey",
        year: "2025",
        platform: "Mobile",
        status: "In Development",
        coverImage: studio4
      }
    ],
    interviews: [
      {
        id: "techcrunch-2023",
        publication: "TechCrunch Africa",
        date: "March 2023",
        headline: "How Savanna Interactive is putting African wildlife in players' hands",
        url: "https://example.com/techcrunch-interview"
      },
      {
        id: "polygon-2022",
        publication: "Polygon",
        date: "November 2022",
        headline: "The Kenyan studio making conservation games that actually matter",
        url: "https://example.com/polygon-interview"
      },
      {
        id: "gamesindustry-2021",
        publication: "GamesIndustry.biz",
        date: "June 2021",
        headline: "Savanna Interactive raises $2M for multiplayer wildlife game",
        url: "https://example.com/gamesindustry-interview"
      }
    ]
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
    galleryImages: [studio2, studio1],
    games: [
      {
        id: "swahili-traders",
        title: "Swahili Traders: Port of Lamu",
        year: "2022",
        platform: "Mobile",
        status: "Released",
        coverImage: studio2,
        playUrl: "https://example.com/swahili-traders"
      },
      {
        id: "coastal-mysteries",
        title: "Coastal Mysteries",
        year: "2023",
        platform: "Mobile",
        status: "Released",
        coverImage: studio1,
        playUrl: "https://example.com/coastal-mysteries"
      },
      {
        id: "dhow-navigator",
        title: "Dhow Navigator",
        year: "2024",
        platform: "Mobile, Web",
        status: "In Development",
        coverImage: studio3
      }
    ],
    interviews: [
      {
        id: "bbc-africa-2023",
        publication: "BBC Africa",
        date: "August 2023",
        headline: "The game studio preserving Swahili heritage one puzzle at a time",
        url: "https://example.com/bbc-interview"
      },
      {
        id: "nation-2022",
        publication: "Daily Nation",
        date: "December 2022",
        headline: "Mombasa studio brings coastal history to life through gaming",
        url: "https://example.com/nation-interview"
      }
    ]
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
    galleryImages: [studio3, studio4],
    games: [
      {
        id: "beat-of-kampala",
        title: "Beat of Kampala",
        year: "2021",
        platform: "Mobile",
        status: "Released",
        coverImage: studio3,
        playUrl: "https://example.com/beat-of-kampala"
      },
      {
        id: "afrobeats-master",
        title: "Afrobeats Master",
        year: "2022",
        platform: "Mobile, Web",
        status: "Released",
        coverImage: studio4,
        playUrl: "https://example.com/afrobeats-master"
      },
      {
        id: "drum-circle",
        title: "Drum Circle: Traditional Rhythms",
        year: "2023",
        platform: "Mobile",
        status: "Released",
        coverImage: studio1,
        playUrl: "https://example.com/drum-circle"
      },
      {
        id: "rhythm-fusion",
        title: "Rhythm Fusion Online",
        year: "2025",
        platform: "Web, Mobile",
        status: "In Development",
        coverImage: studio2
      }
    ],
    interviews: [
      {
        id: "vice-2023",
        publication: "Vice Gaming",
        date: "February 2023",
        headline: "How Uganda's rhythm game scene is creating new stars",
        url: "https://example.com/vice-interview"
      },
      {
        id: "monitor-2022",
        publication: "Daily Monitor",
        date: "September 2022",
        headline: "Kampala studio blends music production with game development",
        url: "https://example.com/monitor-interview"
      }
    ]
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
    galleryImages: [studio4, studio3],
    games: [
      {
        id: "dar-2118",
        title: "Dar 2118",
        year: "2020",
        platform: "PC",
        status: "Released",
        coverImage: studio4,
        playUrl: "https://example.com/dar-2118"
      },
      {
        id: "neon-uhuru",
        title: "Neon Uhuru",
        year: "2022",
        platform: "PC, Console",
        status: "Released",
        coverImage: studio3,
        playUrl: "https://example.com/neon-uhuru"
      },
      {
        id: "future-city-dar",
        title: "Future City: Dar es Salaam",
        year: "2025",
        platform: "PC, Console",
        status: "In Development",
        coverImage: studio1
      }
    ],
    interviews: [
      {
        id: "kotaku-2022",
        publication: "Kotaku",
        date: "July 2022",
        headline: "This Tanzanian studio is building Afrofuturism's gaming future",
        url: "https://example.com/kotaku-interview"
      },
      {
        id: "citizen-2021",
        publication: "The Citizen",
        date: "March 2021",
        headline: "Dar Futures Collective wins international arts grant for new game",
        url: "https://example.com/citizen-interview"
      },
      {
        id: "ign-2023",
        publication: "IGN",
        date: "October 2023",
        headline: "Neon Uhuru review: A stunning vision of African futures",
        url: "https://example.com/ign-interview"
      }
    ]
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