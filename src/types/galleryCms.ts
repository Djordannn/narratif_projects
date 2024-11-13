import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeNarratifImgFields {
  image: EntryFieldTypes.AssetLink;
}

export interface TypeNarratifImgAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName?: string;
      contentType?: string;
    };
  };
}

export type TypeNarratifImgSkeleton = EntrySkeletonType<
  TypeNarratifImgFields,
  "narratifImg"
>;
export type TypeNarratifImg<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeNarratifImgSkeleton, Modifiers, Locales>;
