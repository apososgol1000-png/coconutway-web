export default function CubeMini({ className = "" }) {
  return (
    <div className={`cube-scene ${className}`}>
      <div className="cube-3d">
        <div className="face face-front" />
        <div className="face face-back" />
        <div className="face face-right" />
        <div className="face face-left" />
        <div className="face face-top" />
        <div className="face face-bottom" />
      </div>
    </div>
  );
}
