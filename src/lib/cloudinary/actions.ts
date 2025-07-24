"use server"

import cloudinary from "@/lib/cloudinary/cloudinary"
import html2canvas from "html2canvas";

export async function uploadImage(imagePath: string) {
	const options = {
		use_filename: true,
		unique_filename: false,
		overwrite: true,
		folder: "3sided/orders",
	};

	try {
		const result = await cloudinary.uploader.upload(imagePath, options);
		console.log(result);
		return result.secure_url;
	} catch (error) {
		console.error(error);
	}
}


export async function takePictureAction(ref: React.RefObject<HTMLElement>) {
	if (!ref.current) {
		throw new Error("No element to capture")
	};

	try {
		const canvas = await html2canvas(ref.current);
		const dataUrl = canvas.toDataURL("image/png");
		const imageUrl = await uploadImage(dataUrl);

		return {
			success: true,
		}
	} catch (error) {
		return { error: "Failed to upload image", success: false };
	}
}
