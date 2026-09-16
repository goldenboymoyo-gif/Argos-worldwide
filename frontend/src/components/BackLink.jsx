import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function BackLink({ to, label = 'Back', variant = 'dark', className = '' }) {
  const colors =
    variant === 'light'
      ? 'text-argos-gray hover:text-argos-black'
      : 'text-argos-gray-light hover:text-white'

  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-200 ${colors} ${className}`}
    >
      <ChevronLeft className="w-3.5 h-3.5" />
      {label}
    </Link>
  )
}
