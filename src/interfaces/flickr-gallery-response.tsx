export interface FlickrPhoto {
    id: string;
    title: string;
    url_m: string;
    url_l: string;
}

export interface FlickrPhotosContent {
    photo: FlickrPhoto[];
}

export interface FlickrGalleryResponse {
    photos: FlickrPhotosContent;
}
