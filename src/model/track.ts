export interface Track{
  isrc?: string;
  name?: string;
  artistName?: string;
  albumName?: string;
  explicit?: boolean;
  playbackSeconds?: number;
  cover?: string;
}