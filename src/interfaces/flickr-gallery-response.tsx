export interface FlickrPhoto {
    id: string;
    title: string;
    url_m: string;
    height_m: string;
    width_m: string;
    url_l: string;
    height_l: string;
    width_l: string;
}

export interface FlickrPhotosContent {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: FlickrPhoto[];
}

export interface FlickrGalleryResponse {
    photos: FlickrPhotosContent;
    stat: string;
}
