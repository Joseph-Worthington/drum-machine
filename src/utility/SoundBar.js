const SoundBar = ({value, onChange}) => {
  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={value}
      onChange={onChange}
    />
  )
}

export default SoundBar;