const basePath = "/assets/images";

export function getImagePath(folder: string, category: string, fileName: string): string {
    return `${basePath}/${folder.toLowerCase()}/${category}/${fileName}`
}