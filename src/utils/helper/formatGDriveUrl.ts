import { googleDriveUrlRegex } from './regex';

export function getGoogleDriveThumbnailUrl(link: string): string {
  if (googleDriveUrlRegex.test(link)) {
    const url = new URL(link);
    const pathSegments = url.pathname.split('/');
    pathSegments.pop();
    pathSegments.push('preview');
    url.pathname = pathSegments.join('/');
    return url.href;
  } else {
    throw new Error('Invalid Google Drive link');
  }
}
