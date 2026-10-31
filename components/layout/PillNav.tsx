"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import "./PillNav.css";

export interface PillNavItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface PillNavProps {
  logo?: string | React.ReactNode;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
  rightElement?: React.ReactNode;
  onItemClick?: (item: PillNavItem) => void;
}

export default function PillNav({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className = "",
  baseColor = "#ffffff",
  pillColor = "#0a0a0d",
  hoveredPillTextColor = "#000000",
  pillTextColor,
  onMobileMenuClick,
  rightElement,
  onItemClick,
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor ?? "#ffffff";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    onMobileMenuClick?.();
  };

  const isExternalLink = (href?: string) =>
    !href ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  const cssVars = {
    ["--base" as string]: baseColor,
    ["--pill-bg" as string]: pillColor,
    ["--hover-text" as string]: hoveredPillTextColor,
    ["--pill-text" as string]: resolvedPillTextColor,
  } as React.CSSProperties;

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
        {/* LOGO */}
        {logo && (
          <Link
            className="pill-logo"
            href={items?.[0]?.href || "/"}
            aria-label="Home"
          >
            {typeof logo === "string" ? (
              <Image
                src={logo}
                alt={logoAlt}
                width={28}
                height={28}
                priority
              />
            ) : (
              logo
            )}
          </Link>
        )}

        {/* DESKTOP PILL ITEMS */}
        <div className="pill-nav-items desktop-only">
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => {
              const isActive = activeHref === item.href;
              const content = (
                <>
                  <span className="hover-circle" aria-hidden="true" />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover" aria-hidden="true">
                      {item.label}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={item.href || `item-${i}`} role="none">
                  {isExternalLink(item.href) ? (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={`pill${isActive ? " is-active" : ""}`}
                      aria-label={item.ariaLabel || item.label}
                      onClick={() => onItemClick?.(item)}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      role="menuitem"
                      href={item.href}
                      className={`pill${isActive ? " is-active" : ""}`}
                      aria-label={item.ariaLabel || item.label}
                      onClick={() => onItemClick?.(item)}
                    >
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* OPTIONAL RIGHT ELEMENT (e.g. Language & Theme switches) */}
        {rightElement && (
          <div className="hidden md:flex items-center ml-2">
            {rightElement}
          </div>
        )}

        {/* MOBILE MENU BUTTON */}
        <button
          className={`mobile-menu-button mobile-only ${isMobileMenuOpen ? "is-open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* MOBILE MENU POPOVER */}
      <div className={`mobile-menu-popover mobile-only ${isMobileMenuOpen ? "is-open" : ""}`} style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map((item, i) => {
            const isActive = activeHref === item.href;
            return (
              <li key={item.href || `mobile-item-${i}`}>
                {isExternalLink(item.href) ? (
                  <a
                    href={item.href}
                    className={`mobile-menu-link${isActive ? " is-active" : ""}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onItemClick?.(item);
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`mobile-menu-link${isActive ? " is-active" : ""}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onItemClick?.(item);
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
