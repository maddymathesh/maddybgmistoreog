import { v2 as cloudinary } from "cloudinary";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
const apiKey = process.env.CLOUDINARY_API_KEY || "";
const apiSecret = process.env.CLOUDINARY_API_SECRET || "";

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true,
});

export { cloudinary };

export type CloudinaryFolder = "accounts" | "reviews" | "payment-proofs" | "banners" | "users";

/**
 * Generates a secure signature for client-side uploads.
 * Restricts uploads to the specified Cloudinary subfolder.
 */
export function getSignedUploadParams(folder: CloudinaryFolder, publicId?: string) {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET || `mbs_${folder}`;

  const params: Record<string, any> = {
    timestamp,
    folder: `maddy-bgmi-store/${folder}`,
    upload_preset: uploadPreset,
  };

  if (publicId) {
    params.public_id = publicId;
  }

  const signature = cloudinary.utils.api_sign_request(params, apiSecret);

  return {
    signature,
    timestamp,
    folder: params.folder,
    upload_preset: uploadPreset,
    apiKey,
  };
}
