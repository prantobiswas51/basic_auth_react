import type { ReactNode } from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white">
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

            <div className="max-w-7xl mx-auto px-8 py-16">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-black">
                                M
                            </div>
                            <span className="text-xl font-bold tracking-tight">MyBrand</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Building beautiful digital experiences that leave a lasting impression.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-indigo-600 flex items-center justify-center text-sm transition-colors duration-200">X</a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-indigo-600 flex items-center justify-center text-sm transition-colors duration-200">G</a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-indigo-600 flex items-center justify-center text-sm transition-colors duration-200">in</a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-5">Product</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Changelog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Roadmap</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Documentation</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-5">Company</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Press Kit</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-5">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Get the latest updates delivered straight to your inbox.
                        </p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                            />
                            <button className="w-full px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold transition-colors duration-200">
                                Subscribe →
                            </button>
                        </div>
                        <p className="text-gray-600 text-xs mt-3">No spam. Unsubscribe anytime.</p>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-b border-gray-800 mb-10">
                    <div className="text-center">
                        <div className="text-2xl font-black text-white">50K+</div>
                        <div className="text-gray-500 text-xs mt-1 uppercase tracking-wide">Active Users</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-black text-white">99.9%</div>
                        <div className="text-gray-500 text-xs mt-1 uppercase tracking-wide">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-black text-white">120+</div>
                        <div className="text-gray-500 text-xs mt-1 uppercase tracking-wide">Countries</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-black text-white">4.9★</div>
                        <div className="text-gray-500 text-xs mt-1 uppercase tracking-wide">Avg. Rating</div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© 2024 MyBrand, Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                        <span className="text-xs">All systems operational</span>
                    </div>
                </div>

            </div>
        </footer>
    )
}