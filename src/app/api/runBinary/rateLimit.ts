const rateLimitMap = new Map<string, { count: number; lastRequestTime: number }>();
const MAX_REQUESTS_PER_MINUTE = 10;
const TIME_WINDOW = 60 * 1000; 

export const isRateLimited = (ip: string): boolean => {
    const currentTime = Date.now();
    const rateLimitInfo = rateLimitMap.get(ip);

    if (!rateLimitInfo) {
        rateLimitMap.set(ip, { count: 1, lastRequestTime: currentTime });
        return false;
    }

    const timeSinceLastRequest = currentTime - rateLimitInfo.lastRequestTime;

    if (timeSinceLastRequest > TIME_WINDOW) {
        rateLimitMap.set(ip, { count: 1, lastRequestTime: currentTime });
        return false;
    }

    if (rateLimitInfo.count >= MAX_REQUESTS_PER_MINUTE) {
        return true;
    }

    rateLimitMap.set(ip, { count: rateLimitInfo.count + 1, lastRequestTime: currentTime });
    return false;
}
