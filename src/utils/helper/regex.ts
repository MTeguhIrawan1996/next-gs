export const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

export const youtubeUrlRegex =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)(\S+)?$/;

export const googleDriveUrlRegex =
  /^(https?:\/\/)?(www\.)?drive\.google\.com\/(file\/d\/|open\?id=)([a-zA-Z0-9_-]+)(\/.*)?$/;
