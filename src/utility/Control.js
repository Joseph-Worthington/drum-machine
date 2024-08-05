const Control = ({onClick, value}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <label class="inline-flex items-center cursor-pointer">
        <input onClick={onClick} type="checkbox" class="sr-only peer"></input>
        <div class="relative w-12 h-6 peer-checked:bg-slate-200 rounded-full 
                    peer
                    peer-checked:after:start-[4px] 
                    rtl:peer-checked:after:-translate-x-full 
                    peer-checked:after:border-white 
                    after:content-[''] 
                    after:absolute after:top-[2px] 
                    after:end-[4px] 
                    after:bg-white 
                    after:border-gray-300 
                    after:border 
                    after:rounded-full 
                    after:h-5 
                    after:w-5 
                    after:transition-all  
                    bg-slate-900">
        </div>

      </label>
      <span className="text-slate-50">{value}</span>      
    </div>
  )
}

export default Control