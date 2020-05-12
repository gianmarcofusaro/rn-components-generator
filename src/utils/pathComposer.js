export function pathComposer(name, path, parentDir) {
    
    const folderName = name.charAt(0).toLowerCase() + name.slice(1);
    const suffix = path.charAt(0).toUpperCase() + path.slice(1, -1);
    const componentSuffix = path === 'core-components' ? 'Core' : suffix;
    const componentparentDir = parentDir.trim() !== '' ? `${parentDir.trim().toLowerCase()}/` : '';
    const componentPath = `src/${path}/${componentparentDir}${folderName}`;
    const componentTemplates = [];
}