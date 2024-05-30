import React from "react";
import userAvatar from "./components/avatar/user-avatar.png";


function Category() {
    return (
        <div className="bg-black min-h-screen flex flex-col">

            {/* Category Sort */}
            <div className="bg-gray-900 text-white p-4">
                <div className="flex items-center justify-center">
                    <h2 className="text-lg font-semibold">
                        <label htmlFor="category" className="mr-2">Sort By: </label>
                        <select name="feature" id="feature" className="px-2 py-1 bg-orange-800 text-white rounded mr-6">
                            <option value="All">All</option>
                            <option value="popular">Popular</option>
                            <option value="newest">Newest</option>
                            <option value="trending">Trending</option>
                        </select>
                    </h2>
                    <h2 className="text-lg font-semibold">
                        <label htmlFor="category" className="mr-2">Categories: </label>
                        <select name="category" id="category" className="px-2 py-1 bg-orange-800 text-white rounded mr-6">
                            <option value="All">All</option>
                            <option value="Action">Action</option>
                            <option value="Romantic">Romantic</option>
                            <option value="Ecchi">Ecchi</option>
                        </select>
                    </h2>
                    <h2 className="text-lg font-semibold">
                        <label htmlFor="status" className="mr-2">Status: </label>
                        <select name="status" id="status" className="px-2 py-1 bg-orange-800 text-white rounded mr-6">
                            <option value="All">All</option>
                            <option value="Free">Free</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </h2>
                </div>
            </div>

            {/* Grid Layout */}
            <div className="flex-1 bg-black-900 text-white p-8">

                <h2 className="text-2xl font-bold mt-12 mb-4">Anime</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                        <img src={userAvatar} alt="Movie" className="w-full h-48 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">Anime Title</h3>
                        <p className="text-sm">99.9M View  / Romantic, Action </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                        <img src={userAvatar} alt="Movie" className="w-full h-48 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">Anime Title</h3>
                        <p className="text-sm">99.9M View  / Romantic, Action </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                        <img src={userAvatar} alt="Movie" className="w-full h-48 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">Anime Title</h3>
                        <p className="text-sm">99.9M View  / Romantic, Action </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                        <img src={userAvatar} alt="Movie" className="w-full h-48 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">Anime Title</h3>
                        <p className="text-sm">99.9M View  / Romantic, Action </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                        <img src={userAvatar} alt="Movie" className="w-full h-48 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">Anime Title</h3>
                        <p className="text-sm">99.9M View  / Romantic, Action </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                        <img src={userAvatar} alt="Movie" className="w-full h-48 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">Anime Title</h3>
                        <p className="text-sm">99.9M View  / Romantic, Action </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                        <img src={userAvatar} alt="Movie" className="w-full h-48 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">Anime Title</h3>
                        <p className="text-sm">99.9M View  / Romantic, Action </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                        <img src={userAvatar} alt="Movie" className="w-full h-48 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">Anime Title</h3>
                        <p className="text-sm">99.9M View  / Romantic, Action </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                        <img src={userAvatar} alt="Movie" className="w-full h-48 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">Anime Title</h3>
                        <p className="text-sm">99.9M View  / Romantic, Action </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                        <img src={userAvatar} alt="Movie" className="w-full h-48 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">Anime Title</h3>
                        <p className="text-sm">99.9M View  / Romantic, Action </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                        <img src={userAvatar} alt="Movie" className="w-full h-48 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">Anime Title</h3>
                        <p className="text-sm">99.9M View  / Romantic, Action </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                        <img src={userAvatar} alt="Movie" className="w-full h-48 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">Anime Title</h3>
                        <p className="text-sm">99.9M View  / Romantic, Action </p>
                    </div>
                    {/* add++ anime card */}
                </div>

            </div>
        </div>
    );
}

export default Category;
