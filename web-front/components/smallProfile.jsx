function SmallProfileCard (){
    return (

<div class="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4">
    <div class="flex-row gap-4 flex justify-center items-center">
        <div class="flex-shrink-0">
            <a href="#" class="block relative">
                <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-16 w-16 "/>
            </a>
        </div>
        <div class=" flex flex-col">
            <span class="text-gray-600 dark:text-white text-lg font-medium">
                Charlie
            </span>
            <span class="text-gray-400 text-xs">
                CTO
            </span>
        </div>
    </div>
</div>

    )
}

export default SmallProfileCard; 