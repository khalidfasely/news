import React from 'react';
import { articles } from './CategorySection';
import ArticleCard from './ArticleCard';

///NEED TO BE RESPONSIVE
//Section lwla Khas tqad, nqs liha w because of responsive code

const CategorySectionTwo: React.FC = () => {
  return (
    <div className='desktop:w-[1250px] tablet:w-full mx-auto flex desktop:flex-row flex-col'>
        <div className='desktop:min-w-[615px] tablet:w-[80%] w-[95%] mx-auto md:w-[95%] desktop:pr-5 desktop:border-r'>
            <ArticleCard
                article={articles[0]}
                showImage={true}
                imageVariant='xbig'
                titleVariant='md'
                classes='pb-3 tablet:mx-auto tablet:w-[70%] desktop:w-full'
            />
            <ArticleCard
                article={articles[1]}
                titleVariant='sm'
                classes='border-t pt-7 tablet:pb-3 desktop:pb-0 desktop:border-b-0 tablet:border-b desktop:mb-0 tablet:mb-5 tablet:m-auto tablet:w-[70%] desktop:w-full'
            />
        </div>
        <div className='flex w-[95%] tablet:flex-row flex-col mx-auto mt-4 border-t pt-6 tablet:pt-0 tablet:border-t-0 tablet:mt-0 tablet:m-auto tablet:w-[70%] desktop:w-full '>
            <div className='desktop:w-[347px] tablet:w-[55%] w-full tablet:pl-5 [&>div:first-child]:pt-0 [&>div:last-child]:border-b-0 tablet:pr-5 tablet:border-r'>
                {
                    articles.slice(0, 3).map((article: API.ArticlePageSummarized, idx) => (
                        <ArticleCard
                            key={article.id}
                            article={article}
                            showImage={idx === 0}
                            imageVariant='small'
                            titleVariant='sm'
                            classes='mr-5 pt-7 pb-3 border-b'
                        />
                    ))
                }
            </div>
            <div className='desktop:w-[218px] tablet:w-[45%] tablet:pl-5 [&>div:first-child]:pt-0 mt-4 border-t pt-6 tablet:pt-0 tablet:border-t-0 tablet:mt-0 [&>div:last-child]:border-b-0 '>
                {
                    articles.slice(0, 3).map((article: API.ArticlePageSummarized, idx) => (
                        <ArticleCard
                            key={article.id}
                            article={article}
                            showImage={idx === 0}
                            imageVariant='xsmall'
                            titleVariant='sm'
                            classes='mr-5  pt-7 pb-3 border-b'
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default CategorySectionTwo;