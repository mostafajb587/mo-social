import Image from "next/image";

export default function Stories() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-auto whitespace-nowrap text-xs hide-scrollbar">
      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <div className="w-20 h-20 rounded-full ring-2 ring-blue-500 overflow-hidden relative">
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/22/22/39/golf-1850984_640.jpg"
              alt="Ricky"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className="font-medium">Ricky</span>
        </div>
      </div>
    </div>
  );
}
