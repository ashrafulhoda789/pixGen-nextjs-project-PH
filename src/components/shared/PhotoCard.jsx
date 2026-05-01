import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaHeart } from "react-icons/fa";


const PhotoCard = ({ photo }) => {
    return (
        <Card className="border flex flex-col justify-center items-center">
            <div className="relative w-full aspect-square">
                <Image
                    src={photo.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={photo.title}
                    // width={500}
                    // height={200}
                    className="rounded-2xl object-cover"
                ></Image>
                <Chip className="absolute right-2 top-2">{photo.category}</Chip>
            </div>
            <div>
                <h2 className="text-xl font-bold">{photo.title}</h2>
            </div>
            <div className="flex gap-5">
                <div className="flex items-center gap-1">
                    <p className="text-red-600"><FaHeart></FaHeart></p>
                    <p>{photo.likes}</p>
                </div>

                <Separator orientation="vertical"></Separator>

                <div className="flex items-center gap-1">
                    <p><FaDownload></FaDownload></p>
                    <p>{photo.downloads}</p>
                </div>
            </div>


            <Link href={`/all-photos/${photo.id}`}>
                <Button variant="outline" className={'w-full'}>
                    View
                </Button>
            </Link>



        </Card>
    );
};

export default PhotoCard;