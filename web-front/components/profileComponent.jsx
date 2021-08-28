function ProfileComponent(){
    return (

<div class="shadow-lg rounded-2xl w-80 p-4 bg-white dark:bg-gray-800">
    <div class="flex flex-row items-start gap-4">
        <img src="/images/person/1.jpg" class="w-28 h-28 rounded-lg"/>
        <div class="h-28 w-full flex flex-col justify-between">
            <div>
                <p class="text-gray-800 dark:text-white text-xl font-medium">
                    John Jackson
                </p>
                <p class="text-gray-400 text-xs">
                    FullStack dev
                </p>
            </div>
            <div class="rounded-lg bg-blue-100 dark:bg-white p-2 w-full">
                <div class="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                    <p class="flex flex-col">
                        Articles
                        <span class="text-black dark:text-indigo-500 font-bold">
                            34
                        </span>
                    </p>
                    <p class="flex flex-col">
                        Followers
                        <span class="text-black dark:text-indigo-500 font-bold">
                            455
                        </span>
                    </p>
                    <p class="flex flex-col">
                        Rating
                        <span class="text-black dark:text-indigo-500 font-bold">
                            9.3
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-between gap-4 mt-6">
        <button type="button" class="w-1/2 px-4 py-2 text-base border rounded-lg text-grey-500 bg-white hover:bg-gray-200 ">
            Chat
        </button>
        <button type="button" class="w-1/2 px-4 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 ">
            Add friend
        </button>
    </div>
</div>

    )
}

export default ProfileComponent; 