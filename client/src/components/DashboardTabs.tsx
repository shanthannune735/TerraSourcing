import { Link, Outlet, useLocation } from "react-router-dom"
import { RiInboxArchiveLine } from "react-icons/ri"
import { LuBuilding2 } from "react-icons/lu"

export default function DashboardTabs(){

    const { pathname } = useLocation()

    return(
        <section className="px-4 mb-4">
            <header className="flex flex-row items-center justify-center py-2">
                <p className="text-2xl lg:text-3xl font-semibold">Dashboard</p>
            </header>

            <div className="max-w-[1080px] mx-auto py-4">
                <div className="flex flex-row gap-8 items-center">
                    <Link to={"/dashboard"} className={`${pathname == "/dashboard" ? "underline underline-offset-8 decoration-primary text-primary transition-all" : "" } cursor-pointer font-bold text-lg flex flex-row gap-1 items-center`}>
                        <LuBuilding2 />
                        <span>Companies</span>
                    </Link>
                    <Link to={"/responses"} className={`${pathname == "/responses" ? "underline underline-offset-8 decoration-primary text-primary transition-all" : "" } cursor-pointer font-bold text-lg flex flex-row items-center gap-1`}>
                        <RiInboxArchiveLine />
                        <span>Responses</span>
                    </Link>
                </div>
                <Outlet />
            </div>
        </section>
    )
}
