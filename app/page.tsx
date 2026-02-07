'use client'
import SideBar from "@/app/components/sidebar";
import Heading from "@/app/components/heading";
import {useState} from "react";
import OverViewTab from "@/app/components/tabs/OverViewTab";
import TranscationsTab from "@/app/components/tabs/TranscationsTab";
import InvoicesTab from "@/app/components/tabs/InvoicesTab";

export default function Home() {
    type Tab = "overview" | "transactions" | "invoices";

    const [tabs, setTabs] = useState<Tab>("overview");

    return (
        <div className={"flex flex-row p-5"}>
            <SideBar/>
            <div className={"flex-row mx-auto"}>
                <Heading/>
                <div>
                    <div className="flex w-full gap-5">
                        <button className={"bg-white px-5 py-1 rounded-lg shadow-2xl"} onClick={() => setTabs("overview")}>Overview</button>
                        <button className={"bg-white px-5 py-1 rounded-lg shadow-2xl"} onClick={() => setTabs("transactions")}>Transactions</button>
                        <button className={"bg-white px-5 py-1 rounded-lg shadow-2xl"} onClick={() => setTabs("invoices")}>invoices</button>
                    </div>
                    <div className={"px-2 py-4"}>
                        <div>
                            {tabs === "overview" && <OverViewTab/>}
                            {tabs === "transactions" && <TranscationsTab/>}
                            {tabs === "invoices" && <InvoicesTab/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
