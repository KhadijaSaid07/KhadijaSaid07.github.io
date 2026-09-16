import { Mail, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-[#354541] bg-[#101716] text-[#F4EFE5]">
      <div className="portfolio-shell px-5 py-10 sm:px-8 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold">KHALSA360</p>

            <p className="mt-2 max-w-md text-sm leading-6 text-[#9CA7A1]">
              Web & Mobile Developer | Technical Support
            </p>

            <p className="mt-1 text-sm text-[#9CA7A1]">
              Zanzibar, Tanzania
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href="mailto:khadija09said09@gmail.com"
              className="flex items-center gap-2 text-[#D7D0C4]"
            >
              <Mail className="h-4 w-4 text-[#D96B48]" />
              khadija09said09@gmail.com
            </a>

            <a
              href="tel:+255675788310"
              className="flex items-center gap-2 text-[#D7D0C4]"
            >
              <Phone className="h-4 w-4 text-[#D6AD5D]" />
              +255 675 788 310
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-[#354541] pt-5">
          <div className="flex flex-col gap-2 text-xs text-[#6F7B76] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Khadija Ali Said</p>

            <p>Learn · Build · Solve · Grow</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

