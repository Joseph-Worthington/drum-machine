const SoundBar = ({value, onChange}) => {
  return (
    <div>    
    <input
      type      ="range"
      min       ={0}
      max       ={1}
      step      ={0.01}
      value     ={value}
      onChange  ={onChange}
      className="bg-slate-950 accent-slate-900"
    />
    <p className='text-white'>{Math.round(value * 100)}</p>
    </div>
  )
}

export default SoundBar;