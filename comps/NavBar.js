import Link from 'next/Link';
import Image from 'next/image'

const NavBar = () => {
    return (  
        <nav>
            <div className="logo">
                <Image src="/groot.png" width='50' height='65'></Image>
                <h1>Nakka Abhishek</h1>
            </div>

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Contact</a></Link>
            <Link href="/ninjas/index.js"><a>Ninjas</a></Link>
         
            
        </nav>
    );
}
 
export default NavBar;