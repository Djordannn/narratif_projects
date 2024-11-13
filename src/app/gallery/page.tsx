import React from "react";
import Image from "../../../node_modules/next/image";
import contentfulClient from "@/lib/contentfulClient";
import { TypeNarratifImgSkeleton } from "@/types/galleryCms";
import { TypeNarratifImgAsset } from "@/types/galleryCms";
import { Entry } from "contentful";

const getImg = async () => {
  try {
    const res = await contentfulClient.getEntries<TypeNarratifImgSkeleton>({
      content_type: "narratifImg",
    });
    console.log(res.items);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const Gallery = async () => {
  const data = await getImg();
  return (
    <div className="pt-8 md:pt-14 pb-24">
      <div className="mb-[3rem] md:mb-[6rem] text-center">
        <h1 className="text-4xl uppercase font-bold">gallery</h1>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">discover our story</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-[5%]">
        {data &&
          data.items?.map(
            (value: Entry<TypeNarratifImgSkeleton>, index: number) => {
              return (
                <div key={index}>
                  <Image
                    src={`https:${
                      (value.fields.image as TypeNarratifImgAsset)?.fields.file
                        .url
                    }`}
                    alt="img"
                    width={1000}
                    height={300}
                    quality={100}
                    className="object-cover h-[200px] md:h-[400px] 2xl:h-[500px]"
                  />
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default Gallery;
