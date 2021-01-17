export interface GiphyImage {
    url: string;
}

export interface GiphyImages {
    original: GiphyImage;
    downsized: GiphyImage;
}

export interface GiphyPicturesContent {
    id: string;
    title: string;
    images: GiphyImages;
}

export interface GiphyGalleryResponse {
    data: GiphyPicturesContent[];
}
