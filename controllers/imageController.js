const { cloudinary, upload } = require('../middleware/multer');

exports.uploadImage = async (req, res) => {
    try {

        upload.single('image')(req, res, async function (err) {
            if (err) {
                console.error('Error uploading image:', err);
                return res.status(500).json({ error: 'Failed to upload image' });
            }

            try {

                const result = await cloudinary.uploader.upload(req.file.path);

                const imageUrl = result.secure_url;

                return res.status(200).json({ status: true, code: 200, imageUrl });
            } catch (error) {
                console.error('Error uploading image to Cloudinary:', error);
                return res.status(500).json({ status: false, code: 500, error: 'Failed to upload image to Cloudinary' });
            }
        });
    } catch (error) {
        console.error('Error in file upload middleware:', error);
        return res.status(500).json({ status: false, code: 500, error: 'Failed to upload image' });
    }
};