import Image from "next/image";

export default function Comments() {
  return (
    <div className="">
      <div className="flex items-center mt-2 gap-4">
        <Image
          width={40}
          height={40}
          src={
            "https://cdn.pixabay.com/photo/2017/03/28/12/19/cape-cod-2181999_640.jpg"
          }
          alt=""
          className="w-10 h-10 rounded-full "
        />
        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm w-full px-6 py-2">
          <input
            className="bg-transparent outline-none rounded-md flex-1"
            type="text"
            placeholder="write a comment..."
          />
          <Image
            width={20}
            height={20}
            src={"/icons8-anime-emoji-50.png"}
            alt=""
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-6">
        {/* comment */}
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4 flex-1">
            <Image
              width={40}
              height={40}
              src={
                "https://cdn.pixabay.com/photo/2017/03/28/12/19/cape-cod-2181999_640.jpg"
              }
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">mostafa jbili</span>
          </div>

          <Image
            src={"/icons8-more-50.png"}
            alt="more"
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            consequuntur fugit ab, nulla odit ea magnam iste culpa, accusantium
            doloremque ipsa repellendus, natus minima delectus ad modi.
            Molestias, eaque beatae!
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500">
            <div className="flex items-center gap-4 mt-3">
              <Image
                src={"/icons8-like-50.png"}
                alt="like"
                width={16}
                height={16}
                className="cursor-pointer w-4 h-4"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">123 Likes</span>
              <div className="cursor-pointer ">reply</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
