export interface Image {
    url: string;
    height: string;
    size: string;
    width: string;
}

export interface Images {
    preview: Image;
    original: Image;
}

export interface PicturesContent {
    id: string;
    url: string;
    images: Images;
}

export interface PaginationContent {
    total: number;
    count: number;
    offset: number;
}

export interface GalleryResponse {
    images: PicturesContent[];
    pagination: PaginationContent;
}
