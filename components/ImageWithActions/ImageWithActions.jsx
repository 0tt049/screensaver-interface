import React, {useState, useEffect } from 'react'
import ActionButton from './ActionButton'
import NFT from '../../types'
import VideoPlayer from '../MediaViewer/VideoPlayer'
import AudioPlayer from '../MediaViewer/AudioPlayer'
import PdfViewer from '../MediaViewer/PdfViewer'

// interface IProps {
//   nft: NFT
//   src: string
//   alt?: string
//   actions: typeof ActionButton[] // TODO: Fix this typing which is throwing errors
// }

const ImageWithActions = ({ src, nft, alt, actions }) => {
  const [type, setType] = useState('')

  useEffect(() => {
    if (!nft?.media?.mimeType) return 
    const typeArray = nft?.media?.mimeType.split('/')
    console.log("TYPE", typeArray[0])
    setType(typeArray[0])
  }, [])
  console.log("NFT", nft)
  return (
    <div className={'relative'}>
       { type === 'image' && (
        <img src={nft.image} className={'w-full'}/>
      )}
      {type === 'video' && (
        <VideoPlayer fileUrl={nft.animation_url} />
      )}
      {type === 'audio' && (
        <AudioPlayer fileUrl={nft.animation_url} />
      )}

      {type === 'model' && (
        <model-viewer
        style={{width: '100%', height: '100%'}}
        id={nft?.tokenId}
        alt={nft?.name + nft?.tokenId}
        src={nft?.animation_url}
        auto-rotate
        camera-controls
        ar
        ar-modes="quick-look"
        ar-scale="auto"
        // ios-src={}
      />
      )}

      {type === 'application' && (
        <PdfViewer fileUrl={nft.animation_url}/>
      )}
      <div className={'absolute top-2 right-2 flex pt-100%'}>
        
      </div>
    </div>
  )
}

export default ImageWithActions
