import { useCustomCursor } from '../hooks/useCustomCursor.js';

export default function CustomCursor() {
  const { dotRef, ringRef } = useCustomCursor();
  return (
    <>
      <div className="cursor-dot" id="cursorDot" ref={dotRef}></div>
      <div className="cursor-ring" id="cursorRing" ref={ringRef}></div>
    </>
  );
}
