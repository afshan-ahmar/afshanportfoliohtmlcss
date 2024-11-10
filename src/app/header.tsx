import Link from "next/link";
function Header(){
    return(
        <header className="flex justify-between bg-slate-300">
            {/* LOGO */}
            <div>
                <h1 className="size-auto "><b> AFSHAN PORTFOLIO
               </b></h1>
               <img src="https://tl.vhv.rs/dpng/s/247-2473955_portfolio-logo-
               png-nome-portfolio-transparent-png.png" height="50" width="50"></img>
            </div>


            {/* LINK */}
            <div>
                <nav><ul className="flex gap-x-11 text-blue-950">
                    <li><Link href= "/"> Home </Link></li>
                    <li><Link href= "/about" > About </Link></li>
                    <li><Link href= "/contact"> Contact </Link></li>
                    <li><Link href= "/skills"> Skills </Link></li>
                    

                </ul>

                </nav>
            </div>
        </header>
    );
}
export default Header;