import './GlassSurface.css';

const GlassSurface = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  backgroundOpacity = 0.12,
  saturation = 1.12,
  className = '',
  style = {}
}) => {
  const surfaceStyle = {
    ...style,
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: `${borderRadius}px`,
    '--glass-frost': backgroundOpacity,
    '--glass-saturation': saturation
  };

  return (
    <div className={`glass-surface ${className}`.trim()} style={surfaceStyle}>
      <div className="glass-surface__content">{children}</div>
    </div>
  );
};

export default GlassSurface;
