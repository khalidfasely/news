import React from 'react';
import { articles } from './CategorySection';
import ArticleCard from './ArticleCard';
import flyImage from '../images/fly.png';

const CategorySectionThree: React.FC = () => {
  return (
        //desktop:w-[1251px]
    <div className='flex m-auto w-fit'>
        <div className='w-[348px] [&>div:first-child]:pt-0 [&>div:last-child]:border-0 mr-5'>
            {
                articles.slice(0, 2).map((article: API.ArticlePageSummarized, idx) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        showSummary={idx === 0}
                        titleVariant={idx === 0 ? 'md' : 'sm'}
                        classes='mr-5 px-5 pt-7 pb-3 border-b'
                    />
                ))
            }
        </div>
        <span className='w-[1px] h-[23rem] bg-[#eee]'></span>
        <div className='w-[863px] ml-5 flex'>
            <div className=''>
                <img src={flyImage} className='w-[504px] h-[327px]' />
            </div>
            <div className='w-[360px] [&>div:first-child]:pt-0 [&>div:last-child]:border-0'>
                {
                    articles.slice(4, 6).map((article: API.ArticlePageSummarized, idx) => (
                        <ArticleCard
                            key={article.id}
                            article={article}
                            titleVariant={idx === 0 ? 'md' : 'sm'}
                            classes='ml-5 px-5 pt-7 pb-3 border-b'
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default CategorySectionThree