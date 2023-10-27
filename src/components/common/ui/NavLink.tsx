import NextLink, { LinkProps } from "next/link";
import React, { HTMLProps } from "react";
import cn from "classnames";

const NavLink: React.FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  as,
  children,
  href,
  replace,
  scroll,
  shallow,
  className,
  ...rest
}) => {
  return (
    <NextLink
      as={as}
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      legacyBehavior
    >
      <a
        className={cn(
          "text-cyan-950 hover:text-cyan-800 transition",
          className
        )}
        {...rest}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default NavLink;
