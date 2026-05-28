import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ invert, href, className, children, variant = "header", ...props }) => {
  className = clsx(
    className,
    "black",
    invert ? "text-white hover:text-blue-600" : "text-black hover:text-blue-600"
  );
  
  const animationClass = variant === "footer" ? "tortoise-walk-footer" : "tortoise-walk-header";
  
  const inner = (
    <div className="relative flex items-center gap-3">
      <div className="tortoise-container">
        <Image 
          src="/tortoise-logo.svg" 
          alt="AutoTechify Logo" 
          width={40} 
          height={40}
          className={animationClass}
        />
      </div>
      <span className="relative">{children}</span>
    </div>
  );
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <h2
      className={clsx(
        "cursor-pointer text-2xl font-semibold duration-300",
        className
      )}
      {...props}
    >
      {inner}
    </h2>
  );
};

export default Logo;
