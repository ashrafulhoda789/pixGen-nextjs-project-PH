import PhotoCard from "../shared/PhotoCard";


const TopGeneration = async () => {

    const res = await fetch('https://pix-gen-nextjs-project-ph.vercel.app/data.json');
    const photos = await res.json();

    return (
        <div className="">
            <h2 className="text-2xl font-bold mt-5">Top Image Generation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                {
                    photos.slice(0, 6).map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopGeneration;