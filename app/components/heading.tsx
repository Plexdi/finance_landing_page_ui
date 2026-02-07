import {Search, Bell} from "lucide-react";

export default function Heading(){
    return (
        <div className={"flex flex-row items-center h-20 w-full px-4 gap-60"}>
            <div className={"flex flex-col"}>
                <span>Financial</span>
                <span className={"text-gray-400"}>Manage finances, transactions, and invoices</span>
            </div>
            <div className={"flex items-center gap-9 px-4 rounded-xl w-[900px] h-14 bg-white"}>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="search"
                        placeholder="Search by property, location, or client"
                        className={"h-8 w-75 rounded-md border border-black/5 pl-9 pr-2 text-xs shadow-sm"}
                    />
                </div>
                <div><a className={"flex justify-center bg-[#0e9666] px-5 w-full h-[40px] items-center rounded-md whitespace-nowrap text-white"}>+ Add Transactions</a></div>
                <div className={" flex justify-center items-center h-10 w-10 shadow-xl border/5 border rounded-xl"}>
                    <a href={"/notifications"}><Bell/></a>
                </div>
                <div className={" flex justify-center items-center h-10 w-10 bg-[#e9e9e9] rounded-xl"}>
                    <a href={"/Behance"} className={"text-[#401ab2] font-bold"}>Be</a>
                </div>
                <div className={"flex flex-col"}>
                    <div className={"font-bold"}>Be Confidency</div>
                    <div className={"text-sm text-gray-400"}>Thanhngo200698@gmail.com</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}