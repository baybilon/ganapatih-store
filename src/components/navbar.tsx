import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarAction from "@/components/navbar-action";
import getStore from "@/actions/get-store";

const Navbar = async () => {

    const categories = await getCategories();

    // const URL = `${process.env.NEXT_PUBLIC_API_URL}`;
    // let str = URL.split("api/")[1]
    // const storeName = await getStore(str);
    

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">Toko</p>
                    </Link>
                    <MainNav data={categories}/>
                    <NavbarAction/>
                </div>
            </Container>
        </div>
    );
}
 
export default Navbar;