import { LayoutDashboard, Building2, LogOut, BarChart3, CircleDollarSign, Form, Landmark, MessageCircleQuestionMark, Settings} from "lucide-react";

export default function SideBar(){
    return(
        <div className={"flex flex-col gap-5 px-2"}>
            <div className={"flex flex-cold items-center gap-2"}>
                <div className={"flex items-center justify-center h-10 w-10 bg-[#0e9664] rounded-xl"}><Landmark className={"text-white"}></Landmark></div>
                <span className={"text-3xl font-bold whitespace-nowrap "}>RealEstate Pro</span>
            </div>
            <div className={"flex flex-col shadow-[0_8px_24px_rgba(0,0,0,0.06)] border backdrop-blur-sm border-black/5 bg-white h-[800px] w-[250px] p-4 gap-6 shadow-xl rounded-2xl"}>
                <div className={"flex flex-col gap-6"}>
                    <div className={""}>Menu</div>
                    <ul className={"flex flex-col gap-4 px-3"}>
                        <li>
                            <a href="/dashboard" className={"flex gap-1"}>
                                <LayoutDashboard className="w-5 h-5 text-gray-600" />
                                <span className={"text-gray-600"}>Dashboards</span>
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard" className={"flex gap-1"}>
                                <Building2 className="w-5 h-5 text-gray-600" />
                                <span className={"text-gray-600"}>Properties</span>
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard" className={"flex gap-1"}>
                                <BarChart3 className="w-5 h-5 text-gray-600" />
                                <span className={"text-gray-600"}>Analytics</span>
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard" className={"flex gap-1"}>
                                <CircleDollarSign className="w-5 h-5 text-gray-600" />
                                <span className={"text-gray-600"}>Financial</span>
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard" className={"flex gap-1"}>
                                <Form className="w-5 h-5 text-gray-600" />
                                <span className={"text-gray-600"}>Documents</span>
                            </a>
                        </li>
                    </ul>
                </div>
                    <div className={"flex flex-col gap-6 py-4"}>
                        <div>General</div>
                        <ul className={"flex flex-col gap-4 px-3"}>
                            <li>
                                <a href="/dashboard" className={"flex gap-1"}>
                                    <Settings className="w-5 h-5 text-gray-600" />
                                    <span className={"text-gray-600"}>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard" className={"flex gap-1"}>
                                    <MessageCircleQuestionMark className="w-5 h-5 text-gray-600" />
                                    <span className={"text-gray-600"}>Help</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard" className={"flex gap-1"}>
                                    <LogOut className="w-5 h-5 text-gray-600" />
                                    <span className={"text-gray-600"}>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                <div>
                    <div className={"flex flex-col bg-[#e2f3ee] h-[250px] w-full p-3 rounded-xl gap-2"}>
                        <div>
                            <span className={"text-xl"}>Upgrade to Pro</span>
                        </div>
                        <div>
                            <span className={"text-s"}>Unlock advanced anayltics and manage unlimited properties</span>
                        </div>
                        <div className={"flex flex-col gap-4"}>
                            <a className={"flex justify-center bg-[#0e9666] w-full h-[40px] items-center rounded-xl text-white"}>Upgrade Now</a>
                            <a className={"flex justify-center bg-[white] w-full h-[40px] items-center rounded-xl text-black"}>Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}