import Image from "next/image";

type LogoIconProps = {
  size?: number;
};

export default function LogoIcon({ size = 32 }: LogoIconProps) {
  return (
    <Image
      src="/kori-icon.svg"
      alt="Logo Icon"
      width={size}
      height={size}
      priority
    />
  );
}
