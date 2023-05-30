import React from 'react'
import ArticleCard from './ArticleCard';

import playerImage from '../images/player0.png';
import imageTwo from '../images/image.png';

const categories: API.Category[] = [
    {
        id: 1,
        title: 'Sport',
        slug: 'sport'
    }, {
        id: 2,
        title: 'Sport 1',
        slug: 'sport-1'
    }, {
        id: 3,
        title: 'Category',
        slug: 'category'
    }
]

const image: API.Image = {
    url: playerImage,
    full_url: 'https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=1600',
    width: 600,
    height: 400,
    alt: 'image',
    caption: 'image'
}

const image2: API.Image = {
    url: imageTwo,
    full_url: 'https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=1600',
    width: 600,
    height: 400,
    alt: 'image',
    caption: 'image'
}

export const articles: API.ArticlePageSummarized[] = [
    {
        id: 1,
        title: 'Nigeria must hire competent coach for Super Eagles',
        slug: 'some-title',
        published_date: '2022',
        summary: 'The Nigeria Football Federation (NFF) sacked Gernot Rohr on the eve of the 2021 Africa Cup of Nations.',
        categories: [ categories[0] ],
        image_card_600x400: image
    }, {
        id: 2,
        title: 'Ghana coach Addo gets more support as Andre Ayew',
        slug: 'title',
        published_date: '2022',
        summary: 'The eve of the 2021 Africa Cup of Nations.',
        categories: [ categories[1], categories[2] ],
        image_card_600x400: image
    }, {
        id: 4,
        title: 'The Super Eagles were denied qualification on the away goal',
        slug: 'some-title',
        published_date: '2022',
        summary: 'The Nigeria Football Federation (NFF) sacked Gernot Rohr on the eve of the 2021 Africa Cup of Nations.',
        categories: [ categories[0] ],
        image_card_600x400: image
    }, {
        id: 5,
        title: 'Nigeria coaches, players preaching caution, confidence for Ghana decider',
        slug: 'title',
        published_date: '2022',
        summary: 'The Nigeria Football Federation (NFF) sacked Gernot Rohr on the eve of the 2021 Africa Cup of Nations.',
        categories: [ categories[1], categories[2] ],
        image_card_600x400: image
    }, {
        id: 6,
        title: 'Tunisia through to World Cup after 0-0 home draw with Mali',
        slug: 'some-title',
        published_date: '2022',
        summary: 'The Nigeria Football Federation (NFF) sacked Gernot Rohr on the eve of the 2021 Africa Cup of Nations.',
        categories: [ categories[0] ],
        image_card_600x400: image
    }, {
        id: 7,
        title: "Little spice in 'Jollof derby' as Ghana, Nigeria draw in World Cup playoff",
        slug: 'title',
        published_date: '2022',
        summary: 'The eve of the 2021 Africa Cup of Nations.',
        categories: [ categories[1], categories[2] ],
        image_card_600x400: image
    }, {
        id: 8,
        title: "Little spice in 'Jollof derby' as Ghana, Nigeria draw in World Cup playoff",
        slug: 'some-title',
        published_date: '2022',
        summary: 'The Nigeria Football Federation (NFF) sacked Gernot Rohr on the eve of the 2021 Africa Cup of Nations.',
        categories: [ categories[0] ],
        image_card_600x400: image
    }, {
        id: 9,
        title: 'Morocco brush aside DR Congo to book World Cup berth',
        slug: 'title',
        published_date: '2022',
        summary: 'The eve of the 2021 Africa Cup of Nations.',
        categories: [ categories[1], categories[2] ],
        image_card_600x400: image
    }, {
        id: 10,
        title: 'Toko Ekambi scores sensational winner to send Cameroon to World Cup',
        slug: 'some-title',
        published_date: '2022',
        summary: 'The Nigeria Football Federation (NFF) sacked Gernot Rohr on the eve of the 2021 Africa Cup of Nations.',
        categories: [ categories[0] ],
        image_card_600x400: image
    }, {
        id: 11,
        title: 'Title',
        slug: 'title',
        published_date: '2022',
        summary: 'The eve of the 2021 Africa Cup of Nations.',
        categories: [ categories[1], categories[2] ],
        image_card_600x400: image
    }, {
        id: 12,
        title: 'Title',
        slug: 'title',
        published_date: '2022',
        summary: 'The eve of the 2021 Africa Cup of Nations.',
        categories: [ categories[1], categories[2] ],
        image_card_600x400: image2
    }
]

const CategorySection: React.FC = () => {
  return (
    <div className='desktop:w-[1262px] m-auto'>
        <div className='flex desktop:flex-row flex-col'>
            <div className='desktop:w-[873px] mx-auto desktop:border-none'>
                <div className='flex flex-col tablet:flex-row w-full justify-around px-3 desktop:px-0 desktop:border-none'>
                    <div className='flex flex-col desktop:[&>div]:w-[347px] w-fit [&>div]:min-h-[169px] [&>div:last-child]:!border-none [&>div:first-child]:!pt-0'>
                        {
                            articles.slice(0, 3).map((article: API.ArticlePageSummarized) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                    titleVariant='md'
                                    classes='mr-5 px-5 pt-7 pb-3 border-b'//change px to mx // mr will not set in the box
                                />
                            ))
                        }
                    </div>
                    <div className='desktop:w-[486px] tablet:mt-0 mt-6 pt-4 tablet:pt-0 border-t border-b tablet:border-b-0 tablet:border-t-0 mb-6 pb-4'>
                        <ArticleCard
                            article={articles[3]}
                            showImage={true}
                            imageVariant='big'
                            showSummary={true}
                            titleVariant='md'
                            classes='pt-0 tablet:border-l tablet:pl-5'//change px to mx // mr will not set in the box
                        />
                    </div>
                </div>
                <div className='flex flex-col tablet:flex-row m-auto px-3 h-fit justify-around tablet:mt-3 tablet:border-t desktop:[&>div]:min-w-[258px] tablet:[&>div]:w-[287px] [&>div]:min-h-[118px] [&>div:first-child]:!pl-0 [&>div:last-child]:!border-none tablet:[&>div]:border-b-0 [&>div]:border-b'>
                    {
                        articles.slice(4, 7).map((article: API.ArticlePageSummarized) => (
                            <>
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                    titleVariant='sm'
                                    classes='tablet:mt-7 mt-2 tablet:border-r tablet:px-5'
                                />
                            </>
                        ))
                    }
                </div>
            </div>
            <div className='flex desktop:flex-col flex-col tablet:mt-5 tablet:pt-3 tablet:border-t desktop:pt-0 desktop:mt-0 tablet:flex-row desktop:[&>div]:w-[347px] tablet:[&>div]:w-[440px] mx-auto [&>div]:min-h-[354px] desktop:border-l tablet:[&>div:last-child]:!border-none tablet:[&>div:first-child]:!pt-0'>
                {
                    articles.slice(7, 9).map((article: API.ArticlePageSummarized) => (
                        <>
                            <ArticleCard
                                key={article.id}
                                article={article}
                                showImage={true}
                                imageVariant='small'
                                titleVariant='sm'
                                classes='desktop:ml-5 desktop:pt-7 pb-3 desktop:border-b desktop:px-0 tablet:px-5 w-fit px-5 border-t tablet:border-t-0 pt-5 tablet:pt-0'
                            />
                        </>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default CategorySection;