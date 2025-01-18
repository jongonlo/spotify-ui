import { TrackInfo } from './TrackInfo'
import { Cover } from './Cover'
import { Separator } from './Separator'
import { useState } from 'react'
import useTrackStore from '../store/trackStore'
import { AlertMessage } from './AlertMessage'

export const IsrcSearch = () => {
  const [isrc, setIsrc] = useState('');
  const { searchTrack, track, errorMessage, setErrorMessage } = useTrackStore()


  const handleChange = (e: any) => {
    console.log(e.target.value)
    setIsrc(e.target.value);
  }

  const handleSearch = () => {
      searchTrack(isrc);
  }

  return (
    <>
      <div className='flex flex-col justify-self-center w-10/12 sm:w-1/2 gap-5'>
        <label className='text-2xl sm:text-4xl self-start'>Enter an ISRC</label>
        <div className='flex flex-col sm:flex-row gap-5'>
          <input className='block w-full h-16 p-4 text-3xl text-gray-900 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-gray-600' onChange={handleChange}></input>
          <button className='w-32 p-4 text-white rounded-xl bg-black hover:bg-gray-900' onClick={handleSearch}>Search</button>
        </div>
      </div>
      {errorMessage.message && (
        <AlertMessage
          message={errorMessage.message}
          duration={5000}
          code={errorMessage.errorCode}
          isrc={isrc}
          onClose={() => setErrorMessage({})}
        />
      )}
      
          <>
            <TrackInfo track={track} />

          </>
        

    </>
  )
}
