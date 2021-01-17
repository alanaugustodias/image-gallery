export interface Image {
    url: string;
    height: string;
    width: string;
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
