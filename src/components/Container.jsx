export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[970px] px-6 md:px-8 ${className}`}>
      {children}
    </div>
  )
}
