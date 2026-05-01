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
          alt="TechAutomate Logo" 
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
        <style jsx global>{`
          .tortoise-container {
            position: relative;
            display: inline-block;
            z-index: 10;
          }
          
          /* Header Animation - comes from bottom, stops, then goes up and disappears */
          .tortoise-walk-header {
            animation: tortoiseHeader 10s ease-in-out infinite;
          }
          @keyframes tortoiseHeader {
            0% {
              transform: translateY(100px);
              opacity: 0;
            }
            10% {
              transform: translateY(0px);
              opacity: 1;
            }
            40% {
              transform: translateY(0px);
              opacity: 1;
            }
            60% {
              transform: translateY(-120px);
              opacity: 1;
            }
            70% {
              transform: translateY(-300px);
              opacity: 1;
            }
            72% {
              transform: translateY(-320px);
              opacity: 0;
            }
            100% {
              transform: translateY(100px);
              opacity: 0;
            }
          }
          
          /* Footer Animation - comes from bottom, stops, stays, then fades out */
          .tortoise-walk-footer {
            animation: tortoiseFooter 8s ease-in-out infinite;
          }
          @keyframes tortoiseFooter {
            0% {
              transform: translateY(100px);
              opacity: 0;
            }
            12.5% {
              transform: translateY(0px);
              opacity: 1;
            }
            87.5% {
              transform: translateY(0px);
              opacity: 1;
            }
            90% {
              transform: translateY(0px);
              opacity: 0;
            }
            100% {
              transform: translateY(100px);
              opacity: 0;
            }
          }
        `}</style>
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
      <style jsx global>{`
        .tortoise-container {
          position: relative;
          display: inline-block;
          z-index: 10;
        }
        
        /* Header Animation - comes from bottom, stops, then goes up and disappears */
        .tortoise-walk-header {
          animation: tortoiseHeader 10s ease-in-out infinite;
        }
        @keyframes tortoiseHeader {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          10% {
            transform: translateY(0px);
            opacity: 1;
          }
          40% {
            transform: translateY(0px);
            opacity: 1;
          }
          60% {
            transform: translateY(-120px);
            opacity: 1;
          }
          70% {
            transform: translateY(-300px);
            opacity: 1;
          }
          72% {
            transform: translateY(-320px);
            opacity: 0;
          }
          100% {
            transform: translateY(100px);
            opacity: 0;
          }
        }
        
        /* Footer Animation - comes from bottom, stops, stays, then fades out */
        .tortoise-walk-footer {
          animation: tortoiseFooter 8s ease-in-out infinite;
        }
        @keyframes tortoiseFooter {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          12.5% {
            transform: translateY(0px);
            opacity: 1;
          }
          87.5% {
            transform: translateY(0px);
            opacity: 1;
          }
          90% {
            transform: translateY(0px);
            opacity: 0;
          }
          100% {
            transform: translateY(100px);
            opacity: 0;
          }
        }
      `}</style>
    </h2>
  );
};

export default Logo;
