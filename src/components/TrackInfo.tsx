import { Separator } from './Separator'
import { Track } from '../model/track'

interface TrackInfoProps {
  track: Track;
}

export const TrackInfo = ({ track }: TrackInfoProps) => {
  return (
    <div className='mt-10 p-5 flex flex-col sm:flex-row justify-self-center justify-around w-10/12 gap-5 bg-white rounded-lg shadow-lg'>
      {track.name == null ? <span>No Results</span> :
        <>
          <div className='flex flex-col w-full'>
            <span className='text-lg font-semibold'>Track Information</span>
            <div className='flex flex-col items-start text-start gap-4 mt-8'>
              <span><span className='font-bold'>ISRC:</span> {track.isrc}</span>
              <Separator orientation='h' />
              <span><span className='font-bold'>Track Name:</span> {track.name}</span>
              <Separator orientation='h' />
              <span><span className='font-bold'>Artist Name:</span> {track.artistName}</span>
              <Separator orientation='h' />
              <span><span className='font-bold'>Album Name:</span> {track.albumName}</span>
              <Separator orientation='h' />
              <span><span className='font-bold'>Explicit:</span> {track.explicit ? 'Yes' : 'No'}</span>
              <Separator orientation='h' />
              <span><span className='font-bold'>Playback Seconds:</span> {track.playbackSeconds}</span>
              <Separator orientation='h' />
            </div>
          </div>
          <Separator orientation='v' />
          <div className='w-full'>
            <img src={track.cover}></img>
          </div>
        </>
      }
    </div>
  )
}
