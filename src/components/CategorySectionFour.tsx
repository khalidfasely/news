import React from 'react'
import { articles } from './CategorySection';
import ArticleCard from './ArticleCard';

const CategorySectionFour: React.FC = () => {
  return (
    <div className='flex m-auto w-fit'>
        <div className='w-[347px] [&>div:last-child]:border-0 [&>div:first-child]:pt-0 mr-5'>
            {
                articles.slice(0, 3).map((article: API.ArticlePageSummarized, idx) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        showImage={idx === 0}
                        imageVariant='small'
                        titleVariant='sm'
                        classes='pb-3 pt-7 border-b'
                    />
                ))
            }
        </div>
        <span className='w-[1px] h-[44rem] bg-[#eee]'></span>
        <div className='w-[486px] ml-5 [&>div:last-child]:border-0 [&>div:first-child]:pt-0 mr-5'>
            {
                articles.slice(3, 5).map((article: API.ArticlePageSummarized, idx) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        showImage={idx === 0}
                        imageVariant='big'
                        titleVariant={idx === 0 ? 'md' : 'sm'}
                        showSummary={idx === 0}
                        classes='pb-3 pt-7 border-b'
                    />
                ))
            }
        </div>
        <span className='w-[1px] h-[44rem] bg-[#eee]'></span>
        <div className='w-[347px] [&>div:last-child]:border-0 [&>div:first-child]:pt-0 ml-5'>
            {
                articles.slice(0, 3).map((article: API.ArticlePageSummarized, idx) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        showImage={idx === 0}
                        imageVariant='small'
                        titleVariant='sm'
                        classes='pb-3 pt-7 border-b'
                    />
                ))
            }
        </div>
    </div>
  )
}
export default CategorySectionFour;