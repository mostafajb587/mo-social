import Image from "next/image";

export default function AddPost() {
  return (
    <div className="p-4 bg-white rounded-lg flex flex-col gap-4 justify-between text-sm">
      <div className="flex items-start gap-4">
        {/* AVATAR */}
        <Image
          width={48}
          height={48}
          src={
            "https://cdn.pixabay.com/photo/2017/03/27/12/11/boy-2178303_640.jpg"
          }
          alt="hello"
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="flex-1 relative">
          <textarea
            placeholder="what's on your mind ?"
            className="bg-stale-100 rounded-lg w-[90%] p-2 resize-none"
            rows={3}
          ></textarea>
          <div className="absolute bottom-2 right-2 cursor-pointer">
            <Image
              width={20}
              height={20}
              src={"/icons8-anime-emoji-50.png"}
              alt="emoji"
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>

      {/* تغليف العناصر الأربعة في صف */}
      <div className="flex gap-6 text-gray-400 cursor-pointer flex-wrap">
        <div className="flex items-center gap-2 ">
          <Image
            width={20}
            height={20}
            src={"/icons8-photo-editor-50.png"}
            alt="photo"
          />
          <span>photo</span>
        </div>
        <div className="flex items-center gap-2 ">
          <Image
            width={20}
            height={20}
            src={"/icons8-video-50.png"}
            alt="video"
          />
          <span>video</span>
        </div>
        <div className="flex items-center gap-2 ">
          <Image
            width={20}
            height={20}
            src={"/icons8-event-50.png"}
            alt="event"
          />
          <span>event</span>
        </div>
        <div className="flex items-center gap-2 ">
          <Image
            width={20}
            height={20}
            src={"/icons8-poll-50.png"}
            alt="poll"
          />
          <span>poll</span>
        </div>
      </div>
    </div>
  );
}
