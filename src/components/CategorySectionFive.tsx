import React from 'react'
import ArticleCard from './ArticleCard'
import { articles } from './CategorySection'

const CategorySectionFive: React.FC = () => {
  return (
    <div className='flex m-auto w-fit'>
        <div className='w-[355px] [&>div:last-child]:border-0 [&>div:first-child]:pt-0 mr-5'>
            {
                articles.slice(0, 3).map((article: API.ArticlePageSummarized, idx) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        showImage={idx === 0}
                        showSummary={idx === 0}
                        imageVariant='small'
                        titleVariant='sm'
                        classes='pb-3 pt-7 border-b'
                    />
                ))
            }
        </div>
        <span className='w-[1px] h-[44rem] bg-[#eee]'></span>
        <div className='w-[355px] [&>div:last-child]:border-0 [&>div:first-child]:pt-0 mr-5 ml-5'>
            {
                articles.slice(0, 3).map((article: API.ArticlePageSummarized, idx) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        showImage={idx === 0}
                        showSummary={idx === 0}
                        imageVariant='small'
                        titleVariant='sm'
                        classes='pb-3 pt-7 border-b'
                    />
                ))
            }
        </div>
        <span className='w-[1px] h-[44rem] bg-[#eee]'></span>
        <div className='w-[226px] [&>div:last-child]:border-0 [&>div:first-child]:pt-0 ml-5 mr-5'>
            {
                articles.slice(0, 4).map((article: API.ArticlePageSummarized) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        imageVariant='small'
                        titleVariant='sm'
                        classes='pb-3 pt-7 border-b'
                    />
                ))
            }
        </div>
        <span className='w-[1px] h-[44rem] bg-[#eee]'></span>
        <div className='w-[226px] ml-5'>
            <h1>Advertisement</h1>
            <div className='w-[218px] h-[628px] bg-[#eee]'></div>
        </div>
    </div>
  )
}

export default CategorySectionFive