// Єдина сітка для всього сайту.
// 1180px — це ширина, під яку розраховані ілюстрації (макс. 470px у колонці).
export default function Container({ as: Tag = 'div', className = '', children }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1180px] px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Tag>
  )
}
