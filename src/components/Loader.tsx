import SunSvg from "../images/sun-svgrepo-com.svg";

const Loader = ({ size }: { size: "sm" | "lg" }) => {
    return <img className={`loader ${size}`} src={SunSvg} />;
};
export default Loader;
