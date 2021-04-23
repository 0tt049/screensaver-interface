import React from 'react'

import ImageCard from '../ImageCard'
import AuctionCountdownTextRow from '../AuctionCountdownTextRow'

import { IProps } from './types'

const NFTItemCard: React.FC<IProps> = ({
  title,
  coverImageSrc,
  creator,
  endDateTime,
  amountCollected,
}) => {
  return (
    <ImageCard
      srcUrl={coverImageSrc}
      altText={`${title} cover image`}
      footer={
        <div className={'px-2'}>
          <div className={'flex flex-col space-y-3'}>
            <AuctionCountdownTextRow
              endDateTime={endDateTime}
              amountCollected={amountCollected}
            />
            <button className={'button button--gradient'}>$5 Edition</button>
          </div>
        </div>
      }
    >
      <div className={'flex flex-col space-y-1 px-2'}>
        <h1 className={'font-bold text-base'}>{title}</h1>
        <div className={'flex items-center space-x-1'}>
          <div className={'w-3 h-3 rounded-full overflow-hidden'}>
            <img
              src={creator.avatarImageSrc}
              alt={`${creator.name}'s avatar`}
            />
          </div>
          <h2 className={'font-bold text-sm opacity-80'}>{creator.name}</h2>
        </div>
      </div>
    </ImageCard>
  )
}

export default NFTItemCard