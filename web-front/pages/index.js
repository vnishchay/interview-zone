import Head from 'next/head'
import router, {useRouter} from 'next/router'; 
export default function Home() {
 
    const handleClick = (e) =>{
        e.preventDefault()
        router.push('http://localhost:3000/interview'); 
    }

  return (

<div class="bg-indigo-900 relative overflow-hidden h-screen">
    <img src="/images/landscape/6.svg" class="absolute h-full w-full object-cover"/>
    <div class="inset-0 bg-black opacity-25 absolute">
    </div>
    <header class="absolute top-0 left-0 right-0 z-20">
        <nav class="container mx-auto px-6 md:px-12 py-4">
            <div class="md:flex justify-center items-center">
                <div class="flex justify-between items-center">
                    <div class="md:hidden">
                        <button class="text-white focus:outline-none">
                            <svg class="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="hidden md:flex items-center">
                    <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                        Ticket
                    </a>
                    <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                        Info
                    </a>
                    <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    </header>
    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class="w-full flex flex-col items-center relative z-10">
            <h1 class="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
                Life-changing
            </h1>
            <button onClick={handleClick} class="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10">
                Start Prepare Now
            </button>
        </div>
    </div>
</div>


  )
}
