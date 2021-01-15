import {FlickrType} from '@app/enums';

export interface FlickrImage {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface FlickrPicturesContent {
    id: string;
    type: FlickrType;
    url: string;
    embed_url: string;
    images: FlickrImage[];
}

export interface FlickrPaginationContent {
    total_count: number;
    count: number;
    offset: number;
}

export interface FlickrMetaContent {
    status: number;
    msg: string;
    response_id: string;
}

export interface FlickrGalleryResponse {
    data: FlickrPicturesContent[];
    pagination: FlickrPaginationContent;
    meta: FlickrMetaContent;
}
