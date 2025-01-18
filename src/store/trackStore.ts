import { create } from "zustand";
import { Track } from "../model/track";
import { addTrack, searchTrack } from "../services/trackService";
import { ErrorMessage } from "../model/errorMessage";

interface TrackState {
  setTrack: (track: Track) => any;
  addTrack: (isrc: string) => any;
  errorMessage: ErrorMessage;
  setErrorMessage: (errorMessage: ErrorMessage) => any;
  searchTrack: (isrc: string) => any;
  track: Track;
}

const useTrackStore = create<TrackState>((set) => ({
  track: {},
  errorMessage: {},
  setErrorMessage: async (errorMessage: ErrorMessage) => {
    set({ errorMessage: errorMessage });
  },
  setTrack: async (track: Track) => {
    set({ track: track });
  },
  addTrack: async (isrc: string) => {
    const response = await addTrack(isrc);
    if(response.success){
      set({ track: response.data });
    }else{
      set({errorMessage: response.error})
    }
  },
  searchTrack: async (isrc: string) => {
    const response = await searchTrack(isrc);
    if(response.success){
      set({ track: response.data });
    }else{
      set({errorMessage: response.error, track: {}})
    }
  },

}));

export default useTrackStore;