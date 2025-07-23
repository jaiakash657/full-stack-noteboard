import { Link } from "react-router"
import { PlaneIcon, PlusIcon } from "lucide-react"

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content">
        <div className="mx-auto max-w-6xl p-4 ">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">
                    Thinkboard
                </h1>

                <div className="flex items-center gap-4">
                    <Link to={"/create"} className="btn btn-primary">
                    <PlusIcon className="size-5"></PlusIcon>
                    <span>New Note</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
