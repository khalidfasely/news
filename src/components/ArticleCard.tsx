import React from 'react';

type Variant = | "sm" | "md" | "lg";
type ImageVariant = | "small" | "big" | "xbig" | "xsmall";

interface Props {
    article: API.ArticlePageSummarized,
    showImage?: boolean,
    showSummary?: boolean,
    titleVariant?: string,
    imageVariant?: string,
    classes?: string
}

const titleSizes: Record<Variant, string> = {
    sm: "text-[22px] leading-7",
    md: "text-[32px] leading-10",
    lg: "text-[40px]",
};

const imageSizes: Record<ImageVariant, string> = {
    xsmall: "w-[218px]",
    small: "w-[347px]",//remove h //  h-[242px]
    big: "w-[476px]",//remove h // h-[327px]
    xbig: "w-[605px]",
};

const ArticleCard: React.FC<Props> = ({
    article,
    showImage,
    showSummary,
    titleVariant = "md",
    imageVariant = "small",
    classes
}) => {

    const sizeClasses = titleSizes[titleVariant as Variant];
    const imageClasses = imageSizes[imageVariant as ImageVariant];

    return (
        <div className={`w-full ` + classes}>
            {//remove m-auto if needed
                showImage ?
                <img src={article.image_card_600x400.url} alt={article.image_card_600x400.alt} className={`mb-3 ${imageClasses}`} /> :
                null
            }
            <div className='category-link mb-3'>{article.categories[0].title}</div>
            <h1 className={`title-link ${sizeClasses}`}>{article.title}</h1>
            {
                showSummary ?
                <p className='mt-3'>{article.summary}</p> :
                null
            }
        </div>
    )
}

export default ArticleCard;