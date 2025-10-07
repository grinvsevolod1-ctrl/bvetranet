import './globals.css'
import Provider from '../components/ThemeProvider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export const metadata = { title: 'Bvetra', description: 'Premium transfers and car rentals' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Provider>
          <Navbar />
          <main className="container">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
