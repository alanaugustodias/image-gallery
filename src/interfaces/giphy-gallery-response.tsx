import {GiphyType} from '@app/enums';

export interface GiphyImage {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface GiphyImages {
    original: GiphyImage;
    downsized: GiphyImage;
    downsized_large: GiphyImage;
    downsized_medium: GiphyImage;
    downsized_small: GiphyImage;
    downsized_still: GiphyImage;
    fixed_height: GiphyImage;
    fixed_height_downsampled: GiphyImage;
    fixed_height_small: GiphyImage;
    fixed_height_small_still: GiphyImage;
    fixed_height_still: GiphyImage;
    fixed_width: GiphyImage;
    fixed_width_downsampled: GiphyImage;
    fixed_width_small: GiphyImage;
    fixed_width_small_still: GiphyImage;
    fixed_width_still: GiphyImage;
    looping: GiphyImage;
    original_still: GiphyImage;
    original_mp4: GiphyImage;
    preview: GiphyImage;
    preview_gif: GiphyImage;
    preview_webp: GiphyImage;
    hd: GiphyImage;
    '480w_still': GiphyImage;
}

export interface GiphyPicturesContent {
    id: string;
    type: GiphyType;
    url: string;
    title: string;
    embed_url: string;
    images: GiphyImages;
}

export interface GiphyPaginationContent {
    total_count: number;
    count: number;
    offset: number;
}

export interface GiphyMetaContent {
    status: number;
    msg: string;
    response_id: string;
}

export interface GiphyGalleryResponse {
    data: GiphyPicturesContent[];
    pagination: GiphyPaginationContent;
    meta: GiphyMetaContent;
}
