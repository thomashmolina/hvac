export default function Logo({ className = '', light = false }) {
  const textColor = light ? 'text-white' : 'text-blue-900 dark:text-blue-100'
  const accentColor = light ? 'text-blue-200' : 'text-blue-600 dark:text-blue-400'
  const lineColor = light ? 'bg-amber-400' : 'bg-amber-500'

  return (
    <div className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span className={`font-[Dancing_Script] text-3xl font-bold ${textColor}`} style={{ fontFamily: "'Dancing Script', cursive" }}>
        Cowboy
      </span>
      <span className={`text-[10px] font-semibold tracking-[0.25em] uppercase ${accentColor}`}>
        Heating & Air
      </span>
      <div className={`w-full h-[2px] mt-1 rounded-full ${lineColor}`} />
    </div>
  )
}
