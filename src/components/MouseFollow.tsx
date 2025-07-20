import React, { useEffect, useRef } from 'react';

const MouseFollow = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let mouseX = 0;
    let mouseY = 0;
    let orbX = 0;
    let orbY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth following with easing
      orbX += (mouseX - orbX) * 0.1;
      orbY += (mouseY - orbY) * 0.1;

      orb.style.transform = `translate(${orbX - 20}px, ${orbY - 20}px)`;
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className="fixed w-10 h-10 pointer-events-none z-50 mouse-orb"
      style={{ top: 0, left: 0 }}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 opacity-30 blur-sm"></div>
      <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 opacity-60"></div>
    </div>
  );
};

export default MouseFollow;