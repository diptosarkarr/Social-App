import { bottombarLinks } from "@/constants"
import { Link, useLocation } from "react-router-dom"

const BottomBar = () => {
  const { pathname } = useLocation()

  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route
        return (

          <Link
            to={link.route}
            key={link.label}
            className={`${isActive && 'bg-primary-500 rounded-[10px]'} flex-col flex-center p-2 gap-1 transition`}
          >
            <img
              src={link.imgURL}
              className={`${isActive && 'invert-white'}`}
              width={16}
              height={16}
            />
            <p className="tiny-medium">{link.label}</p>
          </Link>


        )

      })}
    </section>
  )
}

export default BottomBar