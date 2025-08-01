import React, { useEffect, useState } from 'react'

export default function Portfolio() {
    useEffect(() => {
        document.title = "Portfolio";
    }, []);
    
    const [imgSrc, setImgSrc] = useState("");
    const [isLayerVisible, setIsLayerVisible] = useState(false);
    
    function display(event) {
        const imgElement = event.currentTarget.querySelector("img");
        console.log(imgElement)
        if (imgElement) {
            setImgSrc(imgElement.src);
            setIsLayerVisible(true);
        }
    }
    
    function hideLayer() {
        setIsLayerVisible(false);
    }
  
    return (
        <div className="mb-4 pt-16">
            <div className="pt-4">
                <div className="text-center pt-4 text-second-color">
                    <h2 className="text-4xl font-bold uppercase mb-3">
                        portfolio component
                    </h2>
                    <div className="flex items-center justify-center mb-3">
                        <div className="line mr-3 bg-second-color"></div>
                        <i className="fa-solid fa-star"></i>
                        <div className="line ml-3 bg-second-color"></div>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                        <div className="lg:col-span-1 md:col-span-1">
                            <div className="rounded-3xl overflow-hidden relative cursor-pointer group" onClick={display}>
                                <img
                                    alt="Portfolio Item 1"
                                    className="w-full rounded-3xl"
                                    src="/src/assets/images/poert1.png"
                                />
                                <div className="layer__ absolute inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <i className="text-white fa-solid fa-plus text-6xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1 md:col-span-1">
                            <div className="rounded-3xl overflow-hidden relative cursor-pointer group" onClick={display}>
                                <img
                                    alt="Portfolio Item 2"
                                    className="w-full rounded-3xl"
                                    src="/src/assets/images/port2.png"
                                />
                                <div className="layer__ absolute inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <i className="text-white fa-solid fa-plus text-6xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1 md:col-span-1">
                            <div className="rounded-3xl overflow-hidden relative cursor-pointer group" onClick={display}>
                                <img
                                    alt="Portfolio Item 3"
                                    className="w-full rounded-3xl"
                                    src="/src/assets/images/port3.png"
                                />
                                <div className="layer__ absolute inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <i className="text-white fa-solid fa-plus text-6xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1 md:col-span-1">
                            <div className="rounded-3xl overflow-hidden relative cursor-pointer group" onClick={display}>
                                <img
                                    alt="Portfolio Item 4"
                                    className="w-full rounded-3xl"
                                    src="/src/assets/images/poert1.png"
                                />
                                <div className="layer__ absolute inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <i className="text-white fa-solid fa-plus text-6xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1 md:col-span-1">
                            <div className="rounded-3xl overflow-hidden relative cursor-pointer group" onClick={display}>
                                <img
                                    alt="Portfolio Item 5"
                                    className="w-full rounded-3xl"
                                    src="/src/assets/images/port2.png"
                                />
                                <div className="layer__ absolute inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <i className="text-white fa-solid fa-plus text-6xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1 md:col-span-1">
                            <div className="rounded-3xl overflow-hidden relative cursor-pointer group" onClick={display}>
                                <img
                                    alt="Portfolio Item 6"
                                    className="w-full rounded-3xl"
                                    src="/src/assets/images/port3.png"
                                />
                                <div className="layer__ absolute inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <i className="text-white fa-solid fa-plus text-6xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isLayerVisible && (
                <div className="model__ fixed inset-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={hideLayer}>
                    <div className="relative max-w-4xl max-h-full p-4">
                        <button 
                            onClick={hideLayer}
                            className="absolute top-2 right-2 text-white text-2xl hover:text-gray-300 z-10"
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                        <img alt="Portfolio Item" src={imgSrc} className="max-w-full max-h-full object-contain" />
                    </div>
                </div>
            )}
        </div>
    )
}
