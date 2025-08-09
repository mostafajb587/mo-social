import Image from "next/image";
import Comments from "./Comments";
export default function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/* user */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            width={40}
            height={40}
            src={
              "https://cdn.pixabay.com/photo/2017/03/28/12/19/cape-cod-2181999_640.jpg"
            }
            alt=""
            className="w-10 h-10 rounded-full "
          ></Image>
          <span className="font-medium ">mostafa jbili</span>
        </div>
        <Image
          src={"/icons8-more-50.png"}
          alt="more"
          width={16}
          height={16}
        ></Image>
      </div>
      {/* desc */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative  ">
          <Image
            src={
              "https://cdn.pixabay.com/photo/2017/03/28/12/07/bricks-2181920_640.jpg"
            }
            alt="more"
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ipsam
          quisquam non quod magni praesentium blanditiis voluptate hic illum
          accusantium dolorem eos, fugiat, et deleniti temporibus mollitia quas
          autem doloribus.
        </p>
      </div>
      {/* interaction */}
      <div className="flex items-center justify-between text-sm  ">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src={"/icons8-like-50.png"}
              alt="more"
              width={20}
              height={20}
              className="cursor-pointer"
            ></Image>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src={"/icons8-comments-50.png"}
              alt="more"
              width={20}
              height={20}
              className="cursor-pointer"
            ></Image>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src={"/icons8-share-50.png"}
              alt="share"
              width={20}
              height={20}
              className="cursor-pointer"
            ></Image>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> share</span>
            </span>
          </div>
        </div>
      </div>
      <Comments></Comments>
    </div>
  );
}
