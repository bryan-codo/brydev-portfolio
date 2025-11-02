// src/components/LogoLoop.jsx
import React, { useState } from 'react';

export default function LogoLoop({
  logos,
  speed = 120,
  direction = "left",
  logoHeight = 48,
  gap = 40,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = true,
  fadeOutColor = "#ffffff",
  ariaLabel = "Logo loop"
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Double the logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  const containerStyle = {
    display: 'flex',
    gap: `${gap}px`,
    animation: isHovered && pauseOnHover 
      ? 'none' 
      : `scroll-${direction} ${speed}s linear infinite`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: `${logoHeight * 2}px`,
    height: `${logoHeight}px`,
    fontSize: `${logoHeight * 0.7}px`,
    transition: scaleOnHover ? 'transform 0.3s ease' : 'none',
    transform: isHovered && scaleOnHover ? 'scale(1.1)' : 'scale(1)',
    cursor: 'pointer',
  };

  const fadeStyle = fadeOut ? {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, ${fadeOutColor} 0%, transparent 10%, transparent 90%, ${fadeOutColor} 100%)`,
    pointerEvents: 'none',
    zIndex: 10,
  } : null;

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

      <div 
        style={{ position: 'relative', width: '100%', overflow: 'hidden' }}
        aria-label={ariaLabel}
      >
        <div style={containerStyle}>
          {duplicatedLogos.map((logo, idx) => (
            <a
              key={idx}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              style={logoStyle}
              title={logo.title}
              className="hover:opacity-80 transition-opacity"
            >
              {logo.node ? (
                <div className="flex items-center justify-center">
                  {React.cloneElement(logo.node, { size: logoHeight })}
                </div>
              ) : logo.src ? (
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              ) : null}
            </a>
          ))}
        </div>

        {fadeStyle && <div style={fadeStyle}></div>}
      </div>
    </>
  );
}