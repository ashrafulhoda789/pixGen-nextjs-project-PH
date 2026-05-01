

const PhotosDetailPage = async({params}) => {
    const {id} = await params;

    const res = await fetch('https://pix-gen-nextjs-project-ph.vercel.app/data.json');
    const photos = await res.json();

    const photo = photos.find(p => p.id == id);

    return (
        <div>
            Photo Details
        </div>
    );
};

export default PhotosDetailPage;