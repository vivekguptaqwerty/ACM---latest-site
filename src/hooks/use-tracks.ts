import { useQuery } from "@tanstack/react-query";
import { mockTracks, type Track } from "@/lib/mockData";

export function useTracks() {
  return useQuery({
    queryKey: ["tracks"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockTracks;
    },
  });
}

export function useTrack(id: number) {
  return useQuery({
    queryKey: ["track", id],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      const track = mockTracks.find(t => t.id === id);
      return track || null;
    },
  });
}
