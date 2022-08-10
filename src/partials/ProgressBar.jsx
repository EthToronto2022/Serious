
import {useLocation} from 'react-router-dom';
import { useBuyerFlow } from "../context/buyerFlow";


const ProgressBar = () => {
    const { pathname} = useLocation();
    const { config } = useBuyerFlow();

    const isSelectProductsPath = pathname === "/products";
    const isSelectCommitmentPath = pathname === "/products/lawyer" || pathname === "/products/mortgage";
    const isSelectProviderPath = pathname === "products/mortgage/providers" || pathname === "products/lawyer/providers";

    const hasSelectedProduct = Object.keys(config.product || {}).length > 0;
    const hasSelectedCommitment = config.selectedActivities.size > 0 && config.name.length > 0;
    const hasSelectedProvider = config.selectedProviders.size > 0;

    return (
    // bg-indigo-600 rounded-full group-hover:bg-indigo-800
    <nav aria-label="Progress">
        <ol role="list" className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
            <li className="relative md:flex-1 md:flex">
            <a href="#" className="group flex items-center w-full">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                <span className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 ${isSelectProductsPath ? "border-indigo-600" : ""} ${hasSelectedProduct ? "bg-indigo-600 rounded-full group-hover:bg-indigo-800" : ""}rounded-full`}>
                    {
                        hasSelectedProduct ? null : <span className={`${isSelectProductsPath ? "text-indigo-600" : ""}`}>01</span>
                    }
                    {
                        hasSelectedProduct ? 
                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg> : null
                    }
                </span>
                <span className={`ml-4 text-sm font-medium ${isSelectProductsPath ? "text-indigo-600" : ""}`}>Select Products</span>
                </span>
            </a>

            <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                <path d="M0 -2L20 40L0 82" vectorEffect="non-scaling-stroke" stroke="currentcolor" strokeLinejoin="round" />
                </svg>
            </div>
            </li>

            <li className="relative md:flex-1 md:flex">
            <a href="#" className="group flex items-center w-full">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                <span className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 ${isSelectCommitmentPath ? "border-indigo-600" : ""} ${hasSelectedCommitment ? "bg-indigo-600 rounded-full group-hover:bg-indigo-800" : ""}rounded-full`}>
                    {
                        hasSelectedCommitment ? null : <span className={`${isSelectCommitmentPath ? "text-indigo-600" : ""}`}>02</span>
                    }
                    {
                        hasSelectedCommitment ? 
                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg> : null
                    }
                </span>
                <span className={`ml-4 text-sm font-medium ${isSelectCommitmentPath ? "text-indigo-600" : "text-gray-500 group-hover:text-gray-900"}`}>Select Commitment</span>
                </span>
            </a>
            <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                <path d="M0 -2L20 40L0 82" vectorEffect="non-scaling-stroke" stroke="currentcolor" strokeLinejoin="round" />
                </svg>
            </div>
            </li>

            <li className="relative md:flex-1 md:flex">
            <a href="#" className="group flex items-center w-full">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                <span className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 ${isSelectProviderPath ? "border-indigo-600" : ""} ${hasSelectedProvider? "bg-indigo-600 rounded-full group-hover:bg-indigo-800" : ""}rounded-full`}>
                    {
                        hasSelectedProvider ? null : <span className={`${isSelectProviderPath ? "text-indigo-600" : ""}`}>03</span>
                    }
                    {
                        hasSelectedProvider ? 
                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg> : null
                    }
                </span>
                <span className={`ml-4 text-sm font-medium ${isSelectProviderPath ? "text-indigo-600" : "text-gray-500 group-hover:text-gray-900"}`}>Select Provider</span>
                </span>
            </a>
            </li>
        </ol>
        </nav>
    )
}

export default ProgressBar;