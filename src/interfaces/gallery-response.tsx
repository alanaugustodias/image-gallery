export interface Image {
    url: string;
}

export interface Images {
    preview: Image;
    original: Image;
}

export interface PicturesContent {
    id: string;
    title: string;
    images: Images;
}

export interface GalleryResponse {
    images: PicturesContent[];
}
