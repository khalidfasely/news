declare namespace API {
    type Category = {
        id: number;
        title: string;
        slug: string;
    };

    type Image = {
        url: string;
        full_url: string;
        width: number;
        height: number;
        alt: string;
        caption: string;
    };

    type ArticlePageSummarized = {
        id: number;
        title: string;
        summary: string;
        published_date: string;
        slug: string;
        image_card_600x400: API.Image;
        categories: API.Category[];
    };
}