export const metadata = {
  title: '뉴페이지',
  description: '뉴페이지',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      &copy; Next JS is great!!
    </div>
  )
}
