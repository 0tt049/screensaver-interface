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
        <div className={'py-3 bg-red-300 font-medium rounded-b-2xl px-5'}>
          <div className={'flex flex-col h-16 justify-center'}>
            <div className={'text-xl font-light'}>CURRENT BID</div>
             
            <div className={'text-2xl font-light'}>0.04 ETH</div>

            {/* <button className={'button button--gradient'}>$5 Edition</button> */}
          </div>
        </div>
      }
    >

      
      <div className={'flex flex-col space-y-2 px-5 py-3'}>
        <h1 className={'font-semibold text-3xl'}>{title}</h1>
        <div className={'flex items-center space-x-1'}>
          <h2 className={'font-medium text-md'}>@{creator.name}</h2>
        </div>
      </div>
    </ImageCard>
  )
}

export default NFTItemCard
