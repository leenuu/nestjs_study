import * as bcrypt from "bcrypt";

async function encryptionPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
}

async function comparePassword(
    password: string,
    comparePassword: string,
): Promise<boolean> {
    return await bcrypt.compare(password, comparePassword);
}

export { encryptionPassword, comparePassword };
