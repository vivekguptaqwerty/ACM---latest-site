// Types
export interface Track {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImageUrl?: string;
}

// Mock Data
export const mockTracks: Track[] = [
  {
    id: 1,
    title: "Team Size: 2–4 members",
    description: "Form your dream team with 2 to 4 talented individuals ready to innovate.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Open to All Engineering Undergraduates",
    description: "All India Engineering undergraduate students are eligible to participate in this national-level ideathon.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Inter-College Teams Allowed",
    description: "Collaborate with students from different colleges across India to build innovative solutions.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Inter-Specialization Teams",
    description: "Bring together diverse skills from different specializations for a well-rounded team.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Registration: ₹400",
    description: "Registration fee applies only for teams selected for the final round. Deadline: 13 February 2026.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "National Level Competition",
    description: "Compete with the best minds from across India in this prestigious ideathon.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop"
  }
];
