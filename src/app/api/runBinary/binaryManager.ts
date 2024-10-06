import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { GitHubRelease } from '@/app/types';
import { GIHHUB_RELEASES_URL } from '@/app/urls';

const BINARY_FOLDER_PATH = '/tmp/binaries';
const BINARY_LOCAL_PATH = path.join(BINARY_FOLDER_PATH, 'renamer-linux');

export async function getLatestReleaseInfo() {
    const response = await fetch(GIHHUB_RELEASES_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch release info from GitHub.');
    }

    const releaseData: GitHubRelease = await response.json() as GitHubRelease;
    const latestVersion = releaseData.tag_name.replace('v', '');
    const asset = releaseData.assets.find(asset => asset.name.toLowerCase().includes('linux'));
    if (!asset) {
        throw new Error('Could not find renamer-linux in the release assets.');
    }

    const downloadUrl = asset.browser_download_url;
    return { latestVersion, downloadUrl };
}

export function getLocalBinaryVersion() {
    const versionFilePath = path.join(BINARY_FOLDER_PATH, 'version.txt');
    if (fs.existsSync(versionFilePath)) {
        return fs.readFileSync(versionFilePath, 'utf8').trim();
    }
    return null;
}

export async function downloadBinary(url: string) {
    if (!fs.existsSync(BINARY_FOLDER_PATH)) {
        fs.mkdirSync(BINARY_FOLDER_PATH, { recursive: true });
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to download binary.');
    }

    const responseBody = response.body;
    if (!responseBody) {
        throw new Error('Response body is null.');
    }

    const fileStream = fs.createWriteStream(BINARY_LOCAL_PATH);
    await new Promise((resolve, reject) => {
        responseBody.pipe(fileStream);
        responseBody.on('error', reject);
        fileStream.on('finish', resolve);
    });

    console.log('Binary downloaded successfully.');
    await fs.promises.chmod(BINARY_LOCAL_PATH, '755');
    console.log('Binary permissions set to executable.');
}

export function saveLocalBinaryVersion(version: string) {
    const versionFilePath = path.join(BINARY_FOLDER_PATH, 'version.txt');
    fs.writeFileSync(versionFilePath, version);
}
