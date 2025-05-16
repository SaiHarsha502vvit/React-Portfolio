import React, { useEffect, useRef, useState } from 'react';

// Pastel color palette from design system
const pastelColors = [
  'rgba(186, 201, 255, 0.7)', // lavender
  'rgba(186, 255, 221, 0.7)', // mint
  'rgba(255, 223, 186, 0.7)', // peach
  'rgba(255, 255, 186, 0.7)', // yellow
  'rgba(186, 225, 255, 0.7)', // blue
];

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const rippleRef = useRef(null);
  const [trail, setTrail] = useState([]);
  const [colorIdx, setColorIdx] = useState(0);

  // Cursor movement and trail
  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0)`;
      }
      setTrail((prev) => [...prev.slice(-14), { x, y, color: pastelColors[colorIdx] }]);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [colorIdx]);

  // Ripple effect on click
  useEffect(() => {
    const handleClick = (e) => {
      if (rippleRef.current) {
        rippleRef.current.style.left = `${e.clientX - 40}px`;
        rippleRef.current.style.top = `${e.clientY - 40}px`;
        rippleRef.current.classList.remove('active');
        // Force reflow
        void rippleRef.current.offsetWidth;
        rippleRef.current.classList.add('active');
      }
      setColorIdx((idx) => (idx + 1) % pastelColors.length);
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  // Hide on mobile
  const isTouch =
    typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouch) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: pastelColors[colorIdx],
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          transition: 'background 0.3s',
          boxShadow: '0 0 24px 8px rgba(0,0,0,0.08)',
        }}
      />
      {/* Ripple effect */}
      <div
        ref={rippleRef}
        className="custom-cursor-ripple"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: pastelColors[(colorIdx + 1) % pastelColors.length],
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          mixBlendMode: 'exclusion',
        }}
      />
      {/* Trail effect */}
      {trail.map((t, i) => (
        <div
          key={i}
          style={{
            position: 'fixed',
            left: t.x - 10,
            top: t.y - 10,
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: t.color,
            pointerEvents: 'none',
            zIndex: 9997,
            opacity: ((i + 1) / trail.length) * 0.5,
            filter: 'blur(2px)',
            mixBlendMode: 'lighten',
            transition: 'opacity 0.2s',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
