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
    title: string;
    images: Images;
}

export interface GalleryResponse {
    images: PicturesContent[];
}
