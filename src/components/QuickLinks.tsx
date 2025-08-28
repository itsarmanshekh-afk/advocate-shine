import {
    Search,
    UserPlus,
    Users,
    BookOpen,
    Newspaper,
    Globe
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const QuickLinks = () => {
    const links = [
        {
            title: 'Members Search',
            description: 'Find AIFTP members across India',
            icon: Search,
            href: '#members-search',
        },
        {
            title: 'Join Membership',
            description: 'Become part of our community',
            icon: UserPlus,
            href: '#join',
        },
        {
            title: 'Members Directory',
            description: 'Complete member database',
            icon: Users,
            href: '#directory',
        },
        {
            title: 'Indirect Tax Journal',
            description: 'Latest indirect tax insights',
            icon: BookOpen,
            href: '#indirect-journal',
        },
        {
            title: 'AIFTP Times',
            description: 'Monthly newsletter & updates',
            icon: Newspaper,
            href: '#times',
        },
        {
            title: 'Global Network',
            description: 'Webinars & conferences',
            icon: Globe,
            href: '#network',
        }
    ];

    return (
        <section className=" text-white py-20 ">
            <div className='pt-16 relative overflow-clip'>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ffd24d] to-transparent"></div>
                <div className='flex justify-center'>
                    <div className='w-[60%] h-20 bg-[#ffd24d] absolute top-0 blur-[150px]'></div>
                </div>

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
                        Quick Access
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Everything you need at your fingertips. Explore our comprehensive resources and services.
                    </p>
                </div>

                {/* Grid Boxes */}
                <div className="w-full border-t border-b border-dotted border-yellow-500/30">
                    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                        {/* Row 1 */}
                        <a href="#members-search" className="p-6  border-l border-yellow-500/20 hover:bg-yellow-500/10 transition-colors">
                            <div className="flex flex-col items-start py-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Search className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-bold mb-2 mt-3 text-accent">Members Search</h3>
                                <p className="text-gray-300">Find AIFTP members across India</p>
                            </div>
                        </a>

                        <a href="#join" className="p-6 border-l border-yellow-500/20 hover:bg-yellow-500/10 transition-colors">
                            <div className="flex flex-col items-start py-4">

                                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <UserPlus className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 mt-3 text-accent">Join Membership</h3>
                                <p className="text-gray-300">Become part of our community</p>
                            </div>
                        </a>

                        <a href="#directory" className="p-6 border-l border-yellow-500/20 hover:bg-yellow-500/10 transition-colors">
                            <div className="flex flex-col items-start py-4">
                                
                                
                                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                                </div>
                                
                                <h3 className="text-xl font-bold mb-2 mt-3 text-accent">Members Directory</h3>
                                <p className="text-gray-300">Complete member database</p>
                            </div>
                        </a>

                        {/* Row 2 */}
                        <a href="#indirect-journal" className="p-6  border-l border-t border-yellow-500/20 hover:bg-yellow-500/10 transition-colors">
                            <div className="flex flex-col items-start py-4">
                               
                                
                                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <BookOpen className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                                </div>
                                
                                <h3 className="text-xl font-bold mb-2 mt-3 text-accent">Indirect Tax Journal</h3>
                                <p className="text-gray-300">Latest indirect tax insights</p>
                            </div>
                        </a>

                        <a href="#times" className="p-6  border-t border-l border-yellow-500/20 hover:bg-yellow-500/10 transition-colors">
                            <div className="flex flex-col items-start py-4">
                                
                                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Newspaper className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                                </div>
                                
                                <h3 className="text-xl font-bold mb-2 mt-3 text-accent">AIFTP Times</h3>
                                <p className="text-gray-300">Monthly newsletter & updates</p>
                            </div>
                        </a>

                        <a href="#network" className="p-6 border-l border-t border-yellow-500/20 hover:bg-yellow-500/10 transition-colors">
                            <div className="flex flex-col items-start py-4">
                               
                                   <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Globe className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                                </div>
                                
                                <h3 className="text-xl font-bold mb-2 mt-3 text-accent">Global Network</h3>
                                <p className="text-gray-300">Webinars & conferences</p>
                            </div>
                        </a>

                    </div>
                </div>






            </div>
        </section>
    );
};

export default QuickLinks;
