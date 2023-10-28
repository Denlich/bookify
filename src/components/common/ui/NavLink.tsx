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
          "flex items-center gap-2 text-cyan-700 hover:text-cyan-950 transition",
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