import Image from "next/image";

interface GuideImageProps {
  images: string[];
  imageLoaded: boolean[];
  handleImageLoad: (index: number) => void;
}

export default function GuideImage({
  images,
  imageLoaded,
  handleImageLoad,
}: GuideImageProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {images.map((img, index) => (
        <div
          key={index}
          className="relative h-auto max-w-full border overflow-hidden mb-6"
        >
          {!imageLoaded[index] && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-300 animate-pulse"></div>
          )}

          <Image
            src={img}
            alt="Guide"
            width={600}
            height={600}
            className={`transition-opacity duration-500 object-cover ${
              imageLoaded[index] ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => handleImageLoad(index)}
          />
        </div>
      ))}
    </div>
  );
}
