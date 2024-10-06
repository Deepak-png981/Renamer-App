import fs from 'fs';
import path from 'path';

export function createTempDir(basePath: string) {
    const tempDir = path.join(basePath, 'temp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }
    return tempDir;
}

export function writeFile(filePath: string, content: string) {
    fs.writeFileSync(filePath, content, 'utf8');
}

export function readFile(filePath: string): string {
    return fs.readFileSync(filePath, 'utf8');
}

export function removeFile(filePath: string) {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
}

export function removeDir(dirPath: string) {
    if (fs.existsSync(dirPath)) {
        fs.rmdirSync(dirPath, { recursive: true });
    }
}

export function fileExists(filePath: string): boolean {
    return fs.existsSync(filePath);
}