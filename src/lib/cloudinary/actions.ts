"use server"

import cloudinary from "@/lib/cloudinary/cloudinary"

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
		return result.public_id;
	} catch (error) {
		console.error(error);
	}
}

