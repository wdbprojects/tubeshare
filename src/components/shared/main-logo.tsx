import Image from "next/image";
import tubeLogo from "../../../public/logo.svg";

const MainLogo = () => {
  return (
    <div className="flex items-center justify-start gap-2">
      <Image src={tubeLogo} alt="Tube logo" height={50} width={50} />
      <p className="text-xl font-semibold tracking-tight">TubeShare</p>
    </div>
  );
};
export default MainLogo;
