import crypto = require("crypto");

/**
 * Create Md5 hash function
 * @param str
 */
export function md5(str: string): string {
    return crypto.createHash("md5").update(str).digest("hex");
}
