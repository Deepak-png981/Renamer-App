import fs from 'fs';
import path from 'path';
import os from 'os';
export function createTempDir(basePath: string = os.tmpdir()) {
    const tempDir = path.join(basePath, 'temp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir , { recursive: true });
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