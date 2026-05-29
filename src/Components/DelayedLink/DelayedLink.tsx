import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { Link, useNavigate, type To } from "react-router-dom";

type DelayedLinkProps = {
  children: ReactNode;
  className: string;
  delayMs?: number;
  onNavigateStart?: () => void;
  to: To;
};

export const DelayedLink = ({
  children,
  className,
  delayMs = 160,
  onNavigateStart,
  to,
}: DelayedLinkProps) => {
  const [isActivating, setIsActivating] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    event.preventDefault();
    setIsActivating(true);
    onNavigateStart?.();

    timeoutRef.current = window.setTimeout(() => {
      navigate(to);
    }, delayMs);
  };

  return (
    <Link
      className={`${className}${isActivating ? " is-activating" : ""}`}
      onClick={handleClick}
      to={to}
    >
      {children}
    </Link>
  );
};
