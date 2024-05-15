import { CONFIG } from '@/config';

/**
 * Function to build media url
 * @param media
 */
export const buildMediaUrl = (media: string) => (media ? `https://${CONFIG.SERVER_URL}/minio/${media}` : undefined);
